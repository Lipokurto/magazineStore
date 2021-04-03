import { useDispatch, useSelector } from "react-redux"
import {removeWishGood} from '../actions/index'

const Korzina =(props)=> {

    let wishListkorzina = useSelector(state => state.goodsReducer.korzina)
    let dispatch = useDispatch()
    let wishList = wishListkorzina.map((el,i)=> {
        return (
            <tr>
                <th scope="row">{i+1}</th>
                <td>{el.name}</td>
                <td>{el.count} </td>
                <td>тут будет цена</td>
                <td><button className='btn btn-outline-danger' onClick={()=>{dispatch(removeWishGood(el.id,el.count))}}>Х</button></td>
            </tr>
        )
    })
return (
    <div>
        <h1>Корзина</h1>
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Товар</th>
                <th scope="col">Количество</th>
                <th scope="col">Цена</th>
                <th scope="col">Убрать</th>
                </tr>
            </thead>
            <tbody>
                {wishList}
            </tbody>
        </table>
    </div>
)
}
export default Korzina