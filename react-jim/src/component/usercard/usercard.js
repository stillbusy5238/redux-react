import React from 'react'

import PropTypes from 'prop-types'
import {Card, WhiteSpace,WingBlank} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

@withRouter
class UserCard extends React.Component{
  static PropTypes ={
    userList: PropTypes.array.isRequired

  }
  handleClick(v){
    this.props.history.push(`/chat/${v._id}`)
  }

  render(){

    const Body = Card.Body

    return (

      <WingBlank>
       <WhiteSpace></WhiteSpace>
        {this.props.userList.map(v=>(
          // key必须是唯一的

          v.avatar?
           <Card key={v.user} onClick={()=>this.handleClick(v)}>
            <Card.Header

              title={v.user}
              thumb={require(`../img/${v.avatar}.jpg`)}
              thumbStyle={{width:30}}
              extra={<span>{v.title}</span>}

              ></Card.Header>
            <Body>
              {v.type==='boss'?<div>公司:{v.company}</div>:null}

              {v.desc.split('\n').map(d=>(
                <div key={d}>{d}</div>
              ))}
              {v.type==='boss'?<div>薪水:{v.money}</div>:null}
            </Body>

          </Card>:null
        ))}
      </WingBlank>
    )
  }


}
export default UserCard
