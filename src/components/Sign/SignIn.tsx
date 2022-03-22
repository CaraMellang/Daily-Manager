import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { SIGNIN_REQUEST } from "../../modules/redux/User";

interface SignInProps {
  onSignInToggle(): void;
  onSignHandler(): void;
  isSignHandle(bool: boolean): void;
  loadingSpinHandle(bool: boolean): void;
}

const SignIn = ({
  onSignInToggle,
  onSignHandler,
  isSignHandle,
  loadingSpinHandle,
}: SignInProps) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [cookiesToken, setCookieToken, removeCookieToken] = useCookies([
    "rememberToken",
  ]);
  const dispatch = useDispatch();
  const userSelector: any = useSelector((state) => state);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = e;
    if (name === "email") {
      setInputEmail(value);
    }
    if (name === "pw") {
      setInputPw(value);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputEmail === "" || inputPw === "") {
      window.alert("ID, PW중 틀린 입력입니다.");
      setInputEmail("");
      setInputPw("");
      return;
    }
    const data = {
      email: inputEmail,
      password: inputPw,
    };

    dispatch(SIGNIN_REQUEST(data));

  };

  useEffect(() => {
    const { userSliceReducer }: any = userSelector;
    
    if (userSliceReducer.signinSucceed) {
      setCookieToken(`rememberToken`, userSliceReducer.user.accessToken);
      onSignHandler();
    }
  });

  return (
    <SignInBox>
      <div className="login-box">
        <div className="form">
          <div className="signin-title">DM</div>
          <form
            className="flex-row flex-col form-login"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              className="input-box"
              name="email"
              placeholder="Email"
              value={inputEmail}
              onChange={handleOnChange}
            />
            <input
              type="password"
              className="input-box"
              name="pw"
              placeholder="Password"
              value={inputPw}
              onChange={handleOnChange}
            />
            <input type="submit" className="submit" value="Sign In" />
            <p className="message">
              Not registerd?{`\u00a0`}
              <span className="create-account" onClick={onSignInToggle}>
                Create an account
              </span>
            </p>
          </form>
        </div>
      </div>
    </SignInBox>
  );
};

const SignInBox = styled.div`
  .signin-title {
    color: rgba(252, 114, 114, 1);
    font-weight: bold;
    font-size: 2rem;
    padding-bottom: 1rem;
  }
  .login-box {
    position: relative;
    background-color: white;
    border-radius: 10px;
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
  .input-box::placeholder {
    color: #c7b8b0;
  }
  .submit {
    cursor: pointer;
    border: none;
    background-color: rgba(252, 114, 114, 1);
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
    color: rgba(252, 114, 114, 1);
  }
`;
export default React.memo(SignIn);
