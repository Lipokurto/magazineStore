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
//Удаляем из корзины, передаем значения:
// WishCount - нужендля возврата количества на склад
// returnPrice - нужен для рассчета остатка суммы после удаления товара
// returnName - нужен для поиска по ID
export const removeWishGood =(returnCount,returnPrice,returnName,returnId)=> {
    return {
        type: 'REMOVE_WISH_GOOD',
        returnId,
        returnCount,
        returnPrice,
        returnName
    }
}

// Первичный запрос листа товаров для создания Store
// goodsList - полученный лист товаров
export const getAllListGoods =(goodsList)=> {
    return {
        type:'GET_ALL_LIST_GOODS',
        goodsList
    }
}