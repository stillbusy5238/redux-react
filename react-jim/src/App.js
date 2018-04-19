import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd-mobile'

import 'antd-mobile/dist/antd-mobile.css'

class App extends Component {
  render() {
    const boss = '李云龙'
    return (
      <div>
        <h2>独立团,{boss}</h2>
        <FirstApp boss="张大表"></FirstApp>


      </div>

    );




  }
}


class FirstApp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      solders: ['胡子','珠子','曹操']
    }
  }
  addSolder(e){
    console.log('hello');
    this.setState({
      solders:[...this.state.solders, '新兵'+Math.random()]
    })
  }
  render(){

    return (
      <div>
        <h2>一营 {this.props.boss}</h2>
        <Button type="primary" onClick={(e)=>this.addSolder()}>新兵入伍</Button>
        <ul>
          {
            this.state.solders.map(v=>{
              return <li key={v}>{v}</li>
            })
          }
        </ul>

      </div>

    )
  }
}

export default App;
