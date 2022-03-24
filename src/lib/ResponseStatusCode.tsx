import React from "react";

export default function ResponseStatusCode(status: number) {
  if (status === 401) {
    return { msg: "유효하지 않은 토큰이거나 기간이 만료된 토큰입니다." };
  } else if (status === 400) {
    return { msg: "이미 있는 이메일입니다!" };
  } else if (status === 500) {
    return { msg: "Internal Server Error" };
  } else {
    return { msg: "정의되지 않은 오류입니다." };
  }
}
