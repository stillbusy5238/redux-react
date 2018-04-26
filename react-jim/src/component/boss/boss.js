import React from 'react'


import {Card, WhiteSpace,WingBlank} from 'antd-mobile'
import {getUserList} from '../../redux/chatuser'
import {connect} from 'react-redux'

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
    const Body = Card.Body

    return (

      <WingBlank>
       <WhiteSpace></WhiteSpace>
        {this.props.userList.map(v=>(
          // key必须是唯一的

          v.avatar?
           <Card key={v.user}>
            <Card.Header

              title={v.user}
              thumb={require(`../img/${v.avatar}.jpg`)}
              thumbStyle={{width:30}}
              extra={<span>{v.title}</span>}

              ></Card.Header>
            <Body>
              {v.desc.split('\n').map(v=>(
                <div key={v}>{v}</div>
              ))}
            </Body>

          </Card>:null
        ))}
      </WingBlank>
    )

  }

}

export default Boss
