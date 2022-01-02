import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import "./signin-page_styles.scss";

function SignInPage() {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInPage;
