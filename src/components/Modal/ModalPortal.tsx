import React from "react";
import ReactDOM from "react-dom";

const ModalPortal = ({ children }: any) => {
  const el: any = document.getElementById("modal-root");
  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
