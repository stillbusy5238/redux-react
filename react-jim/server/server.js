const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')


const userRouter = require('./user');
const app = express()


app.use(cookieParser())
//解析post过来的json数据
app.use(bodyParser.json())
app.use('/user',userRouter)



// //类似mysql的表，mongo里有文档,字段的概念
// const User =  mongoose.model('user',new mongoose.Schema({
//   user : {type:String, require:true},
//   age:{type:Number,require:true}
// }))








app.listen(9093, function(){
  console.log('node app start at port 9093');
})
