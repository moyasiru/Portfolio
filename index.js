// index.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 정적 파일 서빙 (public 폴더에서 파일 제공)
app.use(express.static(path.join(__dirname, 'public')));

// 기본 경로 ("/")로 접속하면 index.html을 반환
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/profile', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.json({
    name: '홍길동',
    job: '풀스택 개발자',
    intro: '안녕하세요! 다양한 기술로 만드는 걸 좋아합니다.',
   //photo: '/img/profile.jpg' // 정적 이미지 경로로 사용할 수 있음
  });
});

app.listen(port, () => {
  console.log(`서버 실행 중: http://localhost:${port}`);
});