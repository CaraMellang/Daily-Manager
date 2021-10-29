import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { dummyProfile } from "../../lib/dummy";

interface SignInProps {
  onSignInToggle(): void;
  onSignHandler(): void;
  userProfile(username: string, createdAt: string): void;
}

const SignIn = ({
  onSignInToggle,
  onSignHandler,
  userProfile,
}: SignInProps) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [cookiesToken, setCookieToken, removeCookieToken] = useCookies([
    "rememberToken",
  ]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target);
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
      username: inputEmail,
      password: inputPw,
    };
    await axios
      .post("http://localhost:5000/auth/signin", data)
      .then((res) => {
        console.log("ㅎㅇ", res);
        setCookieToken(`rememberToken`, res.data.accessToken);
        userProfile(res.data.username, res.data.createdAt);
        onSignHandler();
      })
      .catch((e) => {
        console.log(e);
        window.alert("오류!!");
      });
  };

  return (
    <SignInBox>
      <div className="login-box">
        <div className="form">
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
  .login-box {
    position: relative;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%), 0 10px 10px 0 rgb(0 0 0 / 12%);
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
export default SignIn;
