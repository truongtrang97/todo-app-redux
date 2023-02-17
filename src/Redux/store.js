import {createStore} from 'redux'
import RootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
const composedEnhancers=composeWithDevTools()
const store=createStore(RootReducer,composedEnhancers)
export default store 