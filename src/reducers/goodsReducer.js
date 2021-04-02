let initialState = {
    goods: [
            {id:1,name:'Телевизор',count:10,price:100},
            {id:2,name:'Холодильник',count:5,price:70},
            {id:3,name:'Машинка',count: 50,price: 5},
            {id:4,name:'Кукла',count: 15,price:10},
            {id:5,name:'Платье',count: 10,price: 25},
            {id:6,name:'Джинсы',count: 10,price: 25}
        ],
    korzina: []              
}


const goodsReducer =(state = initialState,action)=> {
    switch (action.type) {
        case 'GET_WISH_GOOD': {
                return {
                    goods:[state.goods.map((element) => {
                        return (element.id === action.newId ? element.count = action.restStore : element)
                    })],
                    ...state,
                    korzina:[...state.korzina,{id:action.newId,name:action.wishName,count:action.wishCount}],
                }
        }
        default:
            return state
    }
}
export default goodsReducer