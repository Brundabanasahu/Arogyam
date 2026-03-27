import { useState } from "react";

function Emergency() {
  const [message, setMessage] = useState("");

  return (
    <div className="section-card emergency-card">
      <h3>Emergency</h3>
      <p>If the elder needs immediate help, use this emergency button.</p>
      <button className="danger-btn" onClick={() => setMessage("Emergency alert sent")}>
        Emergency Call
      </button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Emergency;