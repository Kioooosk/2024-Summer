import express from 'express';
import cors from 'cors';

const port = 8080;
const app = express();

// CORS 설정
const corsOptions = {
  origin: '*', // 허용할 도메인
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors());
