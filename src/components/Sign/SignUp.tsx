import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

interface SignIUpProps {
  onSignInToggle(): void;
  onSignHandler(): void;
}

const SignUp = ({ onSignInToggle, onSignHandler }: SignIUpProps) => {
  const [inputEmail, setInputEmail] = useState("");
  // const [inputId, setInputId] = useState("");
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
      .post("http://localhost:5000/auth/signup", data)
      .then((res) => {
        console.log(res);
        window.alert("회원가입이 완료되었습니다. 로그인을 해주시기 바랍니다.");
        onSignInToggle();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <SignUpBox>
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
  .sign-in {
    cursor: pointer;
    color: #4caf50;
  }
`;

export default SignUp;
