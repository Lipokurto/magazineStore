import React from 'react'
import { useSelector } from "react-redux"

const GoodsStore =(props)=> {
    let goods = useSelector(state => state.goodsReducer.goods)

    let goodsListElectro = goods.map((el)=> {
        return (
        <div>
            <div>
                {el.name} {el.price} {el.count}
            </div>
        </div>
    )})

return (
    <div>
        <label>Склад</label>
        {goodsListElectro}
    </div>
)
}
export default GoodsStore