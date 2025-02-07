# Roxiler Systems - MERN Stack Developer Intern - Online Assessment Submission

## Overview
This project is a MERN stack-based assessment that involves creating backend APIs and a frontend interface for handling product transactions. The project fetches data from a third-party API, initializes a database, and provides various endpoints for transactions, statistics, and visualizations.

## Features
### Backend APIs
- **Initialize Database**: Fetch data from a third-party API and seed the database.
- **List Transactions**: Supports search, pagination, and filtering by month.
- **Statistics API**: Provides total sales amount, sold items, and unsold items for a given month.
- **Bar Chart API**: Returns the number of items in different price ranges for a selected month.
- **Pie Chart API**: Returns unique categories and the number of items per category.
- **Combined API**: Merges data from all the above APIs into a single response.

### Frontend Features
- Displays a transaction table with search and pagination.
- Dropdown for month selection (default: March).
- Displays statistics such as total sales, sold items, and unsold items.
- Renders a bar chart for price ranges and item counts.
- Renders a pie chart for category-based item distribution.

## Tech Stack
### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv (for environment variables)
- cors (for handling cross-origin requests)
- axios (for API calls)
- nodemon (for development auto-restart)

### Frontend
- React.js
- TailwindCSS
- Chart.js & react-chartjs-2 (for visualizations)
- @remixicon/react (for icons)

## Setup Instructions
### Prerequisites
- Node.js and npm installed
- MongoDB running locally or a cloud-based MongoDB instance

### Installation
1. Clone the repository:
   ```sh
   git clone git@github.com:Saurbhmoynak/Roxiler_Systems_Assessment.git
   cd Roxiler_Systems_Assessment
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the required variables:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     PORT=5000
     ```

4. Start the backend server:
   ```sh
   npm run dev
   ```

5. Start the frontend application:
   ```sh
   cd client
   npm start
   ```

## API Endpoints
### 1. Initialize Database
- **GET** `/api/initDatabase`

### 2. List Transactions
- **GET** `/api/transactions?month=March&page=1&search=keyword`

### 3. Statistics API
- **GET** `/api/statistics?month=March`

### 4. Bar Chart API
- **GET** `/api/barChart?month=March`

### 5. Pie Chart API
- **GET** `/api/pieChart?month=March`

### 6. Combined API
- **GET** `/api/combinedResponse?month=March`

## Contribution
Feel free to fork the repo and submit pull requests to improve the project.

## License
This project is open-source and free to use.

