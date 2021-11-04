import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import DropDownMenu from "./DropDownMenu";

interface HeaderProps {
  setIsSign: React.Dispatch<React.SetStateAction<boolean>>;
  profile: any;
}

const Header = ({ setIsSign, profile }: HeaderProps) => {
  const [cookiesToken, setCookieToken, removeCookieToken] = useCookies([
    "rememberToken",
  ]);

  return (
    <HeaderWrap>
      <div className="padd">
        <div className="header">
          <div className="logo">Logo</div>
          <div className="menu">
            <NavLink
              to={`/`}
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
          <DropDownMenu setIsSign={setIsSign} profile={profile} />
        </div>
      </div>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  color: black;
  background-color: white;
  height: 75px;
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
    border-bottom: 5px solid black;
  }
`;

export default Header;
