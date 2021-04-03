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
    },[restOnStore,wishCount])

    return (
            <div className="order-3 p-1 h-150 bd-highlight border border-success rounded ">
                <h5 className="card-title">{props.name}</h5>
                <img src={props.img} className="p-1 h-50 card-img-top" alt=""></img>
                <p className="card-text"><button className="btn btn-outline-danger" onClick={dec}>-</button>{' ' + wishCount + ' '}<button className="btn btn-outline-success" onClick={inc}>+</button></p>
                <p className="card-text">Цена: {props.price}</p>
                <p className="card-text"><button className="btn btn-outline-success" onClick={()=>dispatch(getWishGood(props.name,wishCount,restOnStore,props.id))}>В корзину</button></p>
                <>{countError ?<p className="card-text">На складе нет такого количества товаров</p>:null}</>
            </div>
    )
}
export default Good