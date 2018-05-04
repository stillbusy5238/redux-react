import React from 'react'
import {connect} from 'react-redux'
import {List,InputItem,Brief,Badge} from 'antd-mobile'


@connect(
  state=>state
)
class Msg extends React.Component{
  getLast(arr){
    return arr[arr.length-1]
  }

  render(){
    if(!this.props.chat.chatmsg){
      return
    }
    const Item =List.Item
    const Brief = Item.Brief
    const userid = this.props.user._id
    const userinfo = this.props.chat.users
    //根据聊天用户chatid分组
    const msgGroup ={}
    this.props.chat.chatmsg.forEach(v=>{
      msgGroup[v.chatid] = msgGroup[v.chatid] || []
      msgGroup[v.chatid].push(v)
    })
    // console.log(msgGroup);
    // console.log(Object.values({name:'imooc',age:18}));
    const chatList = Object.values(msgGroup).sort((a,b)=>{
      const a_last = this.getLast(a).createTime
      const b_last = this.getLast(b).createTime
      return b_last-a_last
    })
    //排序
    // console.log([3,1,2,6,5].sort(function(a,b){
    //   return a-b
    // }));

    return (
      <div>
        <List>
          {chatList.map(v=>{
          //  console.log(v);

           const lastItem = this.getLast(v)
           const targetId = v[0].from === userid ? v[0].to:v[0].from
           const unread = v.filter(v=>!v.read&&v.to===userid).length
           const name = userinfo[targetId]?userinfo[targetId].name:''
           const avatar = userinfo[targetId]?userinfo[targetId].avatar:''

           return(
            <Item key={lastItem._id}
                  extra={<Badge text={unread}></Badge>}
                  thumb={require(`../img/${avatar}.jpg`)}
                  arrow="horizontal"
                  onClick={()=>{
                    this.props.history.push(`/chat/${targetId}`)
                  }}>
              {lastItem.content}
              <Brief>{name}</Brief>
            </Item>)
          })}
        </List>

      </div>
    )
  }
}


export default Msg
