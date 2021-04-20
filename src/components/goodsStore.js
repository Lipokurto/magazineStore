import React, { useMemo } from 'react'
import { useSelector } from "react-redux"

// компонента для отрисовки скалада
const GoodsStore =()=> {

    let goods = useSelector(state => state.goods)
    let goodsListElectro = useMemo(()=> goods.map((el,i)=> 
        (
            <tr key={el.id}>
                <th scope="row">{i+1}</th>
                <td>{el.name}</td>
                <td>{el.count + ' шт.'} </td>
                <td>{el.price + ' $'}</td>
            </tr>

    )),[goods])

return (
    <div className='text-center'>
        <table className="table table-hover">
            <thead className='border-bottom'>
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