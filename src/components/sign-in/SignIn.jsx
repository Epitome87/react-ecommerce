import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    name === "email" ? setEmail(value) : setPassword(value);
    // Way for functional component with multiple states to do something similar to:
    // this.setState({ [name]: value }); ???
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          label="email"
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          label="password"
          handleChange={handleChange}
        />

        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
