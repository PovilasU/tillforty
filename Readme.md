# My Material-UI App

## Overview

This project is a web application that includes sign-up, sign-in, and dashboard functionalities. It uses PostgreSQL for the database, Google authentication, Material-UI for the UI components, and TypeScript for type safety. The backend is built with Node.js and Express, and the frontend is built with React. The application is hosted on a Raspberry Pi and accessible at [till40.povilas.cc](http://till40.povilas.cc).

## Features

- **Sign-Up**: Users can create an account using their email and password.
- **Sign-In**: Users can log in using their email and password.
- **Dashboard**: Authenticated users can access the dashboard.
- **Google Authentication**: Users can sign up and sign in using their Google account.
- **Material-UI**: The application uses Material-UI components for a modern and responsive design.
- **TypeScript**: The application is built with TypeScript for type safety and better developer experience.
- **Axios**: Axios is used for making HTTP requests to the backend.
- **Node.js and Express**: The backend is built with Node.js and Express.
- **PostgreSQL**: PostgreSQL is used as the database.

## Technologies Used

- **Frontend**:

  - React
  - Material-UI
  - TypeScript
  - Axios

- **Backend**:

  - Node.js
  - Express
  - PostgreSQL

- **Authentication**:
  - Firebase Authentication (Google Sign-In)

## Hosting

The application is hosted on a Raspberry Pi and accessible at [till40.povilas.cc](http://till40.povilas.cc).

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- Raspberry Pi (for hosting)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/PovilasU/tillforty.git
   cd tillforty
   ```

2. Install dependencies for the frontend:

   ```sh
   cd my-material-ui-app
   npm install
   ```

3. Install dependencies for the backend:

   ```sh
   cd server
   npm install
   ```

4. Set up the PostgreSQL database and update the database configuration in `server/server.js`.

5. Start the backend server:

   ```sh
   cd server
   node server.js
   ```

6. Start the frontend development server:
   ```sh
   cd my-material-ui-app
   npm run dev
   ```

### Usage

1. Open your browser and navigate to `http://localhost:5173` to access the application.
2. Use the sign-up form to create a new account or sign in with an existing account.
3. Access the dashboard after signing in.

## License

This project is licensed under the MIT License.
