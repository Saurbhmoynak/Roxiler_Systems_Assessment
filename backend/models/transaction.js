const mongoose = require("mongoose");

// Defining the schema for your data
const transactionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Storing image URL
    required: false, // Optional field
  },
  sold: {
    type: Boolean,
    required: true,
    default: false, // Default to false if not provided
  },
  dateOfSale: {
    type: Date,
    required: true,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
