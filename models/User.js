// mongoose를 요청함
const mongoose = require('mongoose');

// Schema 설정
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        tpye: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

// Schema를 모듈로 감싸 줌
const User = mongoose.model('User', userSchema)

// 모듈을 다른 곳에서도 사용할 수 있도록 하는 코드
module.exports = { User }