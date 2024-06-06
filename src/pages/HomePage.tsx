import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state: any) => state.auth);
  useEffect(() => {
    if (token) {
      navigate("/dashboard/data-manager");
    } else {
      navigate("/login");
    }
  }, []);
  return <div></div>;
};

export default HomePage;
