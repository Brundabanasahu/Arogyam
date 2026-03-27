import { useState } from "react";

function Register({ goToLogin, goToHome }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("care_manager");
  const [message, setMessage] = useState("");

  const register = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();

      if (data.message === "You are already registered, please login") {
        setMessage("You are already registered, please login");
        return;
      }

      if (res.ok) {
        setMessage("Registered successfully ✅");
        setName("");
        setEmail("");
        setPassword("");
        setRole("care_manager");
      } else {
        setMessage(data.message || "Unable to register ❌");
      }
    } catch (error) {
      setMessage("Server error ❌");
    }
  };

  return (
    <div className="modal show d-block">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">

          {/* HEADER */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Register</h3>
           <button className="btn-close" onClick={goToHome}></button>
          </div>

          {/* FORM */}
          <form onSubmit={register}>
            <input
              className="form-control mb-2"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="form-control mb-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="form-control mb-2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <select
              className="form-control mb-3"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="care_manager">Care Manager</option>
              <option value="parent">Parent</option>
              <option value="child">Child</option>
            </select>

            <button type="submit" className="btn btn-primary w-100 mb-2">
              Register
            </button>
          </form>

          {/* MESSAGE */}
          {message && (
            <p className="text-center mt-2">{message}</p>
          )}

          {/* LOGIN BUTTON */}
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={goToLogin}
          >
            Go to Login
          </button>

        </div>
      </div>
    </div>
  );
}

export default Register;