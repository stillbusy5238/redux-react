
import axios from 'axios'
import {getRedirectPath} from '../util'


// const Register_success = 'Register_success'

const Error_MSG = 'Error_MSG'
//验证信息
const Auth_success = 'Auth_success'

// const Login_success = 'Login_success'
const Load_data = 'Load_data'
const Logout = 'Logout'

const initState={
  redirectTo:'',
  // isAuth: false,
  msg : '',
  user:'',

  type:''
}





//reducers

export function user(state=initState,action){
  switch(action.type){
    case Auth_success:
       return {...state,msg:'',redirectTo:getRedirectPath(action.payload),...action.payload}
    case Error_MSG:
      return {...state,isAuth:false,msg:action.msg}
    // case Login_success:
    //   return{...state,isAuth:true,msg:'',redirectTo:getRedirectPath(action.payload),...action.payload}
    case Load_data:
      return {...state,...action.payload}
    case Logout:
       return {...initState, redirectTo:'/login'}
    default:
      return state
  }



}

function authSuccess(obj){
  //过滤密码
  const {pwd,...data} = obj
  return {type:Auth_success,payload:data}

}

function errorMsg(msg){
  return { msg,type:Error_MSG }
}
// function loginSuccess(data){
//   return {type:Login_success,payload:data}
// }

export function loadData(userinfo){
  return{type:Load_data,payload:userinfo}
}
export function logoutSubmit(){
  return{type:Logout}
}
export function register({user,pwd,repeatpwd,type}){
  if(!user || !pwd ||!type ){
    return errorMsg('用户名密码必须输入')

  }
  if(pwd !== repeatpwd){
    return errorMsg('用户名密码必须输入')
  }
  return dispatch =>{
    axios.post('/user/register',{user,pwd,type}).then(res=>{
      if(res.status===200 && res.data.code===0){
        dispatch(authSuccess({user,pwd,type}))

      }else{
        dispatch(errorMsg(res.data.msg))

      }
    })

  }


}


export function login({user,pwd}){
  if(!user || !pwd){
    return errorMsg('用户名密码必须输入')
  }
  return dispatch=>{
    axios.post('/user/login',{user,pwd}).then(res=>{
      if(res.status===200 && res.data.code===0){
        dispatch(authSuccess(res.data.data))
      }else{
        dispatch(errorMsg(res.data.msg))

      }
    })
  }



}

//bossinfo and genuisinfo

export function update(data){
  return dispatch =>{
    axios.post('user/update', data).then(res=>{
      if(res.status===200 && res.data.code===0){
        dispatch(authSuccess(res.data.data))
      }else{
        dispatch(errorMsg(res.data.msg))

      }

    })
  }
}
