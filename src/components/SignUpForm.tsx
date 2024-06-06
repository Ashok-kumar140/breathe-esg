import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLoading, setSignUpData } from "../redux/slices/AuthSlice";
import axios from "axios";
import { userEndPoints } from "../api/api";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email, password, confirmPassword } = formData;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    dispatch(setSignUpData(formData));
    dispatch(setLoading(true));

    try {
      const { data } = await axios.post(userEndPoints.SENDOTP_API, {
        email,
      });

      console.log("SEND OTP API responses :", data);

      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success("OTP Sent Successfully");

      navigate("/verify-email");
    } catch (error) {
      console.log("Error in send otp api :", error);
      toast.error("Could Not Send OTP");
    }

    dispatch(setLoading(false));

    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <div>
      <form className="form-style" onSubmit={handleOnSubmit}>
        <div className="filed-container">
          <label htmlFor="email" className="label-style">
            Email <span>*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email ID"
            value={email}
            onChange={handleOnChange}
            className="input-field-style"
          />
        </div>
        <div className="filed-container">
          <label htmlFor="password" className="label-style">
            Password <span>*</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleOnChange}
            className="input-field-style"
          />
        </div>
        <div className="filed-container">
          <label htmlFor="confirmPassword" className="label-style">
            Confirm Password <span>*</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Password"
            value={confirmPassword}
            onChange={handleOnChange}
            className="input-field-style"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <Link to={"/login"}>Already have account? Sign In</Link>
      </div>
    </div>
  );
};

export default SignUpForm;
