import counter from './counter'
import logged from './logged'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    counter: counter,
    logged: logged
}) 
export default rootReducer