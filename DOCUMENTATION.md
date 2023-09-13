# User Management API

This is a simple User Management API built with Node.js, Express.js, and MongoDB. It allows you to perform basic CRUD (Create, Read, Update, Delete) operations on user data.


## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)




The server should be running on `http://localhost:5000`.



## API Endpoints

### Create a User

- **Endpoint**: `POST /api`

- **Request Body**:

  ```json
  {
    "name": "John Doe"
  }
  ```

- **Response**:

  ```json
  {
    "status": "success",
    "message": "User created successfully",
    "data": {
      "_id": "user-id",
      "name": "John Doe",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```


### Get all Users

- **Endpoint**: `GET /api`
- **Response**:

  ```json
  {
    "status": "success",
    "message": "User successfully retrieved",
    "data": {
      "_id": "user-id",
      "name": "John Doe",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }

  {
    "status": "success",
    "message": "User successfully retrieved",
    "data": {
      "_id": "user-id",
      "name": "Tony Doe",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```


  ### Get a specific User

- **Endpoint**: `GET /api?name=Sam`
- **Response**:

  ```json
  {
    "status": "success",
    "message": "User successfully retrieved",
    "data": {
      "_id": "user-id",
      "name": "Sam",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```


### Update a User

- **Endpoint**: `PUT /api/:id`
- **Request Body**:

  ```json
  {
    "name": "Updated Name"
  }
  ```

- **Response**:

  ```json
  {
    "status": "success",
    "message": "User updated successfully",
    "data": {
      "_id": "user-id",
      "name": "Updated Name",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```


### Delete a User

- **Endpoint**: `DELETE /api/:id`
- **Response**:

  ```json
  {
    "status": "success",
    "message": "User successfully deleted",
    "data": {
      "_id": "user-id",
      "name": "Deleted User",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```



# Sample Usage
Here are some examples of how to use the API:


POST /api/users
Content-Type: application/json

## Creating a new User

- **Endpoint**: `POST /api`
- **Request Body**:

```json
{
    "name": "Alice Johnson"
}
```

- **Response**:
```json
{
    "status": "success",
    "message": "User created successfully",
    "data": {
        "_id": "64ffba1f9aad62fe34a4a008",
        "name": "Alice Johnson",
        "createdAt": "2023-09-11T00:54:51.721Z",
        "updatedAt": "2023-09-11T02:21:19.154Z",
        "__v": 0
    }
}
```

## Getting a User

- **Endpoint**: `GET /api/64ffba1f9aad62fe34a4a008`

**response**:
```json
{
    "status": "success",
    "message": "User successfully retrieved",
    "data": {
        "_id": "64ffba1f9aad62fe34a4a008",
        "name": "Alice Johnson",
        "createdAt": "2023-09-11T00:54:51.721Z",
        "updatedAt": "2023-09-11T00:54:51.721Z",
        "__v": 0
    }
}
```

## Updating a new User

- **Endpoint**: `POST /api`
- **Request Body**:

```json
{
    "name": "sams"
}
```

- **Response**:
```json
{
    "status": "success",
    "message": "User updated successfully",
    "data": {
        "_id": "64ffba1f9aad62fe34a4a008",
        "name": "sams",
        "createdAt": "2023-09-11T00:54:51.721Z",
        "updatedAt": "2023-09-11T02:21:19.154Z",
        "__v": 0
    }
}
```







## Error Handling

- If a user is not found, the API will return a 404 status code with a relevant error message.
- If there's a validation error in the request body, the API will return a 400 status code with a validation error message.
- Internal server errors will return a 500 status code with an "Internal server error" message.



## Limitations:

- Basic User Data: The API is designed to handle basic user data, specifically just the user's name. If you need to store additional information about users, you'll need to modify the data schema and endpoints accordingly.

- User Authentication: The API does not include any form of authentication or authorization mechanisms. It assumes that all incoming requests are valid and authorized.

- No Validation for User Name: Currently, the API doesn't enforce any specific rules or constraints on user names. You might want to add validation rules for names, such as minimum and maximum length or allowed characters.

- No Pagination: If you have a large number of users, the API does not provide pagination for listing users. It fetches all users at once, which may not be efficient for large datasets.

- Minimal Documentation: The API documentation may be minimal, assuming that users are familiar with the API's functionality.


## Assumptions:

- MongoDB: The API assumes that MongoDB is used as the database. If you plan to use a different database, you'll need to adapt the database-related code accordingly.

- Environment Variables: The API relies on environment variables, such as PORT and MongoURI, for configuration. It assumes that these variables are correctly set before running the application.

- Single Resource: The API is designed to manage a single resource (users). If you need to manage multiple resources or have more complex data relationships, you'll need to expand the API accordingly.

- No Middleware: The API does not include any middleware for features like logging, request validation, or input sanitation. 

- Single Deployment Environment: The deployment instructions assume a single deployment environment. If you plan to deploy in multiple environments (e.g., development, staging, production), you may need additional deployment configurations.