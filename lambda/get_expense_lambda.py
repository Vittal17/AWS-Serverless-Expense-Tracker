import json
import boto3
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Expenses')

def decimal_default(obj):
    if isinstance(obj, Decimal):
        return float(obj)
    raise TypeError

def lambda_handler(event, context):

    response = table.scan()

    items = response['Items']

    return {
        'statusCode': 200,
        'body': json.dumps(items, default=decimal_default)
    }