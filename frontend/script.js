function getCategoryIcon(category){

    const icons={

        Food:"🍔",
        Travel:"✈️",
        Shopping:"🛒",
        Bills:"⚡",
        Health:"🩺",
        Fuel:"⛽",
        Entertainment:"🎬",
        Education:"📚",
        Other:"📦"

    };

    return icons[category] || "📌";

}

console.log("SCRIPT LOADED");

const API_URL =
    "https://8eogiw7f96.execute-api.ap-south-1.amazonaws.com";

let expenseChart = null;
let allExpenses = [];

const categoryIcons = {

    Food: "🍔",

    Travel: "✈",

    Shopping: "🛒",

    Bills: "⚡",

    Health: "🏥",

    Fuel: "⛽",

    Entertainment: "🎬",

    Education: "📚",

    Other: "📦"

};


/* ==========================================
   FORMAT DATE
========================================== */

function formatDate(dateString) {

    if (!dateString) return "";

    const date = new Date(dateString);

    const today = new Date();

    const yesterday = new Date();

    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {

        return `Today • ${date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        })}`;

    }

    if (date.toDateString() === yesterday.toDateString()) {

        return `Yesterday • ${date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        })}`;

    }

    return date.toLocaleString("en-IN", {

        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"

    });

}


/* ==========================================
   LOAD EXPENSES
========================================== */

async function loadExpenses() {

    console.log("Loading expenses...");

    try {

        const response = await fetch(
            `${API_URL}/expenses`
        );

        if (!response.ok) {

            throw new Error("Failed to fetch expenses.");

        }

        const expenses = await response.json();

        console.log(expenses);

        allExpenses = expenses;

        renderExpenses(expenses);

    }

    catch (error) {

        console.error(error);

    }

}


/* ==========================================
   RENDER EXPENSES
========================================== */

function renderExpenses(expenses) {

    const expensesList =
        document.getElementById("expensesList");

    expensesList.innerHTML = "";

    let total = 0;

    expenses.forEach(expense => {

        total += Number(expense.amount);

        expensesList.innerHTML += `

        <div class="expense-item">

            <div>

                <h4>${categoryIcons[expense.category] || "📦"} ${expense.category}</h4>

                <small>

                    ${expense.description || ""}

                </small>

                <p>

                    ₹${Number(expense.amount).toFixed(2)}

                </p>

                <div class="expense-date">

                    ${formatDate(expense.createdAt)}

                </div>

            </div>

            <button
                onclick="deleteExpense('${expense.expenseId}')"
            >

                Delete

            </button>

        </div>

        `;

    });


    document.getElementById("totalAmount").innerText =
        `₹${total.toFixed(2)}`;

    document.getElementById("transactionCount").innerText =
        expenses.length;

    document.getElementById("expenseCount").innerText =
        expenses.length;

    const highest =
        expenses.length
            ? Math.max(...expenses.map(
                e => Number(e.amount)
            ))
            : 0;

    const average =
        expenses.length
            ? total / expenses.length
            : 0;

    document.getElementById("highestExpense").innerText =
        `₹${highest.toFixed(2)}`;

    document.getElementById("averageExpense").innerText =
        `₹${average.toFixed(2)}`;

    updateChart(expenses);

}


/* ==========================================
   UPDATE CHART
========================================== */

function updateChart(expenses) {

    const categoryTotals = {};

    expenses.forEach(expense => {

        const category = expense.category;

        if (categoryTotals[category]) {

            categoryTotals[category] +=
                Number(expense.amount);

        }

        else {

            categoryTotals[category] =
                Number(expense.amount);

        }

    });

    const labels =
        Object.keys(categoryTotals);

    const values =
        Object.values(categoryTotals);

    const colors = [

        "#3B82F6",
        "#8B5CF6",
        "#10B981",
        "#F59E0B",
        "#EF4444",
        "#06B6D4",
        "#EC4899",
        "#14B8A6"

    ];

    if (expenseChart) {

        expenseChart.destroy();

    }

    const ctx =
        document.getElementById(
            "expenseChart"
        );

    expenseChart = new Chart(ctx, {

        type: "doughnut",

        data: {

            labels: labels,

            datasets: [

                {

                    data: values,

                    backgroundColor: colors,

                    borderWidth: 0,

                    hoverOffset: 12

                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    position: "bottom",

                    labels: {

                        color: "white",

                        padding: 20,

                        font: {

                            size: 14

                        }

                    }

                }

            }

        }

    });

}

/* ==========================================
   ADD EXPENSE
========================================== */

async function addExpense() {

    const amount =
        document.getElementById("amount").value;

    const category =
        document.getElementById("category").value.trim();

    const description =
        document.getElementById("description").value.trim();

    if (!amount || !category || !description) {

        alert("Please fill all fields.");

        return;

    }

    try {

        const response = await fetch(

            `${API_URL}/expenses`,

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    amount: Number(amount),

                    category,

                    description

                })

            }

        );

        if (!response.ok) {

            const error =
                await response.text();

            console.error(error);

            alert("Failed to add expense.");

            return;

        }

        document.getElementById("amount").value = "";

        document.getElementById("category").value = "";

        document.getElementById("description").value = "";

        await loadExpenses();

    }

    catch (error) {

        console.error(error);

    }

}


/* ==========================================
   DELETE EXPENSE
========================================== */

async function deleteExpense(id) {

    const confirmDelete =
        confirm("Delete this expense?");

    if (!confirmDelete) {

        return;

    }

    try {

        const response = await fetch(

            `${API_URL}/expenses/${id}`,

            {

                method: "DELETE"

            }

        );

        if (!response.ok) {

            console.error("Delete failed.");

            return;

        }

        await loadExpenses();

    }

    catch (error) {

        console.error(error);

    }

}


/* ==========================================
   SEARCH
========================================== */

function filterExpenses() {

    const query =

        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    if (query === "") {

        renderExpenses(allExpenses);

        return;

    }

    const filtered =

        allExpenses.filter(expense =>

            expense.category
                .toLowerCase()
                .includes(query)

            ||

            (expense.description || "")
                .toLowerCase()
                .includes(query)

        );

    renderExpenses(filtered);

}


/* ==========================================
   LIVE SEARCH
========================================== */

document

    .getElementById("searchInput")

    .addEventListener(

        "input",

        filterExpenses

    );


/* ==========================================
   PAGE LOAD
========================================== */

window.onload = () => {

    loadExpenses();

};

