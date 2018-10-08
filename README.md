# TravelGO Server Env & Setting

Reference : https://poiemaweb.com/mongoose

## Set-up Node-JS Library
Install Express, Body-Parser, Dotenv, Express-Session and Mongoose with NPM
```
npm init --yes
npm install express body-parser dotenv mongoose express-session
```
****

## Directory
```
├── Enum.js                 // 상수 관련
├── README.md               // 설명서
├── app.js                  // Main JS
├── models                  // MongoDB Models ( Schema )
│   └── accounts.js         // 계정 관련 
├── node_modules            // 설치된 모듈
├── returnCode.js           // RESTAPI 반환 값
├── routes                  // RESTAPI Routing
│   └── accounts.js         // 계정관련 정보 처리
├── util.js                 // 각종 함수 지원
└── validCheck.js           // Regex를 통한 data validation 
```

## SESSION
key|value
---|---
username|username of user


# API
모든 API 호출은 JSON 형식으로 하며, 응답은 코드인 경우 일반 평문, 정보전달의 경우엔 JSON 으로 응답합니다.

<!--
## 가. <CATEGORY>
### 1. <TITLE> : <METHOD> <PATH>
#### Request Params with JSON
name|key|value
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE
---|---
-->

## 가. 계정 관련
### 1. 계정 생성 : POST /accounts/create

#### Request Params with JSON
name|key|value
---|---|---
아이디|username|a-z0-9_를 만족해야하며 4자 이상 20자 이하여야 한다.
비밀번호|password|
이름|fullname|
전화번호|phone|010-0000-0000 형식으로 입력한다.

#### Response ( Not JSON )
CODE|MESSAGE
---|---
AccountCreateSuccess|계정 생성에 성공한 경우
AccountCreateFail|계정 생성에 실패한 경우
InvalidPhone|전화번호가 형식에 맞지 않은 경우
InvalidUsername|아이디가 형식에 맞지 않은 경우
AlreadyUsername|이미 존재하는 아이디인 경우
NoValue|입력되지 않은 값이 존재하는 경우
UnknownError|알 수 없는 에러

### 2. 계정 로그인 : POST /accounts/login
#### Request Params with JSON
name|key|value
---|---|---
아이디|username|
비밀번호|password|
#### Response ( Not JSON )
CODE|MESSAGE
---|---
AccountLoginSuccess|로그인 성공
AccountLoginFail|로그인 실패

### 3. 계정 로그아웃 : GET /accounts/logout
#### Request Params with JSON
name|key|value
---|---|---
-|-|-
#### Response ( Not JSON )
CODE|MESSAGE
---|---
-|-

## 나. 트라벨스탑관련

### 1. 트라벨스탑 추가(관리자) : <METHOD> <PATH>
#### Request Params with JSON
name|key|value
---|---|---
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE
---|---
---|---

### 2. 트라벨스탑 리스트 : <METHOD> <PATH>
#### Request Params with JSON
name|key|value
---|---|---
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE
---|---
---|---

### 3. 주변 트라벨스탑 리스트 : <METHOD> <PATH>
#### Request Params with JSON
name|key|value
---|---|---
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE# TravelGO Server Env & Setting

Reference : https://poiemaweb.com/mongoose

## Set-up Node-JS Library
Install Express, Body-Parser, Dotenv, Express-Session and Mongoose with NPM
```
npm init --yes
npm install express body-parser dotenv mongoose express-session
```
****

## Directory
```
├── Enum.js                 // 상수 관련
├── README.md               // 설명서
├── app.js                  // Main JS
├── models                  // MongoDB Models ( Schema )
│   └── accounts.js         // 계정 관련 
├── node_modules            // 설치된 모듈
├── returnCode.js           // RESTAPI 반환 값
├── routes                  // RESTAPI Routing
│   └── accounts.js         // 계정관련 정보 처리
├── util.js                 // 각종 함수 지원
└── validCheck.js           // Regex를 통한 data validation 
```

## SESSION
key|value
---|---
username|username of user


# API
모든 API 호출은 JSON 형식으로 하며, 응답은 코드인 경우 일반 평문, 정보전달의 경우엔 JSON 으로 응답합니다.

<!--
## 가. <CATEGORY>
### 1. <TITLE> : <METHOD> <PATH>
#### Request Params with JSON
name|key|value
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE
---|---
-->

## 가. 계정 관련
### 1. 계정 생성 : POST /accounts/create

#### Request Params with JSON
name|key|value
---|---|---
아이디|username|a-z0-9_를 만족해야하며 4자 이상 20자 이하여야 한다.
비밀번호|password|
이름|fullname|
전화번호|phone|010-0000-0000 형식으로 입력한다.

#### Response ( Not JSON )
CODE|MESSAGE
---|---
AccountCreateSuccess|계정 생성에 성공한 경우
AccountCreateFail|계정 생성에 실패한 경우
InvalidPhone|전화번호가 형식에 맞지 않은 경우
InvalidUsername|아이디가 형식에 맞지 않은 경우
AlreadyUsername|이미 존재하는 아이디인 경우
NoValue|입력되지 않은 값이 존재하는 경우
UnknownError|알 수 없는 에러

### 2. 계정 로그인 : POST /accounts/login
#### Request Params with JSON
name|key|value
---|---|---
아이디|username|
비밀번호|password|
#### Response ( Not JSON )
CODE|MESSAGE
---|---
AccountLoginSuccess|로그인 성공
AccountLoginFail|로그인 실패

### 3. 계정 로그아웃 : GET /accounts/logout
#### Request Params with JSON
name|key|value
---|---|---
-|-|-
#### Response ( Not JSON )
CODE|MESSAGE
---|---
-|-

## 나. 트라벨스탑관련

### 1. 트라벨스탑 추가(관리자) : POST /travelstop/upload
#### Request Params with JSON
name|key|value
---|---|---
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE
---|---
---|---

### 2. 트라벨스탑 정보 : GET /travelstop/:key
#### Request Params with JSON
name|key|value
---|---|---
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE
---|---
---|---

### 3. 주변 트라벨스탑 리스트 : POST /travelstop/list
#### Request Params with JSON
name|key|value
---|---|---
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE
---|---****
---|---

## 다. 방명록 관련

### 1. 방명록 목록 : <METHOD> <PATH>
#### Request Params with JSON
name|key|value
---|---|---
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE
---|---
---|---

### 2. 방명록 작성 : <METHOD> <PATH>
#### Request Params with JSON
name|key|value
---|---|---
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE
---|---
---|---

### 3. 최신 방명록 : <METHOD> <PATH>
#### Request Params with JSON
name|key|value
---|---|---
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE
---|---
---|---

## 라. 채팅 관련

### 1. 채팅방 목록
#### Request Params with JSON
name|key|value
---|---|---
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE
---|---
---|---

### 2. 채팅 인원

---|---****
---|---

## 다. 방명록 관련

### 1. 방명록 목록 : <METHOD> <PATH>
#### Request Params with JSON
name|key|value
---|---|---
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE
---|---
---|---

### 2. 방명록 작성 : <METHOD> <PATH>
#### Request Params with JSON
name|key|value
---|---|---
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE
---|---
---|---

### 3. 최신 방명록 : <METHOD> <PATH>
#### Request Params with JSON
name|key|value
---|---|---
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE
---|---
---|---

## 라. 채팅 관련

### 1. 채팅방 목록
#### Request Params with JSON
name|key|value
---|---|---
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE
---|---
---|---

### 2. 채팅방 정보
#### Request Params with JSON
name|key|value
---|---|---
---|---|---
#### Response ( Not JSON )
CODE|MESSAGE
---|---
---|---

