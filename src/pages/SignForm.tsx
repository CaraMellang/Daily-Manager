import React, { useState } from "react";
import styled from "styled-components";
import SignIn from "../components/Sign/SignIn";
import SignUp from "../components/Sign/SignUp";

interface SignFormProps {
  onSignHandler(): void;
  isSignHandle(bool: boolean): void;
  loadingSpinHandle(bool: boolean): void;
}

const SignForm = ({
  onSignHandler,
  isSignHandle,
  loadingSpinHandle,
}: SignFormProps) => {
  const [signInToggle, setSignInToggle] = useState(true);

  const onSignInToggle = () => {
    setSignInToggle((prev) => !prev);
  };

  return (
    <SignFormWrap>
      
      {signInToggle ? (
        <SignIn
          onSignInToggle={onSignInToggle}
          onSignHandler={onSignHandler}
          isSignHandle={isSignHandle}
          loadingSpinHandle={loadingSpinHandle}
        />
      ) : (
        <SignUp onSignInToggle={onSignInToggle} onSignHandler={onSignHandler} />
      )}
    </SignFormWrap>
  );
};

const SignFormWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-weight: bold;
  text-align: center;
  background: rgb(241, 147, 147);
  background: linear-gradient(
    180deg,
    rgba(19, 68, 88, 1) 10%,
    rgba(182, 114, 114, 1) 100%
  );
  .width-100 {
    width: 100%;
  }
  .flex-row {
    display: flex;
    justify-content: center;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default SignForm;
