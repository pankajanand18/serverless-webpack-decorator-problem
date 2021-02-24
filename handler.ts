import {Context, APIGatewayEvent, APIGatewayProxyResult} from "aws-lambda";
import {User} from "./user.model";

export async function hello(
    event: APIGatewayEvent,
    context: Context
): Promise<APIGatewayProxyResult> {
    const user = new User("hello@gmail.com", "123", '123')
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Go Serverless v2.0! Your function executed successfully!",
            context,
            event,
        }),
    };
}
