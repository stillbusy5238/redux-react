//新建store

import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {Provider} from 'react-redux'
import BossInfo from './container/bossinfo/bossinfo'
import Genuisinfo from './container/genuisinfo/genuisinfo'


// import {counter} from './index-redux'
import reducers from './reducers'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import Dashboard from './component/dashboard/dashboard'
import Chat from './component/chat/chat'
import './index.css'


import './config'


const store = createStore(reducers,compose(applyMiddleware(thunk),
                          window.devToolsExtension ? window.devToolsExtension(): f=>f))



//登陆

//页面 导航+显示+注销

//router+redux
//boss ,genuis,me msg 4个页面
  ReactDom.render(
    (<Provider store={store}>
      <BrowserRouter>
        <div>
          <AuthRoute></AuthRoute>
          <Switch>
            <Route path='/bossinfo' component={BossInfo}></Route>
            <Route path='/genuisinfo' component={Genuisinfo}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/chat/:user' component={Chat}></Route>
            <Route component={Dashboard}></Route>

          </Switch>


        </div>






      </BrowserRouter>


    </Provider>),

    document.getElementById('root')
  )
