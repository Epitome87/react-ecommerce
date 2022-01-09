import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';
import * as Styled from './SignIn.styles';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    name === 'email' ? setEmail(value) : setPassword(value);
    // Way for functional component with multiple states to do something similar to:
    // this.setState({ [name]: value }); ???
  };

  return (
    <Styled.SignIn>
      <Styled.Title>I already have an account</Styled.Title>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          required
          label='email'
          handleChange={handleChange}
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          required
          label='password'
          handleChange={handleChange}
        />

        <Styled.Buttons>
          <Button type='submit'>Sign In</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </Button>
        </Styled.Buttons>
      </form>
    </Styled.SignIn>
  );
}

export default SignIn;
