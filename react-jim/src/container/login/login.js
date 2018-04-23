import React from 'react'
import {Redirect} from 'react-router-dom'
import Logo from '../../component/logo/logo'
import {List, InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import {login} from '../../redux/user-redux'
import {connect} from 'react-redux'

@connect(
  state=>state.user,
  {login}
)

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user : '',
      pwd: ''
    }
    //this.register=this.register.bind(this) 性能优化更好
    this.handleLogin = this.handleLogin.bind(this)

  }
  handleChange(key,val){
    this.setState({
      [key]:val
    })}
  handleLogin(){
    this.props.login(this.state)
  }

  register(){
    this.props.history.push('/register')
  }
  render(){
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} />:null}
        <Logo></Logo>
        <h2>我是登陆页</h2>
        <WingBlank>
          <List>
            {this.props.msg?<p className="err-msg">{this.props.msg}</p>:null}
            <InputItem onChange={(v)=>this.handleChange('user',v)}>用户</InputItem>
            <WhiteSpace />
            <InputItem onChange={(v)=>this.handleChange('pwd',v)}>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleLogin}>登录</Button>
          <WhiteSpace />
          <Button type="primary" onClick={()=>{this.register()}}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}


export default Login
