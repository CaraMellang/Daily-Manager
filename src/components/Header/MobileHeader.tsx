import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import DropDownMenu from "./DropDownMenu";
import { ReactComponent as DMlogo } from "../../svgs/dm.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

interface MobileHeaderProps {
  setIsSign: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileHeader = ({ setIsSign }: MobileHeaderProps) => {
  const [menuOn, setMenuOn] = useState(false);
  const [slide, setSlide] = useState(false);
  const [cookiesToken, setCookieToken, removeCookieToken] = useCookies([
    "rememberToken",
  ]);
  const user = useSelector((state: any) => state.userSliceReducer.user);

  const menuOffHandle = () => {
    setSlide(false);
    setTimeout(() => {
      setMenuOn(false);
    }, 220);
  };
  useEffect(() => {});

  return (
    <MobileHeaderWrap menuOn={menuOn}>
      <div className="padd">
        <div className="header">
          <div className="logo">
            <NavLink to={`/`}>
              <DMlogo />
            </NavLink>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faBars}
              className="burgericon"
              onClick={() => {
                setMenuOn(true);
                setSlide(true);
              }}
            />
          </div>
          {/* <DropDownMenu setIsSign={setIsSign} /> */}
        </div>
      </div>
      {menuOn && (
        <div className="mobile">
          <div className={`mobile-menu ${slide ? `show` : "hide"}`}>
            <div className="user-block">{user.username}</div>
            <div className="menus">
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
          </div>
          <div className="mobile-menu-back" onClick={menuOffHandle} />
        </div>
      )}
    </MobileHeaderWrap>
  );
};

const MobileHeaderWrap = styled.header<{ menuOn: boolean }>`
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
  }
  .mobile-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: -12rem;
    background: white;
    width: 12rem;
    z-index: 4;
    height: 100%;
    height: calc(var(--vh, 1vh) * 100);
  }
  .show {
    @keyframes slideon {
      from {
        right: -12rem;
      }
      to {
        right: 0;
      }
    }
    animation: slideon 0.2s;
    animation-fill-mode: forwards;
  }
  .hide {
    @keyframes slideoff {
      from {
        right: 0rem;
      }
      to {
        right: -12rem;
      }
    }
    animation: slideoff 0.2s;
    animation-fill-mode: forwards;
  }
  .mobile-menu-back {
    position: fixed;
    overflow-y: hidden;
    width: 100%;
    height: 100%;
    height: calc(var(--vh, 1vh) * 100);
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
  }
  .user-block {
    margin: 1rem auto;
    font-weight: bold;
    font-size: 1.5rem;
  }
  .menus {
    display: flex;
    flex-direction: column;
  }
  .menu-item {
    background-color: white;
  }
  .page-toggle {
    /* padding-bottom: 0.25rem;
    border-bottom: 5px solid rgba(252, 114, 114, 1); */
    color: white;
    background-color: rgba(252, 114, 114, 1);
  }
  .burgericon {
    cursor: pointer;
    transform: scale(1.5);
    color: rgba(252, 114, 114, 1);
  }
`;

export default MobileHeader;
