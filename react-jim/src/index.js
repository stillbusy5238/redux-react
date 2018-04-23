//新建store

import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route, Redirect,Switch} from 'react-router-dom'

import {Provider} from 'react-redux'


// import {counter} from './index-redux'
import reducers from './reducers'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import './index.css'


import './config'


const store = createStore(reducers,compose(applyMiddleware(thunk),
                          window.devToolsExtension ? window.devToolsExtension(): f=>f))



//登陆

//页面 导航+显示+注销

//router+redux

  ReactDom.render(
    (<Provider store={store}>
      <BrowserRouter>
        <div>
          <AuthRoute></AuthRoute>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>

        </div>






      </BrowserRouter>


    </Provider>),

    document.getElementById('root')
  )
