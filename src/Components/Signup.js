import React, { useState } from "react";
import "./Registration.css";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section className="container">
      <span className="title">Registration form</span>

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
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter full name"
            required
            style={{ width: "500px" }}
          />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            id="emailid"
            placeholder="Enter email address"
            required
            style={{ width: "500px" }}
          />
        </div>
        <div
          className="column"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "10px",
          }}
        >
          <div className="input-box">
            <label>Phone Number</label>
            <input
              type="number"
              name="phno"
              placeholder="Enter phone number"
              required
              style={{ width: "200px" }}
            />
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input
              type="date"
              name="dob"
              placeholder="Enter birth date"
              required
              style={{ width: "200px" }}
            />
          </div>
        </div>
        <div className="gender-box">
          <h3>Gender</h3>
          <div
            className="gender-option"
            style={{ display: "flex", gap: "5px" }}
          >
            <div className="gender">
              <input
                type="radio"
                id="check-male"
                name="gender"
                value="Male"
                required
              />
              <label htmlFor="check-male">Male</label>
            </div>
            <div className="gender">
              <input
                type="radio"
                id="check-female"
                name="gender"
                value="Female"
                required
              />
              <label htmlFor="check-female">Female</label>
            </div>
            <div className="gender">
              <input
                type="radio"
                id="check-other"
                name="gender"
                value="Other"
              />
              <label htmlFor="check-other">Prefer not to say</label>
            </div>
          </div>
        </div>
        <div className="input-box address">
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter street address"
            name="address"
            required
            style={{ width: "500px", marginBottom: "20px" }}
          />
          <div className="column">
            <input
              type="text"
              name="city"
              placeholder="Enter City name"
              required
              style={{ width: "200px" }}
            />
            <input
              type="text"
              name="state"
              placeholder="Enter State name"
              required
              style={{ width: "200px" }}
            />
          </div>
        </div>

        <div className="input-field">
          <label>Password</label>
          <input
            type={passwordVisible ? "text" : "password"}
            className="password"
            name="password"
            placeholder="Create a Password"
            required
            style={{ width: "480px" }}
          />
          <i className="uil uil-lock icon"></i>
          <i
            className={`uil ${
              passwordVisible ? "uil-eye" : "uil-eye-slash"
            } showHidePw`}
            onClick={togglePasswordVisibility}
          ></i>
        </div>
        <div className="input-field">
          <label>Confirm Password</label>
          <input
            type={passwordVisible ? "text" : "password"}
            className="password"
            name="password1"
            placeholder="Confirm your Password"
            required
            style={{ width: "480px" }}
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
        <button id="submit" type="submit" style={{ width: "500px" }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default SignUp;
