## ๐ ๋ ์ด์ด๋ ํจํด ์ ์ฉ (Typescript, TypeORM ์ ์ฉ X)

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

- app/controllers: ๋ผ์ฐํธ์ ์ง์ ์ ์ผ๋ก ์ฐ๊ฒฐ๋์ด ํด๋ผ์ด์ธํธ ์์ฒญ์ ๋ฐ๊ณ , HTTP ์๋ต์ ๋ฐํ.
- app/services: ์ปจํธ๋กค๋ฌ์ ๋ ํฌ์งํ ๋ฆฌ ์ฌ์ด์์ ๋น์ฆ๋์ค ๋ก์ง์ ์ฒ๋ฆฌ.
- app/repositories: ๋ฐ์ดํฐ๋ฒ ์ด์ค์์ ๋ฐ์ดํฐ๋ฅผ ์ฝ๊ณ  ์ฐ๋ ๋ฑ์ ๊ธฐ๋ฅ์ ๋ด๋น.
- app/models: ๋ฐ์ดํฐ ๋ชจ๋ธ๋ง๊ณผ ๊ด๋ จ๋ ํด๋์ค๋ ํจ์๋ฅผ ํฌํจ.
- routes.js: ๋ผ์ฐํธ๋ฅผ ์ ์.
- config/database.js: ๋ฐ์ดํฐ๋ฒ ์ด์ค ์ค์  ์ ๋ณด๋ฅผ ํฌํจ.
- server.js: ์ ํ๋ฆฌ์ผ์ด์์ ์ง์์  ์ญํ .
