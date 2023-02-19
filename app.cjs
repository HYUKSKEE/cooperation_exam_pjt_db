require("dotenv").config();

const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const { createConnection } = require("typeorm");
const app = express();

createConnection({
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [__dirname + "/entity/*.js"], // Entity 파일 경로
  synchronize: true, // 자동으로 데이터베이스 스키마 생성 여부
})
  .then(() => {
    console.log("Database connection established!");
  })
  .catch((error) => console.log(error));

app.use(cors());
app.use(logger("combined"));
app.get("/ping", function (req, res, next) {
  res.json({ message: "pong" });
});

app.listen(3000, function () {
  console.log("server listening on port 3000");
});
