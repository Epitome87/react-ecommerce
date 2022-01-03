import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

function SignUp() {
  const initialFormState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [form, setForm] = useState(initialFormState);

  const handleOnChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = form;
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      setForm(initialFormState);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleOnSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={form.displayName}
          onChange={handleOnChange}
          label="Display Name"
          required
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={form.email}
          onChange={handleOnChange}
          label="Email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={form.password}
          onChange={handleOnChange}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleOnChange}
          label="Confirm Password"
          required
        ></FormInput>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUp;
