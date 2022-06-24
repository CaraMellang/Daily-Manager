import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingWrap>
      <Loader type="Oval" color="white" width={100} height={100} />
    </LoadingWrap>
  );
};

const LoadingWrap = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default Loading;
