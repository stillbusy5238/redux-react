//合并所有的reducer并且返回


import {combineReducers} from 'redux'
import {user} from './redux/user-redux'
import {chatuser} from './redux/chatuser'
import {chat} from './redux/chat-redux'




export default combineReducers({user,chatuser,chat})
