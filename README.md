 🛒 Shopping List API


A simple RESTful API to manage a shopping list. Users can add, retrieve, update, and delete shopping items.

⚙️ Installation

Follow these steps to set up the project on your local machine.

1. Clone the Repository

git clone https://github.com/dolamo-ui/Shopping-List-API.git
cd Shopping-List-API

2. Install Dependencies
npm install

Make sure you have Node.js and npm installed. You can check with node -v and npm -v.

1. Start the Server

npm run dev

📡 API Endpoints

GET /items

Description: Retrieve all items from the shopping list.

Method: GET
URL: http://localhost:3000/items
Response Type: application/json

{
  "data": [
    {
      "id": "204e46aa-93b3-4233-b8cc-4ebf4e2cc319",
      "name": "milk",
      "quantity": 4,
      "purchased": false
    },
    {
      "id": "9ce566fe-e538-4317-a14c-facaab3cd262",
      "name": "egg",
      "quantity": 5,
      "purchased": false
    },
    {
      "id": "99c5f62c-cf98-4146-9e06-9a7585adcaeb",
      "name": "meat",
      "quantity": 5,
      "purchased": false
    }
  ]
}



GET /items/:id

Description: Retrieve a single item from the shopping list by its unique id.

Method: GET
URL: http://localhost:3000/items/:id
Example URL:
http://localhost:3000/items/9ce566fe-e538-4317-a14c-facaab3cd262
Response Type: application/json

{
  "data": {
    "id": "9ce566fe-e538-4317-a14c-facaab3cd262",
    "name": "egg",
    "quantity": 5,
    "purchased": false
  }
}

⚠️ Error Responses
{
  "error": "Item not found"
}

➕ POST /items

Description: Add a new item to the shopping list.
Method: POST
URL: http://localhost:3000/items
Request Body: application/json
Response Type: application/json

📝 Example Request
{
  "name": "bread",
  "quantity": 2
}

✅ Example Success Response
{
  "data": {
    "id": "c33b3c4a-28c2-41b7-88f1-5a45e0d8f3b0",
    "name": "bread",
    "quantity": 2,
    "purchased": false
  }
}

⚠️ Error Example

{
  "error": "Missing required fields"
}

PUT /items/:id

Description: Update an existing item in the shopping list.

Method: PUT

URL: http://localhost:3000/items/:id

Example: http://localhost:3000/items/204e46aa-93b3-4233-b8cc-4ebf4e2cc319

Request Body: application/json

Response Type: application/json

Example Request
{
  "name": "milk",
  "quantity": 3,
  "purchased": true
}

✅ Example Success Response

{
  
  "data": {
    "id": "204e46aa-93b3-4233-b8cc-4ebf4e2cc319",
    "name": "milk",
    "quantity": 3,
    "purchased": true
  }
}

⚠️ Error Example

{
  "error": "Item not found"
}


🗑️ DELETE /items/:id

Description: Delete an item from the shopping list.
Method: DELETE
URL: http://localhost:3000/items/:id
Example: http://localhost:3000/items/99c5f62c-cf98-4146-9e06-9a7585adcaeb
Response Type: application/json

✅ Example Success Response
{
  "message": "empty"
}

⚠️ Error Example
{
  "error": "Item not found"
}

❗ Error Handling

The API returns meaningful HTTP status codes and error messages for different failure cases.

🔄 Common Status Codes

| Code | Meaning               | Description                                 |
| ---- | --------------------- | ------------------------------------------- |
| 200  | OK                    | The request was successful.                 |
| 201  | Created               | A new resource was successfully created.    |
| 400  | Bad Request           | The request data was invalid or incomplete. |
| 404  | Not Found             | The requested resource does not exist.      |
| 500  | Internal Server Error | Something went wrong on the server.         |

⚠️ Error Response Format

When an error occurs, the API returns a JSON response in the following format:

{
  "error": "Descriptive error message"
}

Example: Invalid Request Payload (400 Bad Request)

{
  "error": "Missing required field: name"
}

Example: Item Not Found (404 Not Found)

{
  "error": "Item not found"
}

Example: Server Error (500 Internal Server Error)

{
  "error": "Something went wrong"
}


