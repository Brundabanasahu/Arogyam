const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const healthRoutes = require("./routes/healthRoutes");
const auth = require("./middleware/auth");

const app = express();
const PORT = 5000;
const MONGO_URL = "mongodb://127.0.0.1:27017/elderDB";

app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error.message));

app.use("/auth", authRoutes);
app.use("/api", auth, healthRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});