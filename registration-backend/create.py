import json
import os
import time
import uuid
import boto3
dynamodb = boto3.resource('dynamodb')


def create(event, context):
    data = json.loads(event['body'])

    timestamp = int(time.time() * 1000)

    ## Creating a table inside DynamoDB
    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])

    ## Items to populate the table
    item = {
        'firstName': data['firstName'],
        'lastName': data['lastName'],
        'email': data['email'],
        'userName': data['userName'],
        'password': data['password'],
        'adminFlg': data['adminFlg'],
        'createdAt': timestamp,
        'updatedAt': timestamp
    }

    # write the item to the database
    table.put_item(Item=item)

    # create a response
    response = {
        "statusCode": 200,
        "body": json.dumps(item),
        "headers": {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true"
        }
    }

    return response