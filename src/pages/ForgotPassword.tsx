import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setLoading } from "../redux/slices/AuthSlice";
import toast from "react-hot-toast";
import "../styles/forgotpassword.scss";

const ForgotPassword = () => {
  const { loading } = useSelector((state: any) => state.auth);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getPasswordResetToken(email, setIsEmailSent);
  };

  const getPasswordResetToken = async (
    email: string,
    setIsEmailSent: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    dispatch(setLoading(true));

    try {
      const { data } = await axios.post("userEndPoints.RESETPASSTOKEN_API", {
        email,
      });
      console.log("data from getPasswordResetToken Function ", data);

      if (!data.success) {
        throw new Error(data.message);
      }
      toast.success("Reset Email sent");
      setIsEmailSent(true);
    } catch (error: any) {
      console.log(
        "error in api calling for reset password token :",
        error.message
      );
      setIsEmailSent(false);
      toast.error("Error in sending email");
    }
    dispatch(setLoading(false));
  };

  return (
    <div className="forgot-container">
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div className="content">
          <h1>{!isEmailSent ? "Reset your password" : "Check your Email"}</h1>
          <p>
            {!isEmailSent
              ? "Have no fear. We'll email you instructions to reset your password. If you don't have access to your email we can try account recovery"
              : `We have sent the reset email to ${email}`}
          </p>

          <form onSubmit={handleOnSubmit}>
            {!isEmailSent && (
              <label htmlFor="">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Email Address:<sup className="text-pink-200">*</sup>
                </p>
                <input
                  type="email"                
                  required
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                />
              </label>
            )}
            <button
              type="submit"
              className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
            >
              {!isEmailSent ? "Reset Password" : "Resend Email"}
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/login" className="back">
              <p >
                <BiArrowBack /> Back To Login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
