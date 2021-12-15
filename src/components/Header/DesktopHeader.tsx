import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import DropDownMenu from "./DropDownMenu";
import { ReactComponent as DMlogo } from "../../svgs/dm.svg";

interface DesktopHeaderProps {
  setIsSign: React.Dispatch<React.SetStateAction<boolean>>;
}

const DesktopHeader = ({ setIsSign }: DesktopHeaderProps) => {
  const [cookiesToken, setCookieToken, removeCookieToken] = useCookies([
    "rememberToken",
  ]);

  return (
    <DesktopHeaderWrap>
      <div className="padd">
        <div className="header">
          <div className="logo">
            <NavLink to={`/`}>
              <DMlogo />
            </NavLink>
          </div>
          <div className="menu">
            <NavLink
              to={`/`}
              activeClassName="page-toggle"
              className="menu-item"
              exact
            >
              Home
            </NavLink>
            <NavLink
              to={`/calender`}
              activeClassName="page-toggle"
              className="menu-item"
              exact
            >
              Calender
            </NavLink>
            <NavLink
              to={`/charts`}
              activeClassName="page-toggle"
              className="menu-item"
            >
              Charts
            </NavLink>
          </div>
          {/* <button
            className="signout"
            onClick={() => {
              window.alert("로그아웃완료");
              removeCookieToken("rememberToken");
              setIsSign(true);
            }}
          >
            {profile.username}
            Sign out
          </button> */}
          <div>
            <DropDownMenu setIsSign={setIsSign} />
          </div>
        </div>
      </div>
    </DesktopHeaderWrap>
  );
};

const DesktopHeaderWrap = styled.header`
  color: black;
  background-color: white;
  height: 70px;
  /* height: 7.5vh; */
  font-weight: bold;
  .padd {
    box-sizing: border-box;
    height: 100%;
    padding: 10px;
  }
  .header {
    width: 768px;
    height: 100%;
    display: flex;
    gap: 12rem;
    margin: 0 auto;
    align-items: center;
  }
  .logo {
    width: 130px;
  }
  .menu {
    display: flex;
    gap: 1rem;
  }
  .page-toggle {
    padding-bottom: 0.25rem;
    border-bottom: 5px solid rgba(252, 114, 114, 1);
  }
`;

export default DesktopHeader;
