import { useState, useEffect, useMemo, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"

import {getWishGood} from '../actions/index'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const Good =(props)=> {
    let dispatch = useDispatch()
    const [wishCount,setWishCount] = useState(0)
    const [countError,setCountError] = useState(false)
    const [wishPrice,setWishPrice] = useState(0)
    const storeRest = useSelector(state => state.goods)
    //повышение и понижение количества товаров
    const inc =useCallback(()=> {
        setWishCount(wishCount + 1)
        },[wishCount])
    //Добавляем проверку на равность нулю что б количество не падало меньше нуля 
    const dec = useCallback(()=> {
        if(wishCount !== 0) {
            setWishCount(wishCount - 1)}
        },[wishCount])
    // =========== console.log(props.key) почему key undefined???

    //Считаем сколько осталось в магазине (остаток рассчитывается тут что б при отпарвке товара в корзимну происходила проверка на наличие нужного количества товара на складе)
    // Обращение через useMemo что б запускать поиск только в случае изменения депс
    let restOnStore = useMemo(()=>storeRest.find(el =>el.id === props.id).count - wishCount,[storeRest,props.id,wishCount])

    //добавляем проверку наличия достаточного количества товара на складе
    //===========забыл что тут оптимизировать
    useEffect(()=> {
            ((restOnStore) < 0) ? setCountError(true) : setCountError(false)
    },[wishCount,restOnStore])
    
    //перекидываем в локальный стейт общую стоимость заказа
    useEffect(()=> {
        setWishPrice(props.price * wishCount)
    },[wishCount,props.price])

    //Вызываем диспатч и обнуляем счетчик желаемого количестве товара
    const giveFinal = useCallback(()=> {
        dispatch(getWishGood(props.name,wishCount,restOnStore,props.id,wishPrice))
        setWishCount(0)
    },[dispatch,wishPrice,props.name,wishCount,restOnStore,props.id])

    return (
        <div className='p-3 w-500 text-center' >
            <div className='col-sm-12'>
                <div className="card h-150 w-200 p-3 border border-success rounded-3">
                    <h3 className="card-title">{props.name}</h3>
                    <img src={props.img} className="rounded" alt="" />
                    <h5 className="card-text">Цена: {props.price  + ' $'}</h5>
                    <p className="card-text"><button className="btn btn-outline-danger" onClick={dec}>-</button>{' ' + wishCount + ' '}<button className="btn btn-outline-success" onClick={inc}>+</button></p>
                    <p className="card-text">Цена заказа: {wishPrice + ' $'}</p>
                    <>{countError 
                        ? <p className="card-text">На складе нет такого количества товаров</p>
                        : <p className="card-text">
                            {/* Если количество желаемого товара = 0 то кнопка отключена ======= не понял как добавить свойства кнопки без дублирвоания кода */}
                            {wishCount !== 0 
                            ? <button type="button" className="btn btn-outline-success" onClick={()=>giveFinal()}>В корзину</button> 
                            :   <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Укажите количество товара</Tooltip>}>
                                    <span className="d-inline-block">
                                        <button type="button" className="btn btn-outline-success" disabled style={{ pointerEvents: 'none' }}>В корзину</button>
                                    </span>
                                </OverlayTrigger>
                            }
                            </p>
                    }</>
                </div>
            </div>
        </div>
    )
}
export default Good