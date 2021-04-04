import React from 'react'
import { useSelector } from "react-redux"

// компонента для отрисовки скалада
const GoodsStore =(props)=> {

    let goods = useSelector(state => state.goods)
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
        <h1 className='alert alert-primary'>Склад</h1>
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