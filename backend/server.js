const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const healthRoutes = require("./routes/healthRoutes");
const auth = require("./middleware/auth");

const app = express();

// ✅ IMPORTANT
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
app.use(cors());
app.use(express.json());

// DB CONNECT
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error.message));

// ROUTES
app.use("/auth", authRoutes);
app.use("/api", auth, healthRoutes);

app.get("/", (req, res) => {
  res.send("Backend running...");
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});