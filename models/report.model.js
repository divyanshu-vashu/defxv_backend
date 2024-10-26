const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    userid: {
      type: Number,
      required: true
    },
    message: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    }
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", reportSchema);
module.exports = { Report };
