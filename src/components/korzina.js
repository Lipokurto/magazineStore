import { useDispatch, useSelector } from "react-redux"
import {removeWishGood} from '../actions/index'

const Korzina =(props)=> {

    let wishListkorzina = useSelector(state => state.goodsReducer.korzina)
    let dispatch = useDispatch()
    let wishList = wishListkorzina.map((el)=> {
        return (
            <div>
                Товар: {el.name} Количество: {el.count} 
                <button onClick={()=>{dispatch(removeWishGood(el.id,el.count))}}>Убрать из корзины</button>
            </div>
        )
    })
return (
    <div>
        тут корзина
        <div>
            {wishList}
        </div>
    </div>
)
}
export default Korzina