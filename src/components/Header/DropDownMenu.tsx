import React, { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { SIGNOUT } from "../../modules/redux/User";
import { useDetectOutsideClick } from "../hooks/useDetectOutsideClick";

interface DropDownMenuProps {
  setIsSign: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDownMenu = ({ setIsSign }: DropDownMenuProps) => {
  const dropdownRef = useRef(null);
  const history = useHistory();
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const [cookiesToken, setCookieToken, removeCookieToken] = useCookies([
    "rememberToken",
  ]);
  const dispatch = useDispatch();
  const userSelector = useSelector((state: any) => state.userSliceReducer.user);

  return (
    <DropDownMenuWrap>
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>{userSelector.username}</span>
          
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            
            <li>
              <div
                onClick={() => {
                  window.alert("로그아웃완료");
                  dispatch(SIGNOUT());
                  removeCookieToken("rememberToken");
                  setIsSign(true);
                  history.push("/");
                }}
              >
                Sign out
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </DropDownMenuWrap>
  );
};

const DropDownMenuWrap = styled.div`
  span {
    padding: 0.5rem;
  }
  .menu-container {
    position: relative;
  }
  .menu {
    background: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 60px;
    right: 0;
    width: 120px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.1s ease, transform 0.1s ease, visibility 0.4s;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }


  .menu li div {
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
    cursor: pointer;
  }
  .menu-trigger {
    background: #ffffff;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border: none;
    vertical-align: middle;
    transition: box-shadow 0.4s ease;
  }

  .menu-trigger:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }

  .menu-trigger span {
    font-weight: 700;
    vertical-align: middle;
    font-size: 14px;
    margin: 0 10px;
  }

  .menu-trigger img {
    border-radius: 90px;
  }
`;

export default DropDownMenu;
