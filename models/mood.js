const mongoose = require("mongoose");

const MoodSchema = new mongoose.Schema({
    mood: { type: String, required: true },
});

const Mood = mongoose.model("Mood", MoodSchema);

module.exports = Mood;