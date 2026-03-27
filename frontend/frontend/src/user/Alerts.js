import { useEffect, useState } from "react";

function Alerts({ user }) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/alerts", {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then((res) => res.json())
      .then((result) => setAlerts(Array.isArray(result) ? result : []));
  }, [user]);

  return (
    <div className="section-card">
      <h3>Alerts</h3>
      {alerts.length === 0 && <p>No alerts yet.</p>}
      {alerts.map((item) => (
        <div key={item._id} className="alert-item">
          <strong>Patient ID: {item.patientId}</strong>
          <p>{item.alert}</p>
        </div>
      ))}
    </div>
  );
}

export default Alerts;