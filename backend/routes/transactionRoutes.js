const express = require("express");
const router = express.Router();
const {
  initializeDatabase,
  listTransactions,
  statistics,
  barChart,
  pieChart,
  combinedResponse,
} = require("../controllers/api");

// Define routes without the "/api/" prefix
router.get("/initDatabase", initializeDatabase);
router.get("/transactions", listTransactions);
router.get("/statistics", statistics);
router.get("/barChart", barChart);
router.get("/pieChart", pieChart);
router.get("/combinedResponse", combinedResponse);

module.exports = router;
