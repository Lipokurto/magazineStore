export const getWishGood =(name,getWishGood,restOnStore,goodId) => {
    return {
        //передаем значения:
        // goodId (для поимки нужного товара в store), 
        // name (для отображения названия товара в корзин),
        // getWishGood(для количества желаемого товара), 
        // restOnStore (количество оставшегося товара на складе)
        type: 'GET_WISH_GOOD',
        newId:goodId,
        wishName:name,
        wishCount:getWishGood,
        restStore:restOnStore
    }
}

export const removeWishGood =(getId,WishCount)=> {
    return {
        type: 'REMOVE_WISH_GOOD',
        returnId:getId,
        returnCount:WishCount
    }
}