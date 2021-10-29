import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
            <Link to={`/`} className="menu-item">
              Calender
            </Link>
            <Link to={`/charts`} className="menu-item">
              Charts
            </Link>
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
          <DropDownMenu setIsSign={setIsSign} profile={profile}  />
        </div>
      </div>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  color: black;
  background-color: white;
  height: 75px;
  .padd {
    box-sizing: border-box;
    height: 100%;
    padding: 10px;
  }
  .header {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .menu {
    display: flex;
    gap: 1rem;
  }
`;

export default Header;
