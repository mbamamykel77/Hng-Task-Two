## Getting Started

Follow these steps to set up and run the API on your local machine:

### Clone the Repository

```bash
git clone <repository-url>
```

### Set Up Environment Variables

Create a `.env` file in the project root and set the following environment variables:

```env
PORT=5000
MongoURI=mongodb://localhost:27017/your-database-name
```

- `PORT`: The port on which the API will run (default is 5000).
- `MongoURI`: The MongoDB connection URI (use your local MongoDB or a cloud-hosted instance).

### Install Dependencies

Install the project dependencies by running:

```bash
npm install
```

### Start the Server

Start the API server:

```bash
npm start
```

The API should now be running locally at `http://localhost:5000`.



## API Endpoints
The API provides the following endpoints for managing user data:


### Create a User
- **Endpoint**: `POST /api`

### Get all Users
- **Endpoint**: `GET /api/:id`

### Get a specific User
- **Endpoint**: `GET /api?name=Sam`

### Update a User
- **Endpoint**: `PUT /api/:id`

### Delete a User
- **Endpoint**: `DELETE /api/:id`




## Contributing
Contributions are welcome! If you have suggestions, improvements, or bug fixes, please open an issue or create a pull request.