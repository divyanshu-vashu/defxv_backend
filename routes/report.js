const router = require("express").Router();
const { Report } = require("../models/report.model");

// POST route to create or update a report - /api/sendreport
router.post("/", async (req, res) => {
    try {
        const { userid, message } = req.body;

        if (!userid || typeof userid !== "number") {
            return res.status(400).send({ message: "Invalid or missing userid" });
        }
        
        if (!message || typeof message !== "string") {
            return res.status(400).send({ message: "Invalid or missing message" });
        }

        // Find the user report and update the message array
        const report = await Report.findOneAndUpdate(
            { userid },
            { $push: { message }, $inc: { counter: 1 } },
            { new: true, upsert: true }
        );

        res.status(201).send({ message: "Report updated successfully", report });
    } catch (error) {
        console.error("Error in POST /api/sendreport:", error);
        res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
});

// GET route to fetch all reports or by specific userid - /api/getreport
router.get("/", async (req, res) => {
    try {
        const { userid } = req.query;
        const query = userid ? { userid: parseInt(userid, 10) } : {};

        // Find reports based on the query
        const reports = await Report.find(query);

        res.status(200).send(reports);
    } catch (error) {
        console.error("Error in GET /api/getreport:", error);
        res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
});

// GET route to fetch user report details by userid - /api/user/:userid
router.get("/:userid", async (req, res) => {
    try {
        const { userid } = req.params;

        // Find report by userid
        // const report = await Report.findOne({ userid: parseInt(userid, 10) });
        const report = await Report.findOne({ _id: userid });

        if (!report) {
            return res.status(404).send({ message: "Report not found" });
        }

        res.status(200).send(report);
    } catch (error) {
        console.error("Error in GET /api/user/:userid:", error);
        res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
});

// GET route to fetch counter for a specific userid - /api/user/:userid/counter
router.get("/:userid/counter", async (req, res) => {
    try {
        const { userid } = req.params;

        // Find report by userid
        // const report = await Report.findOne({ _id: parseInt(userid, 10) });
        const report = await Report.findOne({ _id: userid });

        if (!report) {
            return res.status(404).send({ message: "Report not found" });
        }

        res.status(200).send({ counter: report.counter });
    } catch (error) {
        console.error("Error in GET /api/user/:userid/counter:", error);
        res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
});

module.exports = router;
