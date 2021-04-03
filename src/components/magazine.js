
import {  useSelector } from "react-redux"
import Good from "./Good"
import { Card} from 'react-bootstrap'
const Magazine =(props)=> {
    let magazineGoods = useSelector(state =>state.goodsReducer.goods)
    

    //оболочка для вывода всех товаров в магазине
    let goodsListMagazin = magazineGoods.map((el) => {
        return (
            <Card>
                <Good name={el.name} price={el.price} id={el.id} count={el.count}/>
            </Card>
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