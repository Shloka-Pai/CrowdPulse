// server.js

const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");

const app = express();

// middleware
app.use(express.json());

// DB connection
connectDB();

// routes
app.use("/api/auth", authRoutes);

// server start
app.listen(5000, function() {
  console.log("Server running on port 5000");
});