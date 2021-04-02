import { combineReducers } from "redux";
import goodsReducer from './goodsReducer'
import korzinaReducer from './korzinaReducer'

const rootReducer = combineReducers (
    {
        goodsReducer,
        korzinaReducer
    }
)
export default rootReducer