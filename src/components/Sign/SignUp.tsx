import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { backPath } from "../../lib/HttpPath";
import ResponseStatusCode from "../../lib/ResponseStatusCode";

interface SignIUpProps {
  onSignInToggle(): void;
  onSignHandler(): void;
}

const SignUp = ({ onSignInToggle, onSignHandler }: SignIUpProps) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = e;
    if (name === "email") {
      setInputEmail(value);
    }
    if (name === "username") {
      setInputUsername(value);
    }
    if (name === "pw") {
      setInputPw(value);
    }
  };
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: inputEmail,
      username: inputUsername,
      password: inputPw,
    };
    await axios
      .post(`${backPath}/auth/signup`, data)
      .then((res) => {
        window.alert("회원가입이 완료되었습니다. 로그인을 해주시기 바랍니다.");
        onSignInToggle();
      })
      .catch((e) => {
        window.alert(ResponseStatusCode(e.response.status).msg);
      });
  };
  return (
    <SignUpBox>
      <div className="login-box">
        <div className="form">
          <div className="signup-title">DM</div>
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
              type="text"
              className="input-box"
              name="username"
              placeholder="Username"
              value={inputUsername}
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
            <input type="submit" className="submit" value="Sign Up" />
            <p className="message">
              You got account?{`\u00a0`}
              <span className="sign-in" onClick={onSignInToggle}>
                SignIn
              </span>
            </p>
          </form>
        </div>
      </div>
    </SignUpBox>
  );
};

const SignUpBox = styled.div`
  .signup-title {
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
  .sign-in {
    cursor: pointer;
    color: rgba(252, 114, 114, 1);
  }
`;

export default SignUp;
