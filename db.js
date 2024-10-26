const mongoose = require("mongoose");
require('dotenv').config();
const databaseUrl = process.env.DATABASE_URL;

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(databaseUrl, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};


// const mongoose = require("mongoose");
// require("dotenv").config();

// const databaseUrl = process.env.DATABASE_URL;
// console.log("Database URL:", databaseUrl); // Check that the URL is loaded

// const connectDB = () => {
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	};
// 	try {
// 		mongoose.connect(databaseUrl, connectionParams);
// 		console.log("Connected to database successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Could not connect to database!");
// 	}
// };

// // Call the function to connect to the database
// connectDB();
