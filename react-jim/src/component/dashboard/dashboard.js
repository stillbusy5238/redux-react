import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Switch,Route} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import Boss from '../../component/boss/boss'
import Genuis from '../../component/genuis/genuis'

import User from '../../component/user/user'
import {getMsgList,recvMsg} from '../../redux/chat-redux'



// function Genuis(){
//   return <h2>牛人</h2>
// }
function Msg(){
  return <h2>Msg</h2>
}
// function User(){
//   return <h2>个人中心</h2>
// }

@connect(
  state=>state,
  {getMsgList,recvMsg}
)
class Dashboard extends React.Component{
  componentDidMount(){
    if(!this.props.chat.chatmsg.length){
      this.props.getMsgList()
      this.props.recvMsg()

    }

  }


  render(){
    const user =this.props.user
    const {pathname} = this.props.location
    const navList = [
      {
        path:'/boss',
        text:'求职',
        icon:'1',
        title:'牛人列表',
        component:Boss,
        hide:user.type ==='genuis'
      },
      {
        path:'/genuis',
        text:'boss',
        icon:'2',
        title:'Boss列表',
        component:Genuis,
        hide:user.type ==='boss'

      },
      {
        path:'/msg',
        text:'消息',
        icon:'3',
        title:'消息列表',
        component:Msg,


      },
      {
        path:'/me',
        text:'我',
        icon:'4',
        title:'个人中心',
        component:User,


      }
    ]


    return(
      <div>
        <NavBar className='fixed-header' mode='dard'>{navList.find(v=>v.path===pathname).title}</NavBar>
        <div style={{marginTop:45}}>
          <Switch>
            {navList.map(v=>(
              <Route key={v.path} path={v.path} component={v.component}></Route>
            ))}

          </Switch>

        </div>


        <NavLinkBar data={navList}></NavLinkBar>

      </div>

    )

  }


}


export default Dashboard
