const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    userid: {
      type: Number,
      required: true
    },
    message: {
      type: [String], // Define message as an array of strings
    },
    counter: {
      type: Number,
      default: 0  // Initialize counter to 0 for new documents
    }
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", reportSchema);
module.exports = { Report };
