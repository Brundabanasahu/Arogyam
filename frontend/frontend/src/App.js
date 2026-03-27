import { useState } from "react";
import "./App.css";

import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./user/Dashboard";
import Home from "./pages/common/Home";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("home");

  if (!user) {
    return (
      <div className="app">
        {page === "home" && (
          <Home
            goToLogin={() => setPage("login")}
            goToRegister={() => setPage("register")}
          />
        )}

        {page === "register" && (
          <Register
            goToLogin={() => setPage("login")}
            goToHome={() => setPage("home")}   // ✅ ADD THIS
          />
        )}

        {page === "login" && <Login setUser={setUser} 
        goToHome={() => setPage("home")}
    goToRegister={() => setPage("register")}/>}
      </div>
    );
  }

  return (
    <Dashboard
      user={user}
      onLogout={() => {
        setUser(null);
        setPage("home");
      }}
    />
  );
}

export default App;