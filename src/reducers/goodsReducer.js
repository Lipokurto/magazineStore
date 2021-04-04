import tv from '../img/01_TV.jpg'
import freeze from '../img/02_freeze.jpg'
import car from '../img/03_car.jpg'
import dall from '../img/04_dall.jpg'
import dress from '../img/05_dress.jpg'
import jeanse from '../img/06_jeanse.jpg'
import baletki from '../img/07_baletki.jpg'


let initialState = {
    goods: [
            {id:1, name:'Телевизор', count:10, price:100, img:tv},
            {id:2, name:'Холодильник', count:5, price:70, img:freeze},
            {id:3, name:'Машинка', count:50, price:5, img:car},
            {id:4, name:'Кукла', count:15, price:10, img:dall},
            {id:5, name:'Платье', count:10, price:25, img:dress},
            {id:6, name:'Джинсы', count:10, price:25, img:jeanse},
            {id:7, name:'Балетки', count:15, price:7, img:baletki},
        ],
    korzina: [],
    globalPrice:0
}


const goodsReducer =(state = initialState,action)=> {
    switch (action.type) {
        case 'GET_WISH_GOOD': {
            const findDouble = state.korzina.find(el => el.id === action.newId)
            const booDouble = state.korzina.some(el => el.id === action.newId)
            if (!booDouble) {
                return {
                    goods:[state.goods.map((element) => {
                        return (element.id === action.newId ? element.count = action.restStore : element)
                        })], 
                        ...state,
                        korzina:[...state.korzina,{id:action.newId,name:action.wishName,count:action.wishCount,price:action.wishPrice}],
                        globalPrice:state.globalPrice + action.wishPrice
                        }
                    } else {
                    findDouble.count += action.wishCount
                    findDouble.price += action.wishPrice
                    return {
                        goods:[state.goods.map((element) => {
                            return (element.id === action.newId ? (element.count -= action.wishCount) : element)
                        })], 
                        ...state,
                        korzina:[...state.korzina.filter(el => el.id !== action.newId).concat(findDouble)],
                        globalPrice:state.globalPrice + action.wishPrice

                        }  
                    }
                }

            
        case 'REMOVE_WISH_GOOD': {
                return {
                    goods:[state.goods.map((element) => {
                        return (element.id === action.returnId ? element.count = element.count + action.returnCount : element)
                    })],
                    ...state,
                    korzina:[...state.korzina.filter(element => element.name !== action.returnName)],
                    globalPrice:state.globalPrice - action.returnPrice
                }   
            }
        default:
            return state
    }
}
export default goodsReducer