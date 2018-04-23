// import axios from 'axios'
//
//
// const Login = 'Login'
//
// const Logout = 'Logout'
// const USER_DATA = 'USER_DATA'
// const initState = {
//   isAuth : false,
//   user:'李云龙',
//   age:20
//
// }
// export function auth(state=initState,action){
//   console.log(state,action);
//
//   switch (action.type) {
//     case Login:
//       return {...state, isAuth:true}
//     case Logout:
//       return {...state, isAuth:false}
//       case USER_DATA:
//         return {...state, user:action.payload.user,age:action.payload.age}
//
//
//     default:
//       return state
//
//   }
// }
// export function getUserData(){
//   //dispatch用来通知
//   return dispatch =>{
//       axios.get('/data').then(res=>{
//         if(res.status==200){
//           dispatch(userData(res.data))
//
//         }
//       })
//
//   }
// }
// export function userData(data){
//   return {type:USER_DATA,payload:data}
// }
// //action
// export function login(){
//   return {type:Login}
// }
//
// export function logout(){
//   return {type:Logout}
// }
