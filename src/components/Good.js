import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import {getWishGood} from '../actions/index'

const Good =(props)=> {

    let dispatch = useDispatch()
    const [wishCount,setWishCount] = useState(0)
    const [countError,setCountError] = useState(false)
    //повышение и понижение количества товаров
    const inc =()=> {
        return setWishCount(wishCount + 1)
    }
    //Добавляем проверку на равность нулю что б количество не падало меньше нуля 
    const dec =()=> {
        if(wishCount !== 0) {
            return setWishCount(wishCount - 1)
        }
    }
    
    //Считаем сколько осталось в магазине (остаток рассчитывается тут что б при отпарвке товара в корзимну происходила проверка на наличие нужного количества товара на складе)
    let restOnStore = props.count - wishCount

    //добавляем проверку наличия достаточного количества товара на складе
    useEffect(()=> {
        ((restOnStore) < 0) ? setCountError(true) : setCountError(false)
    },[restOnStore])

    return (
        <div>
        <h2>{props.name}</h2>
        <h3>Цена: {props.price}</h3>
        <div>
            <button onClick={dec}>-</button>
            {wishCount}
            <button onClick={inc}>+</button>
            <div>
                Всего: {wishCount * props.price}
            </div>
        <button onClick={()=>dispatch(getWishGood(props.name,wishCount,restOnStore,props.id))}>В корзину</button>
        </div>
        <>
            {countError
                ?<div>На складе нет такого количества товаров</div>
                :null
                }
        </>
    </div>
    )
}
export default Good