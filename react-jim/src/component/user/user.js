import React from 'react'
import {connect} from 'react-redux'
import {Result, List,Brief,WhiteSpace,Modal} from 'antd-mobile'
import browserCookie from 'browser-cookies'
import {logoutSubmit} from '../../redux/user-redux'
import{Redirect} from 'react-router-dom'

@connect(
  state=>state.user,
  {logoutSubmit}
)


class User extends React.Component{
  // constructor(props){
  //   super(props)
  //
  // }
  logout(){
    // browserCookie.erase('userid')
    // location.href= location.href;
    
    const alert = Modal.alert

    alert('注销','确认吗',[
      {text:'取消'},
      {text:'确认',onPress:()=>{
        browserCookie.erase('userid')
        // window.location.href = window.location.href
        this.props.logoutSubmit()

      }}
    ])

  }
  render(){
    const props = this.props
    const Item = List.Item
    const Brief = Item.Brief



    return props.user?(


      <div>

        <Result
        img={<img src={require(`../img/${this.props.avatar}.jpg`)} style={{width:50}} alt=""/>}
        title={this.props.user}
        message={props.type==='boss'?props.company:null}/>


        <List renderHeader={()=>'简介'}>
          <Item
            multipleLine>
            {props.tittle}
            {this.props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
            {props.money?<Brief>薪资:{props.money}</Brief>:null}

          </Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <List>
          <Item onClick={()=>{this.logout()}}>退出</Item>
        </List>






      </div>

    ): <Redirect to={props.redirectTo}/>
  }
}


export default User
