import { useMemo } from "react"
import {   useSelector } from "react-redux"

import Good from "./Good"


// Компонента для отрисовки всего магазина
const Magazine =(props)=> {
    //оболочка для вывода всех товаров в магазине
    let magazineGoods = useSelector(state =>state.goods)
    
    let goodsListMagazin = useMemo(()=> magazineGoods.map((el,i) => (
                <Good
                    key={el.id}
                    name={el.name} 
                    price={el.price} 
                    id={el.id} 
                    count={el.count} 
                    img={el.img}
                    />
        )
    ),[magazineGoods])

    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-5">
                {goodsListMagazin}
            </div>
        </div>
    )
}
export default Magazine