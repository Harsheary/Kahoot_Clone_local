import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword || !role) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, role }),
      });

      // Check if the response is ok, otherwise throw an error
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Registration failed, please try again.");
      }

      const data = await response.json();

      if (data.message) {
        alert(data.message || "Registration successful!");
      } else {
        throw new Error("An unexpected error occurred during registration.");
      }
    }
      catch (error) {
        console.error("Error during registration:", error);
      }
  };

  return (
    <div className="container">
      <h2>Create an account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          required
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <br />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        <br />
        <div>
          <label>
            <input
              type="radio"
              name="role"
              value="teacher"
              checked={role === "teacher"}
              onChange={(e) => setRole(e.target.value)}
            />{" "}
            Teacher
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="student"
              checked={role === "student"}
              onChange={(e) => setRole(e.target.value)}
            />{" "}
            Student
          </label>
        </div>
        <button type="submit">Register</button>
      </form>

      <h3>
        Already have an account? <a onClick={() => navigate("/login")}>Login</a>
      </h3>
    </div>
  );
};

export default Registration;
