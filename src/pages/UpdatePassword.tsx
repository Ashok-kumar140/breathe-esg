import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsEyeSlash } from "react-icons/bs";
import { useSelector } from "react-redux";
import { setLoading } from "../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";
import "../styles/updatepassword.scss";
const UpdatePassword = () => {
  const { loading } = useSelector((state: any) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { password, confirmPassword } = formData;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleResetPassword();
  };

  const handleResetPassword = async () => {
    dispatch(setLoading(true));
    try {
      const token = location.pathname.split("/").at(-1);

      const { data } = await axios.post("userEndPoints.RESETPASSWORD_API", {
        password,
        confirmPassword,
        token,
      });
      console.log("Response from reset password :", data);

      if (!data.success) {
        toast.error(data.message);
        // throw new Error(data.message)
      }
      toast.success("Password updated");
      navigate("/login");
    } catch (error: any) {
      console.log(
        "Error at the time of calling update password api :",
        error.message
      );
      toast.error(error.message);
    }

    dispatch(setLoading(false));
  };

  return (
    <div className="update-container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="content">
          <h1>Choose new Password</h1>
          <p>Almost done. Enter your new password and you are all set.</p>

          <form onSubmit={handleOnSubmit} className="relative">
            <label htmlFor="password" className="relative">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                New Password <sup className="text-pink-200">*</sup>
              </p>

              <input
                type={`${!showPassword ? "password" : "text"}`}
                required
                name="password"
                value={formData.password}
                placeholder="Enter Password"
                onChange={handleOnChange}
                style={{
                  boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset",
                }}
              />
            </label>
            {showPassword ? (
              <BsEyeSlash
                className="eye1"
                onClick={(e) => setShowPassword(!showPassword)}
              />
            ) : (
              <MdOutlineRemoveRedEye
              
                className=" eye1 absolute left-[93%] top-[18%] text-white"
                onClick={(e) => setShowPassword(!showPassword)}
              />
            )}

            <label htmlFor="confirmPassword" className="relative mt-5">
              <p className="mb-1 mt-3 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Confirm New Password <sup className="text-pink-200">*</sup>
              </p>

              <input
                type={`${!showConfirmedPassword ? "password" : "text"}`}
                required
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder="Renter Password"
                onChange={handleOnChange}
                className="form-style w-full !pr-10 p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5"
                style={{
                  boxShadow: "rgba(255, 255, 255, 0.18) 0px -1px 0px inset",
                }}
              />
            </label>
            {showConfirmedPassword ? (
              <BsEyeSlash
                className="eye2"
                onClick={(e) =>
                  setShowConfirmedPassword(!showConfirmedPassword)
                }
              />
            ) : (
              <MdOutlineRemoveRedEye
                className="eye2"
                onClick={(e) =>
                  setShowConfirmedPassword(!showConfirmedPassword)
                }
              />
            )}

            <button
              type="submit"
              className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
            >
              Reset Password
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/login" className="back">
              <p className="flex items-center gap-x-2 text-richblack-5">
                <BiArrowBack /> Back To Login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
