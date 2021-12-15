import React from "react";

export default function ResponseStatusCode(status: number) {
  if (status === 401) {
    return { msg: "유효하지 않은 토큰이거나 기간이 만료된 토큰입니다." };
  } else {
    //추가예정
    return { msg: "다른 상태코드 추가예정" };
  }
}
