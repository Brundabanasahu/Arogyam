import { useState } from "react";

function Login({ setUser, goToHome, goToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("https://arogyam-ge8y.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Login failed ❌");
        return;
      }

      // save token
      localStorage.setItem("token", data.token);

      setMessage("Login successful ✅");

      setTimeout(() => {
        setUser({
          token: data.token,
          role: data.role,
          userId: data.userId,
          name: data.name,
        });
      }, 400);

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
            <h3>Login</h3>
            <button className="btn-close" onClick={goToHome}></button>
          </div>

          {/* FORM */}
          <form onSubmit={login}>
            <input
              className="form-control mb-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="btn btn-primary w-100 mb-2">
              Login
            </button>
          </form>

          {/* MESSAGE */}
          {message && (
            <p className="text-center mt-2">{message}</p>
          )}

          {/* REGISTER LINK */}
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <span
              style={{
                color: "#0d6efd",
                cursor: "pointer",
                fontWeight: "500",
              }}
              onClick={goToRegister}
            >
              Register
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;