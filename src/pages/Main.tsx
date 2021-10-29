import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Loading from "../components/Loading";
import ModalPortal from "../components/Modal/ModalPortal";
import MyModal from "../components/Modal/MyModal";
import Home from "./Home";
import SignForm from "./SignForm";

const Main = () => {
  const currentDate = new Date();
  const [isSign, setIsSign] = useState(true);
  const [loadingSpin, setLoadingSpin] = useState(true);
  const [profile, setProfile] = useState<{
    username: string;
    createdAt: string;
  }>({ username: "ss", createdAt: "20220129" });
  const [cookiesToken, setCookieToken, removeCookieToken] = useCookies([
    "rememberToken",
  ]);

  const onSignHandler = () => {
    setIsSign(false);
  };

  const userProfile = (username: string, createdAt: string) => {
    const newDate = new Date(createdAt);
    const dayjsDate = dayjs(newDate);
    console.log("createAt: ", dayjsDate.format(`YYYY-MM-DD`));
    setProfile({ username, createdAt: dayjsDate.format(`YYYY-MM-DD`) });
    console.log("실행완료");
  };

  const postSign = async () => {
    await axios
      .post(`http://localhost:5000/auth/test`, ".", {
        headers: { Authorization: `Bearer ${cookiesToken.rememberToken}` },
      })
      .then((d) => {
        console.log("성공?", d);
        setProfile({ username: d.data.username, createdAt: d.data.createdAt });
        setIsSign(false);
        setLoadingSpin(false);
      })
      .catch((e) => {
        console.log("실패", e);
        setLoadingSpin(false);
      });
  };

  useEffect(() => {
    if (!cookiesToken.rememberToken) {
      setLoadingSpin(false);
    }
    if (cookiesToken.rememberToken) {
      postSign();
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
          render={() => (
            <SignForm onSignHandler={onSignHandler} userProfile={userProfile} />
          )}
          exact
        />
      ) : (
        <>
          <Header setIsSign={setIsSign} profile={profile} />
          <Route path={`/`} component={Home} exact />
          <Route path={`/charts`} component={Home} />
        </>
      )}
    </div>
  );
};

export default Main;
