import { useState } from "react";

function AddHealth() {
  const [heartRate, setHeartRate] = useState("");
  const [oxygen, setOxygen] = useState("");
  const [bp, setBp] = useState("");

  const addData = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("https://arogyam-ge8y.onrender.com/api/health", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({
        heartRate,
        oxygen,
        bp
      })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Data added successfully ✅");
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <h2>Add Health Data</h2>

      <input placeholder="Heart Rate" onChange={(e) => setHeartRate(e.target.value)} />
      <input placeholder="Oxygen" onChange={(e) => setOxygen(e.target.value)} />
      <input placeholder="BP (120/80)" onChange={(e) => setBp(e.target.value)} />

      <button onClick={addData}>Add Data</button>
    </div>
  );
}

export default AddHealth;