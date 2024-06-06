import React, { useState } from "react";
import "../styles/form.scss";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { useDispatch } from "react-redux";
import { setLoading, setToken } from "../redux/slices/AuthSlice";
import axios from "axios";
import { userEndPoints } from "../api/api";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setLoading(true));

    const { email, password } = formData;

    try {
      const { data } = await axios.post(userEndPoints.LOGIN_API, {
        email,
        password,
      });

      // console.log("Response from login API :", data);

      if (!data.success) {
        toast.error(data.message);
        throw new Error(data.message);
      }

      toast.success("Logged In Successfully");
      dispatch(setToken(data?.user?.token));

      // dispatch(setUser(data?.user));
      localStorage.setItem("token", JSON.stringify(data?.user?.token));
      // localStorage.setItem("user", JSON.stringify(data?.user));
      // console.log("Printing token from session storage in logi function", localStorage.getItem("token"));
      // console.log("value of data.token: ", data?.user?.token);

      navigate("/dashboard/data-manager");
    } catch (error) {
      console.log("Error while calling login API: ", error);
      toast.error("Login Failed");
    }
    dispatch(setLoading(false));
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
            value={formData.email}
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
            value={formData.password}
            onChange={handleOnChange}
            className="input-field-style"
          />
        </div>

        <div className="btn">
          <FcGoogle style={{ width: "25px", height: "25px" }} />
          <p> Sign in with Google</p>
        </div>
        <div className="btn">
          <SiGithub style={{ width: "25px", height: "25px" }} />
          <p>Sign in with Github</p>
        </div>

        <button type="submit">Sign In</button>
      </form>
      <div>
        <Link to={"/signup"}>New User? Create account</Link>
      </div>
    </div>
  );
};

export default LoginForm;
