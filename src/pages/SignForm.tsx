import React, { useState } from "react";
import styled from "styled-components";
import SignIn from "../components/Sign/SignIn";
import SignUp from "../components/Sign/SignUp";

interface SignFormProps {
  onSignHandler(): void;
}

const SignForm = ({ onSignHandler }: SignFormProps) => {
  const [signInToggle, setSignInToggle] = useState(true);

  const onSignInToggle = () => {
    setSignInToggle((prev) => !prev);
  };

  return (
    <SignFormWrap>
      {signInToggle ? (
        <SignIn onSignInToggle={onSignInToggle} onSignHandler={onSignHandler} />
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
  background: rgb(155, 199, 130);
  background: linear-gradient(
    90deg,
    rgba(155, 199, 130, 1) 0%,
    rgba(126, 185, 93, 1) 100%
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
