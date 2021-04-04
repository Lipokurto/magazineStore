import {   useSelector } from "react-redux"
import Good from "./Good"

// Компонента для отрисовки всего магазина
const Magazine =(props)=> {
    //оболочка для вывода всех товаров в магазине
    let magazineGoods = useSelector(state =>state.goods)
    
    let goodsListMagazin = magazineGoods.map((el) => {
        return (
            <>
                <Good 
                    name={el.name} 
                    price={el.price} 
                    id={el.id} 
                    count={el.count} 
                    img={el.img}
                    />
            </>
        )
    })

    return (
        <div>
            <h1>Магазин</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {goodsListMagazin}
            </div>
        </div>
    )
}
export default Magazine