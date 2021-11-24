import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Loading from "../components/Loading";
import ModalPortal from "../components/Modal/ModalPortal";
import MyModal from "../components/Modal/MyModal";
import Calender from "./Calender";
import Charts from "./Charts";
import Home from "./Home";
import SignForm from "./SignForm";

const Main = () => {
  const [isSign, setIsSign] = useState(true);
  const [loadingSpin, setLoadingSpin] = useState(true);
  const [cookiesToken, setCookieToken, removeCookieToken] = useCookies([
    "rememberToken",
  ]);
  const onSignHandler = () => {
    setIsSign(false);
  };

  const postSign = async () => {
    await axios
      .post(`http://localhost:5000/auth/verify`, ".", {
        headers: { Authorization: `Bearer ${cookiesToken.rememberToken}` },
      })
      .then((d) => {
        console.log("성공?", d);
        // setProfile({ username: d.data.username, createdAt: d.data.createdAt });
        setIsSign(false);
        setLoadingSpin(false);
      })
      .catch((e) => {
        console.log("실패", e);
        setLoadingSpin(false);
      });
  };

  useEffect(() => {
    if (cookiesToken.rememberToken !== undefined) {
      postSign();
      console.log("있어", cookiesToken.rememberToken);
    } else {
      setLoadingSpin(false);
      console.log("없어", cookiesToken.rememberToken);
    }
  }, []);

  if (loadingSpin) {
    return <Loading />;
  }

  return (
    <div>
      {isSign ? (
        <Route
          path={`/`}
          render={() => <SignForm onSignHandler={onSignHandler} />}
          exact
        />
      ) : (
        <>
          <Header setIsSign={setIsSign} />
          <Route path={`/`} component={Home} exact />
          <Route path={`/calender`} component={Calender} />
          <Route path={`/charts`} component={Charts} />
        </>
      )}
    </div>
  );
};

export default Main;
