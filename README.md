<div align="center">

# ☁️ AWS Serverless Expense Tracker

### A Modern Cloud-Native Expense Management Application Built Entirely on AWS Serverless Services

[![AWS](https://img.shields.io/badge/AWS-Cloud-orange?logo=amazonaws\&logoColor=white)](https://aws.amazon.com/)
[![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python\&logoColor=white)](https://www.python.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![AWS Lambda](https://img.shields.io/badge/AWS-Lambda-FF9900?logo=awslambda\&logoColor=white)](https://aws.amazon.com/lambda/)
[![Amazon DynamoDB](https://img.shields.io/badge/Amazon-DynamoDB-4053D6?logo=amazondynamodb\&logoColor=white)](https://aws.amazon.com/dynamodb/)
[![Amazon CloudFront](https://img.shields.io/badge/Amazon-CloudFront-8C4FFF?logo=amazonaws\&logoColor=white)](https://aws.amazon.com/cloudfront/)

---

<p align="center">

<a href="https://d2gebx9p0217kz.cloudfront.net">
<img src="https://img.shields.io/badge/🚀-Live%20Demo-success?style=for-the-badge">
</a>

</p>

</div>

---

# 📖 Overview

AWS Serverless Expense Tracker is a fully serverless web application that enables users to efficiently manage and visualize their daily expenses through an interactive analytics dashboard.

The application follows a modern cloud-native architecture where the frontend is hosted on **Amazon S3** and securely delivered worldwide through **Amazon CloudFront** over HTTPS. Backend functionality is implemented using **AWS Lambda** behind **Amazon API Gateway**, while **Amazon DynamoDB** provides scalable NoSQL storage for expense records.

The project demonstrates practical implementation of serverless computing, RESTful API design, secure content delivery, and scalable cloud architecture using core AWS services.

---

# ✨ Features

* 💰 Add and delete expenses in real time
* 📊 Interactive analytics dashboard using Chart.js
* 📈 Category-wise spending visualization
* 🔎 Instant expense search
* 🕒 Human-readable timestamps
* ☁️ Fully serverless backend architecture
* 🔐 HTTPS delivery through Amazon CloudFront
* ⚡ REST APIs powered by Amazon API Gateway
* 🗄️ Persistent storage using Amazon DynamoDB
* 📱 Responsive glassmorphism user interface
* 🌍 Global content delivery using CloudFront CDN

---

# ⚙️ How It Works

The AWS Serverless Expense Tracker follows an event-driven, serverless architecture where every user interaction is processed on demand without the need to provision or manage servers.

When a user opens the application, the static frontend (HTML, CSS, and JavaScript) is delivered from **Amazon S3** through **Amazon CloudFront**, ensuring fast global access over HTTPS. The frontend communicates with backend services by making secure REST API requests to **Amazon API Gateway**.

Each API request triggers an **AWS Lambda** function responsible for validating input, executing the required business logic, and interacting with **Amazon DynamoDB** to create, retrieve, or delete expense records. The processed response is then returned to the frontend, where the user interface updates instantly without requiring a page refresh.

This architecture enables the application to automatically scale based on demand while minimizing operational overhead and infrastructure costs.

---

# 🔄 End-to-End Request Flow

```text
👤 User
      │
      ▼
🌍 Amazon CloudFront (HTTPS CDN)
      │
      ▼
📦 Amazon S3 (Static Website Hosting)
      │
      ▼
⚡ Amazon API Gateway (REST APIs)
      │
      ▼
🧠 AWS Lambda (Business Logic)
      │
      ▼
🗄️ Amazon DynamoDB (Expense Storage)
      │
      ▼
📤 JSON Response
      │
      ▼
💻 Updated Dashboard
```

---

# 🎯 Why Serverless?

✅ **No Server Management**  
Focus entirely on application development while AWS manages the underlying infrastructure.

⚡ **Automatic Scaling**  
Resources automatically scale up or down based on incoming traffic.

💰 **Pay Only for Usage**  
Lambda functions are billed only when they execute, making the application highly cost-effective.

🔒 **Secure by Design**  
CloudFront provides HTTPS delivery, while API Gateway securely exposes backend endpoints.

🚀 **High Availability**  
AWS managed services ensure fault tolerance and high availability with minimal operational effort.

📈 **Production-Ready Architecture**  
The project demonstrates real-world cloud engineering concepts including RESTful APIs, event-driven computing, serverless architecture, CDN distribution, and NoSQL database design.

---

# 💡 Learning Outcomes

This project provided hands-on experience with:

- ☁️ Designing and deploying serverless applications on AWS
- ⚡ Building RESTful APIs using Amazon API Gateway and AWS Lambda
- 🗄️ Working with NoSQL databases using Amazon DynamoDB
- 🌍 Hosting static web applications with Amazon S3 and CloudFront
- 🔐 Configuring IAM permissions and secure cloud access
- 📊 Integrating frontend applications with cloud-native backend services
- 🚀 Understanding scalable, event-driven cloud architectures used in production

- **Made with ❤️ for Cloud Engineering**
