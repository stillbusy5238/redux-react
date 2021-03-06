import React from 'react'
import {Redirect} from 'react-router-dom'
import Logo from '../../component/logo/logo'
import {List, InputItem,WhiteSpace,Button,Radio} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/user-redux'
import Form from '../../component/form/form'


@connect(
  state=>state.user,
  {register}
)
@Form
class Register extends React.Component{
  constructor(props){
    super(props);
    //this.register=this.register.bind(this) 性能优化更好
    // this.state = {
    //   user:'',
    //   pwd:'',
    //   repeatpwd: '',
    //   type: 'genuis'
    //
    // }

  }
  componentDidMount(){
    this.props.handleChange('type','genuis')
  }
  // handleChange(key,val){
  //   this.setState({
  //     [key]:val
  //   })
  //
  // }
  handleRegister(){
    this.props.register(this.props.state)
    // console.log(this.state);
  }


  render(){
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} />:null}
        <Logo></Logo>


          <List>
            {this.props.msg?<p className="err-msg">{this.props.msg}</p>:null}
            <InputItem onChange={(v)=>{this.props.handleChange('user',v)}}>用户</InputItem>
            <WhiteSpace />
            <InputItem onChange={(v)=>{this.props.handleChange('pwd',v)}} type="password">密码</InputItem>
            <WhiteSpace />
            <InputItem onChange={(v)=>{this.props.handleChange('repeatpwd',v)}} type="password">确认密码</InputItem>
            <WhiteSpace />
            <RadioItem
              checked={this.props.state.type==='genuis'}
              onChange={()=>{this.props.handleChange('type','genuis')}}>
              求职

            </RadioItem>
            <RadioItem
              checked={this.props.state.type==='boss'}
              onChange={()=>{this.props.handleChange('type','boss')}}>
              Boss

            </RadioItem>


          </List>
          <Button type="primary" onClick={()=>{this.handleRegister()}}>注册</Button>


      </div>
    )
  }
}


export default Register
