import React from "react";
import styled from "styled-components";

const SignIn = () => {
  return (
    <SignInWrap>
      <div className="login-box">
        <div className="login-box-pad">
          <form className="flex-row flex-col form-box">
            <input className="input-box" />
            <input className="input-box" />
            <input type="submit" value="확인!!" />
          </form>
        </div>
      </div>
    </SignInWrap>
  );
};

const SignInWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
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
  .login-box {
    background-color: white;
    width: 30%;
    height: 45%;
    border-radius: 10px;
  }
  .login-box-pad {
    padding: 5rem;
  }
  .form-box {
    width: 100%;
    gap: 0.5rem;
  }
  .input-box {
    border: none;
    background-color: #f3f3f3;
  }
`;

export default SignIn;
