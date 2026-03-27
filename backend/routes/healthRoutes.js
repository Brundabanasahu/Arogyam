const express = require("express");
const router = express.Router();

const Health = require("../models/Health");
const authorizeRole = require("../middleware/authorizeRole");

// 🔹 Alert
function getAlertMessage(heartRate, oxygen, bp) {
  const alertMessages = [];

  if (heartRate < 50 || heartRate > 110) {
    alertMessages.push("Alert: Heart rate is out of normal range");
  }

  if (oxygen < 92) {
    alertMessages.push("Critical: Oxygen level is low");
  }

  const [systolic = 0, diastolic = 0] = String(bp)
    .split("/")
    .map(Number);

  if (systolic > 140 || diastolic > 90) {
    alertMessages.push("Warning: Blood pressure is high");
  }

  return alertMessages.join(" | ");
}

//Health Data

router.post("/health", authorizeRole("care_manager"), async (req, res) => {
  try {
    const { heartRate, oxygen, bp } = req.body;

    if (!heartRate || !oxygen || !bp) {
      return res.status(400).json({ message: "All fields required" });
    }

    const last = await Health.find().sort({ patientId: -1 }).limit(1);

    const newPatientId =
      last.length > 0 && typeof last[0].patientId === "number"
        ? last[0].patientId + 1
        : 1;

    const alert = getAlertMessage(Number(heartRate), Number(oxygen), bp);

    const newData = new Health({
      patientId: newPatientId,
      heartRate: Number(heartRate),
      oxygen: Number(oxygen),
      bp,
      alert
    });

    await newData.save();

    res.status(201).json({
      message: "Data added successfully",
      patientId: newPatientId
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

//get all the data

router.get("/health/all", async (req, res) => {
  try {
    const data = await Health.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

//get by pateint

router.get("/health/:id", async (req, res) => {   // ✅ CHANGED HERE
  try {
    const data = await Health.find({
      patientId: Number(req.params.id)
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

//alerts
router.get("/alerts", async (req, res) => {
  try {
    const alerts = await Health.find({ alert: { $ne: "" } });
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;