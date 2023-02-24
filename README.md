## 📌 레이어드 패턴 적용 (Typescript, TypeORM 적용 X)

```
- src
  - controllers
    - ExamController.js
    - ...
  - services
    - ExamService.js
    - ...
  - repositories
    - ExamRepository.js
    - ...
  - models
    - Exam.js
    - ...
  - routes.js
- config
  - database.js
- server.js
```

#

- app/controllers: 라우트와 직접적으로 연결되어 클라이언트 요청을 받고, HTTP 응답을 반환.
- app/services: 컨트롤러와 레포지토리 사이에서 비즈니스 로직을 처리.
- app/repositories: 데이터베이스에서 데이터를 읽고 쓰는 등의 기능을 담당.
- app/models: 데이터 모델링과 관련된 클래스나 함수를 포함.
- routes.js: 라우트를 정의.
- config/database.js: 데이터베이스 설정 정보를 포함.
- server.js: 애플리케이션의 진입점 역할.
