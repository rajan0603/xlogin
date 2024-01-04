
import './App.css';
import React, { useState } from "react";

export default function App() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState("");

  const getResult = (e) => {
    e.preventDefault();
    if (userName === "user" && passWord === "password") {
      setError("");
      setIsSubmit(true);
    } else {
      setError("Invalid username or password");
      setIsSubmit(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isSubmit ? (
        <div>
          <p>Welcome, {userName}! </p>
        </div>
      ) : (
        <form onSubmit={getResult}>
          {error && <p className="error">{error}</p>}
          <div>
            <label className="box">Username:</label>
            <input
              placeholder="username"
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <div>
            <label className="box">Password:</label>
            <input
              placeholder="password"
              onChange={(e) => setPassWord(e.target.value)}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

