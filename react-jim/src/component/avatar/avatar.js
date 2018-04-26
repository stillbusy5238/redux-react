import React from 'react'
import {Grid,List} from 'antd-mobile'
import PropTypes from 'prop-types'





class Avatar extends React.Component{
  static PropTypes ={
    selectAvatar: PropTypes.func.isRequired

  }
  constructor(props){
    super(props)
    this.state ={

    }
  }
  render(){
    const avatarList = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16'
                       .split(',')
                       .map(v=>({
                         icon:require(`../img/${v}.jpg`),
                         text:v
                       }))
    const gridHeader = this.state.icon ? (<div>
                                            <span>已经选择头像:</span>
                                            <img src={this.state.icon} style={{width:20}} alt=''/>
                                          </div>):'请选择头像'
    return (

      <div>

        <List renderHeader={()=>gridHeader}>

          <Grid data={avatarList}
           onClick={elm=>{
             this.setState(elm)
             this.props.selectAvatar(elm.text)
           }} />

        </List>


      </div>

    )
  }
}

export default Avatar
