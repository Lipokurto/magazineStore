import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import {getWishGood} from '../actions/index'

const Good =(props)=> {
    let dispatch = useDispatch()
    const [wishCount,setWishCount] = useState(0)
    const [countError,setCountError] = useState(false)
    const [wishPrice,setWishPrice] = useState(0)
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
    },[wishCount,restOnStore])
    //перекидываем в локальный стейт общую стоимость заказа
    useEffect(()=> {
        setWishPrice(props.price * wishCount)
    },[wishCount,props.price])

    // useEffect(()=> {
    // })

    return (
        <div className='w-500'>
            <div className='col-sm-12'>
                <div className="card h-150 w-200 p-3 border border-success rounded-3">
                    <h3 className="card-title">{props.name}</h3>
                    <img src={props.img} className="p-2 h-25" alt=""></img>
                    <h5 className="card-text">Цена: {props.price}</h5>
                    <p className="card-text"><button className="btn btn-outline-danger" onClick={dec}>-</button>{' ' + wishCount + ' '}<button className="btn btn-outline-success" onClick={inc}>+</button></p>
                    <p className="card-text">Цена заказа: {wishPrice}</p>
                    <>{countError 
                    ? <p className="card-text">На складе нет такого количества товаров</p>
                    :<p className="card-text"><button className="btn btn-outline-success" id='btn' onClick={()=>dispatch(getWishGood(props.name,wishCount,restOnStore,props.id,wishPrice))}>В корзину</button></p>
                    }</>
                </div>
            </div>
        </div>
    )
}
export default Good