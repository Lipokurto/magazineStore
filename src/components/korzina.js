import { useSelector } from "react-redux"

const Korzina =(props)=> {

    let wishListkorzina = useSelector(state => state.goodsReducer.korzina)
    let wishList = wishListkorzina.map((el)=> {
        return (
            <div>
                Товар: {el.name} Количество:{el.count}
            </div>
        )
    })
return (
    <div>
        тут корзина
        <div>
            {wishList}
        </div>
    </div>
)
}
export default Korzina