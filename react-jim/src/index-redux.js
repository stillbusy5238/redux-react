
// 
// const ADD_PEO = '加人'
// const REMOVE_PEO = '减人'

//reducer
//通过reducer建立
//根据老得state和action生成新的state

// export function counter(state=0, action){
//   switch (action.type) {
//     case ADD_PEO:
//        return state+1
//
//     case REMOVE_PEO:
//        return state-1
//     default:
//        return 10
//
//   }
//
// }
// //action creator
// export function addPEO(){
//   return {type:ADD_PEO}
// }
//
// export function removePEO(){
//   return {type:REMOVE_PEO}
// }
//
// export function addPEOAsync(){
//   return dispatch =>{
//     setTimeout(()=>{
//       dispatch(addPEO())
//     },2000)
//   }
// }
