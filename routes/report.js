const router = require("express").Router();
const { Report } = require("../models/report.model"); // Ensure correct path and import

// POST route to create a new report
router.post("/", async (req, res) => {
    try {
        const { userid, message } = req.body; // Destructure the incoming data

        if (!userid || typeof userid !== "number") {
            return res.status(400).send({ message: "Invalid or missing userid" });
        }

        // Create a new report
        const newReport = new Report({ userid, message });
        await newReport.save();

        res.status(201).send({ message: "New report created successfully" });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// GET route to fetch user report details
router.get("/", async (req, res) => {
    // console.log("GET /api/getreport called");
    try {
        const { userid } = req.query;

        // Find reports by userid if provided; otherwise, fetch all reports
        const reports = userid ? await Report.find({ userid }) : await Report.find();

        res.status(200).send(reports);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
