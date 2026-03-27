const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const healthRoutes = require("./routes/healthRoutes");
const auth = require("./middleware/auth");

const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// ENV
const MONGO_URL = process.env.MONGO_URL;

//middleware
app.use(express.json());

app.use(cors({
  origin: "*"
}));

//db connections
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error.message));

//routes
app.use("/auth", authRoutes);
app.use("/api", auth, healthRoutes);

//test routes
app.get("/", (req, res) => {
  res.send("Backend running...");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});