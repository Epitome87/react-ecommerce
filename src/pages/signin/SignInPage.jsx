import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import * as Styled from './SignInPageContainer';

function SignInPage() {
  return (
    <Styled.SignInUp>
      <SignIn />
      <SignUp />
    </Styled.SignInUp>
  );
}

export default SignInPage;
