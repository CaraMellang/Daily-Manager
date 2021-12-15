import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import DesktopHeader from "../components/Header/DesktopHeader";
import Loading from "../components/Loading";
import Calender from "./Calender";
import Charts from "./Charts";
import Home from "./Home";
import SignForm from "./SignForm";
import { SIGNIN_FAILED } from "../modules/redux/User";
import { backPath } from "../lib/HttpPath";
import HeaderBlock from "../components/Header/HeaderBlcok";
import styled from "styled-components";
import media from "../lib/media";
import ResponseStatusCode from "../lib/ResponseStatusCode";

const Main = () => {
  const [isSign, setIsSign] = useState(true);
  const [loadingSpin, setLoadingSpin] = useState(true);
  const [cookiesToken, setCookieToken, removeCookieToken] = useCookies([
    "rememberToken",
  ]);
  const history = useHistory();
  const dispatch = useDispatch();
  const onSignHandler = () => {
    setIsSign(false); //얘때문에 토큰있으면 그냥 프리패스당함.
  };

  const isSignHandle = (bool: boolean) => {
    setIsSign(bool);
  };
  const loadingSpinHandle = (bool: boolean) => {
    setLoadingSpin(bool);
  };

  const postSign = async () => {
    await axios
      .post(`${backPath}/auth/verify`, ".", {
        headers: { Authorization: `Bearer ${cookiesToken.rememberToken}` },
      })
      .then((d) => {
        // console.log("성공?", d);
        // setProfile({ username: d.data.username, createdAt: d.data.createdAt });
        setIsSign(false);
        setLoadingSpin(false);
      })
      .catch((e) => {
        console.log(e);
        console.dir(e.response.data.status);
        setLoadingSpin(false);
        window.alert(ResponseStatusCode(e.response.data.status).msg);
        dispatch(SIGNIN_FAILED(e));
        removeCookieToken(`rememberToken`);
        setIsSign(true);
        history.push("/");
      });
  };

  useEffect(() => {
    if (cookiesToken.rememberToken !== undefined) {
      postSign();
      // console.log("있어", cookiesToken.rememberToken);
    } else {
      setLoadingSpin(false);
      // console.log("없어", cookiesToken.rememberToken);
    }
    return () => {};
  }, []);

  if (loadingSpin) {
    return <Loading />;
  }

  return (
    <MainWrap>
      {isSign ? (
        <Route
          path={`/`}
          render={() => (
            <SignForm
              onSignHandler={onSignHandler}
              isSignHandle={isSignHandle}
              loadingSpinHandle={loadingSpinHandle}
            />
          )}
          exact
        />
      ) : (
        <>
          {/* <DesktopHeader setIsSign={setIsSign} /> */}
          <HeaderBlock setIsSign={setIsSign} />
          <Route path={`/`} component={Home} exact />
          <Route path={`/calender`} component={Calender} />
          <Route path={`/charts`} component={Charts} />
        </>
      )}
    </MainWrap>
  );
};

const MainWrap = styled.div`
  .content {
    width: 768px;
    /* height: 2000px; */
    margin: auto;
  }
  ${media.medium} {
    .content {
      width: 100%;
    }
  }
`;

export default Main;
