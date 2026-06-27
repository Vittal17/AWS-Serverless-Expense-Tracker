import json
import boto3
import uuid

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Expenses')

def lambda_handler(event, context):

    body = json.loads(event['body'])

    amount = body.get('amount')
    category = body.get('category')

    if amount is None or category is None:
        return {
            'statusCode': 400,
            'body': json.dumps('amount and category are required')
        }

    expense_id = str(uuid.uuid4())

    item = {
        'expenseId': expense_id,
        'amount': amount,
        'category': category
    }

    table.put_item(Item=item)

    return {
        'statusCode': 200,
        'body': json.dumps({
            'message': 'Expense added successfully',
            'expenseId': expense_id
        })
    }