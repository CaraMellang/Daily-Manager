import React, { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";

interface DropDownMenuProps {
  setIsSign: React.Dispatch<React.SetStateAction<boolean>>;
  profile: any;
}

const DropDownMenu = ({ setIsSign, profile }: DropDownMenuProps) => {
  const dropdownRef = useRef(null);
  const [isActive, setActive] = useState(false);
  const onClick = () => setActive(!isActive);
  const [cookiesToken, setCookieToken, removeCookieToken] = useCookies([
    "rememberToken",
  ]);

  useEffect(() => {
    const pageClickEvent = (e: any) => {
      console.log(e);
    };
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);
  return (
    <DropDownMenuWrap>
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>{profile.username}</span>
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
            alt="User avatar"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <div>option</div>
            </li>
            <li>
              <div
                onClick={() => {
                  window.alert("로그아웃완료");
                  removeCookieToken("rememberToken");
                  setIsSign(true);
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
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
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

  .menu li {
    /* border-bottom: 1px solid #dddddd; */
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
    border-radius: 90px;
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
