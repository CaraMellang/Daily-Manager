import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import DropDownMenu from "./DropDownMenu";
import { ReactComponent as DMlogo } from "../../svgs/dm.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { SIGNOUT } from "../../modules/redux/User";

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
  const dispatch = useDispatch();
  const history = useHistory();

  const signOutHandle = () => {
    window.alert("로그아웃완료");
    dispatch(SIGNOUT());
    removeCookieToken("rememberToken");
    setIsSign(true);
    history.push("/");
  };

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
        </div>
      </div>
      {menuOn && (
        <div className="mobile">
          <div className={`mobile-menu ${slide ? `show` : "hide"}`}>
            <div className="mobile-title">Daily Manager</div>
            <div className="user-block">
              <div className="username-area">{user.username}</div>
              <div className="email-area">{user.email}</div>
              <div className="signout" onClick={signOutHandle}>
                SignOut
              </div>
            </div>
            <div className="menus">
              <NavLink
                to={`/`}
                activeClassName="page-toggle"
                className="menu-item"
                onClick={menuOffHandle}
                exact
              >
                Home
              </NavLink>
              <NavLink
                to={`/calender`}
                activeClassName="page-toggle"
                className="menu-item"
                onClick={menuOffHandle}
                exact
              >
                Calender
              </NavLink>
              <NavLink
                to={`/charts`}
                activeClassName="page-toggle"
                className="menu-item"
                onClick={menuOffHandle}
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
  font-weight: bold;
  .padd {
    box-sizing: border-box;
    height: 100%;
    padding: 10px;
  }
  .header {
    height: 100%;
    display: flex;
    justify-content: space-between;
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
    padding: 1rem;
    font-weight: bold;
    color: white;
    background-color: #28647f;
  }
  .username-area {
    font-size: 1.5rem;
  }
  .email-area {
    color: #cacaca;
  }
  .menus {
    display: flex;
    flex-direction: column;
  }
  .menu-item {
    background-color: white;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-bottom: 1rem;
    transition: background-color 0.2s, color 0.2s;
  }
  .menu-item:hover {
    background-color: rgba(252, 114, 114, 1);
    color: white;
  }
  .page-toggle {
    color: white;
    background-color: rgba(252, 114, 114, 1);
  }
  .burgericon {
    cursor: pointer;
    transform: scale(1.75);
    color: rgba(252, 114, 114, 1);
    padding-right: 1rem;
  }
  .mobile-title {
    background-color: rgba(252, 114, 114, 1);
    color: white;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .signout {
    width: 70px;
    text-align: center;
    margin-top: 0.5rem;
    padding: 0.5rem;
    background-color: white;
    color: black;
    box-sizing: content-box;
    border-radius: 12px;
    transition: background-color 0.2s, color 0.2s;
  }
  .signout:hover {
    background-color: rgba(252, 114, 114, 1);
    color: white;
  }
`;

export default MobileHeader;
