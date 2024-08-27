# Real-Time Chat Application

This is a real-time chat application built with Node.js, Express, Socket.IO, and MongoDB. It allows users to send and receive messages instantly, supports user authentication, and includes group chat functionality.

## Features

- User registration and authentication
- Real-time messaging using Socket.IO
- One-on-one chat
- Group chat functionality
- Message history retrieval
- Dockerized for easy deployment

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js
- You have installed [Docker Desktop]
- You have installed [Docker Compose]

## Installing and Running the Chat Application

To install and run the chat application, follow these steps:

1. Clone the repository
2. Build and run the Docker containers
3. The application will be available at `http://localhost:3003`

## Using the Chat Application

1. Register a new account or log in with existing credentials
2. Start chatting with other users in real-time
3. Create or join group chats
4. View message history

## API Endpoints

- GET `/test` - Testing for Docker is working or not.
- POST `/api/users/register` - Register a new user
  {
  "username": "testuser",
  "email": "testuser@example.com",
  "password": "password123"
  }
- POST `/api/users/login` - Log in a user
  {
  "email": "testuser@example.com",
  "password": "password123"
  }
- POST `/api/messages` - Send a new message
  {
  "receiverId": "<receiver_user_id>",
  "content": "Hello, this is a test message!"
  }
- GET `/api/messages/history` - Retrieve message history
  http://localhost:3003/api/messages/history?withUserId=<receiver_user_id>
- POST `/api/groups` - Create a new group
  {
  "name": "Test Group",
  "members": ["<member1_user_id>", "<member2_user_id>"]
  }
- POST `/api/groups/{groupId}/messages` - Send a message to a group
  {
  "content": "Hello, this is a test group message!"
  }

## Note: Please pass Authorization token after all the apis other than Login and register

# Token: after Login you will get one 'token' with users info

## Development

To set up the development environment:

1. Install dependencies
2. Start the development server

## Deployment

The application is containerized and can be easily deployed to any Docker-compatible hosting service. Ensure that you set the appropriate environment variables for production use.

## Contributing to the Chat Application

To contribute to the chat application, follow these steps:

1. Fork this repository
2. Create a branch: `git checkout -b <branch_name>`
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request

## Contact

If you want to contact me, you can reach me at `adnanahad.in@gmail.com`.
