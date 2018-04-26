import React from 'react'
import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile'
import Avatar from '../../component/avatar/avatar'
import{connect} from 'react-redux'
import {update} from '../../redux/user-redux'
import {Redirect} from 'react-router-dom'


@connect(
  state=>state.user,
  {update}
)
class Genuisinfo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      desc:''


    }
  }
  handleChange(key, val){
    this.setState({
      [key]:val
    })

  }



  render(){
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <div>
        {redirect && redirect!== path?<Redirect to={this.props.redirectTo}></Redirect> :null}
        <NavBar mode="dark">求职完善信息页面</NavBar>
        <Avatar
          selectAvatar={(imgname)=>{
            this.setState({
              avatar:imgname
            })
          }}></Avatar>
        <InputItem onChange={(v)=>this.handleChange('title',v)}>求职职位</InputItem>

        <TextareaItem
                      onChange={(v)=>this.handleChange('desc',v)}
                      row={3}
                      autoHeight
                      title='个人见解'
                             >
        </TextareaItem>
        <Button
          type='primary'
          onClick={()=>{
            this.props.update(this.state)
          }}
          >保存</Button>

      </div>

    )
  }
}

export default Genuisinfo
