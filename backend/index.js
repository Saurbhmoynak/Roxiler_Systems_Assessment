const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;
const app = express();
const connectDB = require("./db/database.js");

// Middleware
app.use(express.json()); // To parse JSON requests
app.use(cors()); // Enable CORS

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERR:", error);
      throw error;
    });

    // Root API Route
    app.get("/", (req, res) => {
      res.send("Hello Roxiler Systems!");
    });

    // API Routes
    const transactionRoutes = require("./routes/transactionRoutes");
    app.use("/api", transactionRoutes); // Prefix API routes with `/api`

    // Handle 404 Errors
    app.use((req, res) => {
      res.status(404).json({ error: "Route not found" });
    });

    // Start the Server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!!", err);
  });
