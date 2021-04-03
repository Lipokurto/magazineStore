import React from 'react'
import { useSelector } from "react-redux"

const GoodsStore =(props)=> {
    let goods = useSelector(state => state.goodsReducer.goods)

    let goodsListElectro = goods.map((el,i)=> {
        return (
            <tr>
                <th scope="row">{i+1}</th>
                <td>{el.name}</td>
                <td>{el.count} </td>
                <td>{el.price}</td>
            </tr>

    )})

return (
    <div>
        <h1>Склад</h1>
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Товар</th>
                <th scope="col">Количество</th>
                <th scope="col">Цена</th>
                </tr>
            </thead>
            <tbody>
            {goodsListElectro}
            </tbody>
        </table>
    </div>
)
}
export default GoodsStore