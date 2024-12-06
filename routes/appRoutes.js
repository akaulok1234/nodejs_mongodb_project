const express = require("express");
const Mood = require("../models/mood");
const router = express.Router();

// Insert a mood into the database
router.post("/data", async (req, res) => {
    try {
        const mood = req.body.mood; // Get mood from the form
        const moodDocument = new Mood({ mood });
        await moodDocument.save(); // Save it to the database

        // Pass data to the 'form' template
        res.render("form", { data: mood });
    } catch (err) {
        res.status(500).send("Error saving mood.");
    }
});

// Count moods in the database
router.post("/find", async (req, res) => {
    try {
        const mood = req.body.mood; // Get mood from the form
        const count = await Mood.countDocuments({ mood }); // Count the moods

        // Pass data and mood to the 'result' template
        res.render("result", { data: count, mood });
    } catch (err) {
        res.status(500).send("Error counting moods.");
    }
});
// Render index page
router.get("/", (req, res) => {
    res.render("index");
});

// Render manager page
router.get("/manager", (req, res) => {
    res.render("manager");
});

module.exports = router;