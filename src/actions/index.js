export const getWishGood =(name,getWishGood,restOnStore,goodId,wishPrice) => {
    return {
        //передаем значения:
        // goodId (для поимки нужного товара в store), 
        // name (для отображения названия товара в корзин),
        // getWishGood(для количества желаемого товара), 
        // restOnStore (количество оставшегося товара на складе)
        // wishPrice (цена заказа)
        type: 'GET_WISH_GOOD',
        newId:goodId,
        wishName:name,
        wishCount:getWishGood,
        restStore:restOnStore,
        wishPrice:wishPrice
    }
}

export const removeWishGood =(getId,WishCount,returnPrice,returnName)=> {
    return {
        type: 'REMOVE_WISH_GOOD',
        returnId:getId,
        returnCount:WishCount,
        returnPrice,
        returnName
    }
}