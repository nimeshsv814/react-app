import React, { useState } from "react";
import "./Registration.css";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section className="container">
      <span className="title">Login</span>

      <form
        action="#"
        className="form"
        method="post"
        name="myform"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <br />
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            id="emailid"
            placeholder="Enter email address"
            required
            style={{ width: "300px" }}
          />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input
            type={passwordVisible ? "text" : "password"}
            className="password"
            name="password"
            placeholder="Create a Password"
            required
            style={{ width: "270px" }}
          />
          <i className="uil uil-lock icon"></i>
          <i
            className={`uil ${
              passwordVisible ? "uil-eye" : "uil-eye-slash"
            } showHidePw`}
            onClick={togglePasswordVisibility}
          ></i>
        </div>
        <br />
        <button id="submit" type="submit" style={{ width: "180px" }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default SignUp;
