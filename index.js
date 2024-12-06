const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const appRoutes = require("./routes/appRoutes");

const app = express();
const PORT = 3000;

// Set up database connection
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// Routes
app.use("/", appRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});