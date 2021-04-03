import { combineReducers } from "redux";
import goodsReducer from './goodsReducer'


const rootReducer = combineReducers (
    {
        goodsReducer
    }
)
export default rootReducer