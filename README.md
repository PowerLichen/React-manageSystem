# Management system

![Node](https://img.shields.io/badge/node-v14.17.1-blue)
![NPM](https://img.shields.io/badge/npm-v7.19.0-blue)

![React](https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933.svg?&style=for-the-badge&logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000.svg?&style=for-the-badge&logo=Express&logoColor=white)
![Mysql](https://img.shields.io/badge/MySQL-4479A1.svg?&style=for-the-badge&logo=MySQL&logoColor=white)
![js](https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white)

>React와 Express를 이용한 회원 관리 시스템.  
회원들의 정보를 추가하고, 삭제할 수 있음.

## 프로젝트 내용

* 웹 페이지에서 회원 목록을 입력하고 데이터베이스에 저장.
* 데이터베이스에 저장되어 있는 회원 목록을 출력.
* 회원을 추가하고, 이미지를 Local로 저장. (./upload 디렉토리에 저장됨)
* SQL injection 방지를 위해, placeholder를 이용한 쿼리를 사용.

## 설치 방법

```sh
npm install
cd client
npm install
```

## 개발 환경 설정
1. mysql을 설치하고 데이터베이스을 생성한다.  
2. 생성한 데이터베이스에 접근 가능하도록 /database.json을 생성하고 다음 항목을 입력한다.
    ```json
    {
        "host": "",
        "user": "",
        "password": "",
        "port": "",
        "database": ""
    }
    ```
3. author, topic 테이블을 생성한다.
    ```sql
    // CUSTOMER 테이블
    CREATE TABLE CUSTOMER(
        id INT PRIMARY KEY AUTO_INCREMENT,
        image VARCHAR(1024),
        name VARCHAR(64),
        birthday VARCHAR(64),
        gender VARCHAR(64),
        job VARCHAR(64)
        createdDate DATETIME,
	    isDeleted INT(10),
    ) DEFAULT CHARACTER SET UTF8 COLLATE utf8_general_ci;
    ```
5. CUSTOMER 목록을 미리 생성할 경우 다음과 같이 입력한다.
    ```sql
    INSERT INTO CUSTOMER VALUES(NULL, '이미지 경로', '이름', '생년월일', '성별', '직업', now(), 0);
    ```

## 사용 방법
## 추가 예정 기능