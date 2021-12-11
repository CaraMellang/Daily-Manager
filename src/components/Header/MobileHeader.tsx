import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import DropDownMenu from "./DropDownMenu";
import { ReactComponent as DMlogo } from "../../svgs/dm.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface MobileHeaderProps {
  setIsSign: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileHeader = ({ setIsSign }: MobileHeaderProps) => {
  const [onMenu, setOnMenu] = useState(false);
  const [cookiesToken, setCookieToken, removeCookieToken] = useCookies([
    "rememberToken",
  ]);

  return (
    <MobileHeaderWrap>
      <div className="padd">
        <div className="header">
          <div className="logo">
            <NavLink to={`/`}>
              <DMlogo />
            </NavLink>
          </div>
          <div className="menu">
            {/* <NavLink
              to={`/`}
              activeClassName="page-toggle"
              className="menu-item"
              exact
            >
              Homeasdasdsad
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
            </NavLink> */}
            <FontAwesomeIcon
              icon={faBars}
              className="burgericon"
              onClick={() => setOnMenu((prev) => !prev)}
            />
          </div>
          {/* <DropDownMenu setIsSign={setIsSign} /> */}
        </div>
      </div>
      {onMenu && (
        <div className="mobile">
          <div className="mobile-menu">ㅁ뉴</div>
          <div className="mobile-menu-back" onClick={() => setOnMenu(false)} />
        </div>
      )}
    </MobileHeaderWrap>
  );
};

const MobileHeaderWrap = styled.header`
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
    justify-content: space-between;
    gap: 12rem;
    margin: 0 auto;
    align-items: center;
  }
  .logo {
    width: 130px;
  }
  .mobile {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .mobile-menu {
    position: absolute;
    top: 0;
    right: 0;
    background: white;
    width: 12rem;
    z-index: 4;
    height: 100%;
  }
  .mobile-menu-back {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
  }
  .page-toggle {
    padding-bottom: 0.25rem;
    border-bottom: 5px solid rgba(252, 114, 114, 1);
  }
  .burgericon {
    cursor: pointer;
    transform: scale(1.5);
    color: rgba(252, 114, 114, 1);
  }
`;

export default MobileHeader;
