import React from "react";
import "./Home.css";
import CountUp from "react-countup";

function Home({ goToLogin, goToRegister }) {
  return (
    <>
      {/* HEADER */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
        <h4 className="fw-bold text-primary">ElderCare</h4>

        {/* HAMBURGER BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <div className="ms-auto mt-2 mt-lg-0">
            <button className="btn btn-outline-primary me-2">
              Home
            </button>

            <button
              className="btn btn-outline-success me-2"
              onClick={goToRegister}
            >
              Register
            </button>

            <button className="btn btn-primary" onClick={goToLogin}>
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="container text-center hero-section">
        <div className="hero-box shadow-sm">
          <h1 className="hero-title">Elder Health Monitoring</h1>
          <p className="hero-text">
            A simple and secure platform to monitor elder health vitals,
            review alert history, and support families in daily care.
          </p>
          <button className="btn btn-primary hero-btn" onClick={goToLogin}>
            Login to Continue
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container my-5">
  <h3 className="text-center mb-5 fw-bold">✨ Our Key Features</h3>

  <div className="row g-4 text-center">

    <div className="col-md-4">
      <div className="card p-4 shadow feature-card h-100">
        <h5 className="fw-bold mb-2">Smart Health Tracking</h5>
        <p>
          Easily monitor important health parameters like blood pressure,
          sugar levels, and heart rate in real-time for better care.
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card p-4 shadow feature-card h-100">
        <h5 className="fw-bold mb-2"> Instant Alerts</h5>
        <p>
          Get immediate notifications when any vital signs go beyond safe
          limits, ensuring quick action and safety.
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card p-4 shadow feature-card h-100">
        <h5 className="fw-bold mb-2"> Caregiver Connectivity</h5>
        <p>
          Stay connected with your loved ones by allowing family members
          to monitor health updates anytime, anywhere.
        </p>
      </div>
    </div>

  </div>
</section>
      {/* STATS */}
     <section className="stats-section text-white text-center py-5">
  <div className="container">
    <div className="row">

      <div className="col-md-4">
        <h2>
          <CountUp end={100} duration={2} />+
        </h2>
        <p>Patients Monitored</p>
      </div>

      <div className="col-md-4">
        <h2>
          <CountUp end={24} duration={2} />/7
        </h2>
        <p>Monitoring</p>
      </div>

      <div className="col-md-4">
        <h2>
          <CountUp end={99} duration={2} />%
        </h2>
        <p>Accuracy</p>
      </div>

    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3">
        <p>© 2026 ElderCare | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Home;