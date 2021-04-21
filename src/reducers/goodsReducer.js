// Первичный Store для инициализиации приложения - пустой, далее будет заменен на ответ сервера

let initialState = {
    goods: 
    [
        {id:1, name:'Телевизор', count:10, price:100, img:'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/tv.svg'},
        {id:2, name:'Холодильник', count:5, price:70, img:'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/thermometer-cold.svg'},
        {id:3, name:'Машинка', count:50, price:5, img:'https://game-icons.net/icons/ffffff/000000/1x1/skoll/jeep.svg'},
        {id:4, name:'Кукла', count:15, price:10, img:'https://game-icons.net/icons/ffffff/000000/1x1/lorc/voodoo-doll.svg'},
        {id:5, name:'Платье', count:10, price:25, img:'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/travel-dress.svg'},
        {id:6, name:'Джинсы', count:10, price:25, img:'https://game-icons.net/icons/ffffff/000000/1x1/lorc/trousers.svg'},
        {id:7, name:'Балетки', count:15, price:7, img:'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/ballerina-shoes.svg'},
    ],
    cart: [],
    globalPrice:0
}

const goodsReducer =(state = initialState,action)=> {
    switch (action.type) {
        // получаем желаемые товары с корзины и возвращаем обнавленный store
        case 'GET_WISH_GOOD': {
            // находим индекс дубликатов на складе и в корзине
            const indexOfExistGoodCart = state.cart.findIndex(el => el.id === action.newId)
            const indexOfExistGoodStore = state.goods.findIndex(el => el.id === action.newId)
            // формируем новую корзину и склад
            const newCart = [...state.cart]
            const newGoods = [...state.goods]
            // ищем дублекат в корзине
                if (indexOfExistGoodCart > -1) {
                    // если есть дублекат то уменьшаем количество товаров на складе и увидличиваем количество товаров в корзине
                    return {
                        goods:newGoods.map((el,i) => 
                        { 
                            return i === indexOfExistGoodStore ? el.count -= action.wishCount : el 
                        }),
                        cart:newCart.map((el,i)=> {
                            return i === indexOfExistGoodCart ? el.count += action.wishCount : el
                        }),
                        ...state,
                        globalPrice:state.globalPrice + action.wishPrice
                    } 
                    // если дублеката нет то уменьшаем количетсво товаров на складе и добавляем товар в конец списка корзины
                } else {
                    return {
                        goods:newGoods.map((el,i) => { 
                            return i === indexOfExistGoodStore ? el.count -= action.wishCount : el 
                        }),
                        ...state,
                        cart:[...state.cart,{id:action.newId,name:action.wishName,count:action.wishCount,price:action.wishPrice}],
                        globalPrice:state.globalPrice + action.wishPrice
                    }  
                }
            } 
        // Удаляем товары из корзины           
        case 'REMOVE_WISH_GOOD': {
                return {
                    goods:state.goods.map((element) => {
                        return (element.id === action.returnId ? element.count = element.count + action.returnCount : element)
                    }),
                    ...state,
                    cart:[...state.cart.filter(element => element.name !== action.returnName)],
                    globalPrice:state.globalPrice - action.returnPrice
                }   
            }
        // Заполняем Stroe данными полученными с сервера
        case 'GET_ALL_LIST_GOODS': {
            return {
                ...state,
                goods:action.goodsList
            }
        }
        default:
            return state
    }
}


export default goodsReducer