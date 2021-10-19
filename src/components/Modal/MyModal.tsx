import React from "react";
import styled from "styled-components";

const MyModal = () => {
  return (
    <MyModalWrap>
      <div className="MyModal">
        <div className="content">
          <h1>모달</h1>
          <div>ㅎㅇ</div>
        </div>
      </div>
    </MyModalWrap>
  );
};

const MyModalWrap = styled.div`
  .MyModal {
    background: rgba(0, 0, 0, 0.25);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .MyModal .content {
    background: white;
    padding: 1rem;
    width: 400px;
    height: auto;
  }
`;

export default MyModal;
