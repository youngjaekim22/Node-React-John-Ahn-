// express 모듈을 추가
const express = require('express')
// 새로운 express 모듈을 생성
const app = express()
// port 설정
const port = 5000

// Hello World! 전송
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// 5000번 port에서 실행
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})