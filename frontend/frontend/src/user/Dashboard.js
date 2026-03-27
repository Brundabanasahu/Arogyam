import AddHealth from "./AddHealth";
import Alerts from "./Alerts";
import History from "./History";
import Emergency from "./Emergency";

function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard-container">

      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <h2>Dashboard</h2>
          <p className="welcome-text">
            Welcome, {user.name} ({user.role})
          </p>
        </div>

        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>

      {/* GRID */}
      <div className="dashboard-grid">

        {/* Add Health (only care manager) */}
        {user.role === "care_manager" && (
          <div className="card-section">
            <AddHealth user={user} />
          </div>
        )}

        {/* Emergency (only parent) */}
        {user.role === "parent" && (
          <div className="card-section">
            <Emergency />
          </div>
        )}

        {/* Alerts */}
        <div className="card-section">
          <Alerts user={user} />
        </div>

        {/* History */}
        <div className="card-section">
          <History user={user} />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;