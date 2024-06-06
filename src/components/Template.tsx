import React from "react";
import logo from "../assets/logo.png";
import earth from "../assets/earth.png";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "../styles/template.scss";
export interface Props {
  formType: string;
  heading: string;
  description: string;
}
const Template: React.FC<Props> = (props) => {
  const { formType, heading, description } = props;
  return (
    <>
      <div className="template-container">
        <div className="left-box">
          <div className="content">
            <p>Welcome to</p>

            <div className="logo">
              <img src={logo} alt="logo" loading="lazy" />
              <span>BREATHER ESG</span>
            </div>

            <div>
              we help you track your organizations metric as per the ESG
              Guidelines
            </div>
            <span>
              Sound interesting? <span>Get in touch</span>
            </span>
          </div>
        </div>
        <div className="right-box">
          <div className="earth">
            <img src={earth} alt="earth" loading="lazy" />
          </div>
          <div className="form-box">
            <span>{heading}</span>
            <p>{description}</p>
            {formType === "Login" ? <LoginForm /> : <SignUpForm />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
