class APIClient {
    sendRequest(endpoint: string): void;

    sendRequest(endpoint: string, requestBody: string, requestStatus: boolean): void;

    sendRequest(endpoint: string, requestBody?: string, requestStatus?: boolean): void {
        console.log("Endpoint:", endpoint);

        if (requestBody !== undefined) {
            console.log("Request Body:", requestBody);
            console.log(requestStatus ? "Request successful" : "Request failed");
        }
    }
}

// Demonstrate both overloads
const client = new APIClient();

client.sendRequest("/users");

client.sendRequest("/users",'{"name":"saranya"}',true);