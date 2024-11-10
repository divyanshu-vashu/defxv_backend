const express = require('express');
const cors = require('cors');  // Ensure CORS is available
const { resolve } = require('path');
const connection = require("./db");
const app = express();
const port = process.env.PORT || 5000;

// Middleware to serve static files
app.use(express.static(resolve(__dirname, 'static')));

// Connect to the database
connection();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for cross-origin requests
app.use(cors());

// Import route handler for reports
const reportRoutes = require("./routes/report");

// Route to serve the home page
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// API route for handling report data
app.use("/api/sendreport", reportRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
