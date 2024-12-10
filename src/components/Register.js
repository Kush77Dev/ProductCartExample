import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ username: "", password: "" });
//   const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // const existingUser = users.find((user) => user.username === form.username);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    useNavigate("/login");

    // if (existingUser) {
    //   alert("Username already exists!");
    // } else {
    //   users.push(form);
    //   localStorage.setItem("users", JSON.stringify(users));
    //   alert("Registration successful!");
    //   navigate("/login");
    // }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
