import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { setLoading } from "../redux/slices/AuthSlice";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/verifyemail.scss";
import { userEndPoints } from "../api/api";

const VerifyEmail = () => {
  const { loading, signupData } = useSelector((state: any) => state.auth);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, []);

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password, confirmPassword } = signupData;

    dispatch(setLoading(true));

    try {
      const { data } = await axios.post(userEndPoints.SIGNUP_API, {
        email,
        password,
        confirmPassword,
        otp,
      });

      console.log("response from signUp API :", data);

      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success("SignUp Successful");
      navigate("/login");
    } catch (error) {
      console.log("Error while calling signUp API:", error);
      toast.error("SignUp Failed");
      navigate("/signup");
    }

    dispatch(setLoading(false));
  };
  const handleResendBtn = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { email } = signupData.email;

    try {
      const { data } = await axios.post("", {
        email,
      });

      console.log("SendOtp API Response", data);

      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success("OTP Sent Successfully");
      navigate("/verify-email");
    } catch (error) {
      console.log("Error while calling send otp API", error);
      toast.error("Could Not Send OTP");
    }
  };
  return (
    <div className="verify-container">
      {loading ? (
        <div>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="content lg:p-8">
          <h1>Verify Email</h1>
          <p>A verification code has been sent to you. Enter the code below</p>
          <form onSubmit={handleOnSubmit}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className=" input-field"
                />
              )}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 6px",
              }}
            />
            <button type="submit">Verify Email</button>
          </form>
          <div>
            <Link to="/signup" className="back">
              <p>
                <BiArrowBack /> Back To Signup
              </p>
            </Link>
            <button onClick={handleResendBtn}>
              <RxCountdownTimer />
              Resend it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
