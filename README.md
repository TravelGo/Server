# TravelGO Server Env. Setting

Reference : https://poiemaweb.com/mongoose

## Set-up Node-JS Library
Install Express, Body-Parser, Dotenv and Mongoose with NPM
```
npm init --yes
npm install express body-parser dotenv mongoose
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