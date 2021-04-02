
import {  useSelector } from "react-redux"
import Good from "./Good"

const Magazine =(props)=> {
    let magazineGoods = useSelector(state =>state.goodsReducer.goods)
    

    //оболочка для вывода всех товаров в магазине
    let goodsListMagazin = magazineGoods.map((el) => {
        return (
            <div>
                <Good name={el.name} price={el.price} id={el.id} count={el.count}/>
            </div>
        )
    })

    return (
        <div>
            <label>Магазин</label>
            {goodsListMagazin}
        </div>
    )
}
export default Magazine