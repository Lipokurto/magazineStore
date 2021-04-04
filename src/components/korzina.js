import { useDispatch, useSelector } from "react-redux"
import {removeWishGood} from '../actions/index'

const Korzina =(props)=> {
    let wishListkorzina = useSelector(state => state.korzina)
    let globPrice = useSelector(state => state.globalPrice)
    let dispatch = useDispatch()
    let wishList = wishListkorzina.map((el,i)=> {
        return (
            <tr>
                <th scope="row">{i+1}</th>
                <td>{el.name}</td>
                <td>{el.count} </td>
                <td>{el.price}</td>
                <td><button className='btn btn-outline-danger' onClick={()=>{dispatch(removeWishGood(el.count,el.price,el.name))}}>Х</button></td>
            </tr>
        )
    })
return (
    <div>
        <h1 className='alert alert-primary'>Корзина</h1>
        {globPrice !== 0 ? 
        <div>
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
            <h2 className='text-md-center'>{'Итого к оплате: ' + globPrice}</h2>
        </div>
        : <div className="alert alert-danger text-md-center">В вашей корзине еще нет товаров</div>
        }
    </div>
)
}
export default Korzina