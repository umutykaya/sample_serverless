import { DynamoDB } from 'aws-sdk';

const dynamoDb = new DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME || '';

exports.handler = async (event: any) => {
    const { httpMethod, path, body } = event;

    switch (httpMethod) {
        case 'GET':
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Hello from the serverless app!' }),
            };

        case 'POST':
            const item = JSON.parse(body);
            await dynamoDb.put({
                TableName: TABLE_NAME,
                Item: item,
            }).promise();
            return {
                statusCode: 201,
                body: JSON.stringify(item),
            };

        default:
            return {
                statusCode: 405,
                body: JSON.stringify({ message: 'Method Not Allowed' }),
            };
    }
};