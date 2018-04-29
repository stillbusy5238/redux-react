import React from 'react'



import {getUserList} from '../../redux/chatuser'
import {connect} from 'react-redux'
import UserCard from '../usercard/usercard'

@connect(
  state=>state.chatuser,
  {getUserList}
)


class Genuis extends React.Component{
  // constructor(props){
  //   super(props);
  //
  // }
  componentDidMount(){
    this.props.getUserList('boss')



  }
  render(){


    return (
       <UserCard userList={this.props.userList}></UserCard>


    )

  }

}

export default Genuis
