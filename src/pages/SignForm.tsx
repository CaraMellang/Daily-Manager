import React from "react";
import styled from "styled-components";

const SignForm = () => {
  return (
    <SignFormWrap>
      <div className="login-box">
        <div className="form">
          <form className="flex-row flex-col form-login">
            <input type="text" className="input-box" />
            <input type="password" className="input-box" />
            <input type="submit" className="submit" value="LOGIN" />
            <p className="message">
              Not registerd?{`\u00a0`}
              <span className="create-account">Create an account</span>
            </p>
          </form>
        </div>
      </div>
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
    position: relative;
    background-color: white;
    width: 25%;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%), 0 5px 5px 0 rgb(0 0 0 / 24%);
  }
  .form {
    padding: 55px;
  }
  .form-login {
    width: 100%;
    gap: 1rem;
  }
  .input-box {
    border: none;
    padding: 15px;
    font-size: 1.2rem;
    background-color: #f3f3f3;
  }
  .input-box:focus {
    outline: none;
  }
  .submit {
    border: none;
    background-color: #4caf50;
    height: 50px;
    color: white;
  }
  .message {
    margin: 15px 0 0;
    font-size: 12px;
    color: #b3b3b3;
  }
  .create-account {
    cursor: pointer;
    color: #4caf50;
  }
`;

export default SignForm;
