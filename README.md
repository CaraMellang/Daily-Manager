## 프로젝트 소개

📅하루의 일을 기록하고 보여주는 투두 웹 사이트

## 🌐프로젝트 링크

[https://project-dm.netlify.app/](https://project-dm.netlify.app/)

## ⚙️개발 언어

Javascript, typescript, nodejs

## ****💻****개발 스택

프론트 – React, Redux toolkit, Redux-saga, styled components, chartjs, dayjs

백앤드 – Express, Mongodb, Mongoose, bcrypt, jwt

## 배포

Front

- Netlify

Back

- Heroku

## ****⏱****개발기간

2021.10.01 ~ 2021.12.17 (약 2개월)

## 프로젝트 기능

- 로그인, 회원가입, 로그아웃 구현
- Jwt를 통해 로그인 유지
- 메인 페이지에서 오늘의 Todo와 완료된 Todo를 확인 , 수정 , 삭제 가능
- 달력으로 작성된 Todo 확인 및 Todo 수정, 삭제 가능
- 오늘 작성한 Todo의 수, 완료 수, 달성률, 7일동안의 기록 등등의 데이터를 시각화
- 반응형으로 설계하여 모바일 가능.

## 문제와 해결

1. DB 선택

    - Mysql은 규칙이 엄격하고 Mongodb는 유연함. (생산성이 높음)

    - Mongodb는 join과 같은 관계가 없는 비관계형.

    - 초보자가 배우기 쉬우므로 Mongodb선택

1. 배포방법

    - Aws를 사용하려 했으나 여러 설정들이 많고 복잡하여 하지 못했음

     - 간편하게 파일만 올리면 배포되는 netlify와 heroku를 사용.

1. 달력 기능 구현법

    - 초기에는 구현법을 모르고 인터넷 예제들의 원리를 이해하지 못해 라이브러리로 가져와 

      사용하려 했으나 css 스타일 등등여러 제약이 많아서 dayjs 라이브러리를 이용해 자체 구현함.

## 추후 보완사항

- Oauth 2.0을 사용하여 구글, 카카오 소셜 로그인 기능 추가
- aws를 사용해 배포
- 배포사이트에서 Todo 생성 , 수정할때 날짜가 수시간 전으로 DB에 저장되는 사항수정.
- 다크모드 적용

## 프로젝트 아키텍쳐

![image](https://user-images.githubusercontent.com/51808985/159106580-58764cba-eb5a-48ea-85aa-0abc87ec8a24.png)

## 사이트 화면

### **[로그인 && 회원가입]**

![https://user-images.githubusercontent.com/51808985/146792714-af7c4cf1-b6a6-4957-8ac9-000328979614.png](https://user-images.githubusercontent.com/51808985/146792714-af7c4cf1-b6a6-4957-8ac9-000328979614.png)

![https://user-images.githubusercontent.com/51808985/146793041-60a0c201-c800-4449-a0d6-7ae6639a8de0.png](https://user-images.githubusercontent.com/51808985/146793041-60a0c201-c800-4449-a0d6-7ae6639a8de0.png)

### **[홈 화면]**

![https://user-images.githubusercontent.com/51808985/146794067-4e69fb0b-7f95-49cb-8e5a-779238dd8f88.png](https://user-images.githubusercontent.com/51808985/146794067-4e69fb0b-7f95-49cb-8e5a-779238dd8f88.png)

### **[캘린더 화면]**

![https://user-images.githubusercontent.com/51808985/146793427-f94347b1-3e9c-4b63-8d98-e4ec1e533906.png](https://user-images.githubusercontent.com/51808985/146793427-f94347b1-3e9c-4b63-8d98-e4ec1e533906.png)

### **[차트 화면]**

![https://user-images.githubusercontent.com/51808985/146793781-941a3b68-6743-4c6e-af18-40ed59c2b3ab.png](https://user-images.githubusercontent.com/51808985/146793781-941a3b68-6743-4c6e-af18-40ed59c2b3ab.png)

### **[모달 리스트]**

![https://user-images.githubusercontent.com/51808985/146793878-806a5772-6365-4c4c-9c2e-7ea8235b0dd5.png](https://user-images.githubusercontent.com/51808985/146793878-806a5772-6365-4c4c-9c2e-7ea8235b0dd5.png)

### **[모달 수정]**

![https://user-images.githubusercontent.com/51808985/146793955-2b8c582a-536d-40e7-8552-aa42944810a1.png](https://user-images.githubusercontent.com/51808985/146793955-2b8c582a-536d-40e7-8552-aa42944810a1.png)

<!-- 
## 사이트 화면
![image](https://user-images.githubusercontent.com/51808985/146792714-af7c4cf1-b6a6-4957-8ac9-000328979614.png)
![image](https://user-images.githubusercontent.com/51808985/146793041-60a0c201-c800-4449-a0d6-7ae6639a8de0.png)
### [로그인 && 회원가입]

![image](https://user-images.githubusercontent.com/51808985/146794067-4e69fb0b-7f95-49cb-8e5a-779238dd8f88.png)
### [홈 화면]

![image](https://user-images.githubusercontent.com/51808985/146793427-f94347b1-3e9c-4b63-8d98-e4ec1e533906.png)
### [캘린더 화면]

![image](https://user-images.githubusercontent.com/51808985/146793781-941a3b68-6743-4c6e-af18-40ed59c2b3ab.png)
### [차트 화면]

![image](https://user-images.githubusercontent.com/51808985/146793878-806a5772-6365-4c4c-9c2e-7ea8235b0dd5.png)
### [모달 리스트]

![image](https://user-images.githubusercontent.com/51808985/146793955-2b8c582a-536d-40e7-8552-aa42944810a1.png)
### [모달 수정] -->

