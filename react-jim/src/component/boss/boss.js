import React from 'react'
import {getUserList} from '../../redux/chatuser'
import {connect} from 'react-redux'
import UserCard from '../usercard/usercard'

@connect(
  state=>state.chatuser,
  {getUserList}
)


class Boss extends React.Component{
  // constructor(props){
  //   super(props);
  //
  // }
  componentDidMount(){
    this.props.getUserList('genuis')



  }
  render(){


    return (
      <UserCard userList={this.props.userList}></UserCard>


    )

  }

}

export default Boss
