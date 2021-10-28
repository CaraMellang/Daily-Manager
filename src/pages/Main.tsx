import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Route } from "react-router";
import ModalPortal from "../components/Modal/ModalPortal";
import MyModal from "../components/Modal/MyModal";
import Home from "./Home";
import SignForm from "./SignForm";

const Main = () => {
  const [isSign, setIsSign] = useState(true);

  const [cookiesToken, setCookieToken, removeCookieToken] = useCookies([
    "rememberToken",
  ]);

  const onSignHandler = () => {
    setIsSign(false);
  };
  const postSign = async () => {
    await axios
      .post(`http://localhost:5000/auth/test`, ".", {
        headers: { Authorization: `Bearer ${cookiesToken.rememberToken}` },
      })
      .then((d) => {
        console.log("성공?", d);
        setIsSign(false);
      })
      .catch((e) => console.log("실패", e));
  };

  useEffect(() => {
    if (cookiesToken.rememberToken) {
      postSign();
    }
  }, []);

  return (
    <div>
      {isSign ? (
        <Route
          path={`/`}
          render={() => <SignForm onSignHandler={onSignHandler} />}
          exact
        />
      ) : (
        <Route path={`/`} component={Home} exact />
      )}
    </div>
  );
};

export default Main;
