const mongoose = require('mongoose');
//连接mongo, 并且使用react这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/react-redux';

mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
  console.log('mon success');
})

const models = {
  user: {
    'user':{type:String,require:true},
    'pwd':{type:String,require:true},
    'type':{type:String,require:true},
    //头像
    'avatar':{type:String},
    //个人简介或者职位简介
    'desc':{type:String},
    //职位名
    'title':{type:String},
    //如果是boss
    'company':{type:String},
    'money':{type:String}

  },

  chat: {
    'chatid':{type:String,require:true},

    'from':{type:String,require:true},
    'to':{type:String,require:true},
    'read':{type:Boolean,default:false},
    'content':{type:String,require:true,default:''},
    'createTime':{type:Number,default:new Date().getTime()}

  }
}

for(let m in models){
  mongoose.model(m, new mongoose.Schema(models[m]))
}



module.exports = {
  getModel: function(name){
    return mongoose.model(name)
  }
}
