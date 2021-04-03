
let initialState = {
    goods: [
            {id:1,name:'Телевизор',count:10,price:100},
            {id:2,name:'Холодильник',count:5,price:70},
            {id:3,name:'Машинка',count: 50,price: 5},
            {id:4,name:'Кукла',count: 15,price:10},
            {id:5,name:'Платье',count: 10,price: 25},
            {id:6,name:'Джинсы',count: 10,price: 25},
            {id:7,name:'Балетки',count: 15,price: 7},
        ],
    korzina: []              
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
                        korzina:[...state.korzina,{id:action.newId,name:action.wishName,count:action.wishCount}]
                        }
                    } else {
                        findDouble.count += action.wishCount
                        return {
                            goods:[state.goods.map((element) => {
                                return (element.id === action.newId ? element.count -= action.wishCount  : element)
                            })], 
                            ...state,
                            korzina:[...state.korzina.filter(el => el.id !== action.newId).concat(findDouble)]
                            }  
                    }
                }

            
        case 'REMOVE_WISH_GOOD': {
                return {
                    goods:[state.goods.map((element) => {
                        return (element.id === action.returnId ? element.count = element.count + action.returnCount : element)
                    })],
                    ...state,
                    korzina:[...state.korzina.filter(element => element.id !== action.returnId && element.count !== action.returnCount)]
                }
            }
        default:
            return state
    }
}
export default goodsReducer