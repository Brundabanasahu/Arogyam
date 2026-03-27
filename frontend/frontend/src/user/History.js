import { useState } from "react";

function History({ user }) {
  const [data, setData] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [message, setMessage] = useState("Enter a patient ID to view history.");

  const loadHistory = async (e) => {
    e.preventDefault();

    if (!patientId) {
      setMessage("Please enter patient ID");
      return;
    }

    const res = await fetch(`https://arogyam-ge8y.onrender.com/api/health/${patientId}`, { // ✅ CHANGED
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });

    const result = await res.json();
    if (!res.ok) {
      setMessage("Something went wrong");
      setData([]);
      return;
    }

    setData(result);
    setMessage(result.length === 0 ? "No history for this patient." : "");
  };

  return (
    <div className="section-card">
      <h3>History</h3>
      <form onSubmit={loadHistory}>
        <input
          placeholder="Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />
        <button type="submit">Load History</button>
      </form>
      {message && <p className="message">{message}</p>}

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Heart Rate</th>
            <th>Oxygen</th>
            <th>BP</th>
            <th>Alert</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.heartRate}</td>
              <td>{item.oxygen}</td>
              <td>{item.bp}</td>
              <td>{item.alert}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;