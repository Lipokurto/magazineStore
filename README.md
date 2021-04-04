Репозиторий расположен в открытом доступе по адресу https://github.com/Lipokurto/magazineStore

Автор Alex Sin 

Magazin => Client part

ReactJs + Redax

Обращение к серверу: axios

Стили: Bootstrap


Используемые хуки:

useSelector - для обращение к отдельным элементам Store

useState - для работы с локальным State компоненты

useEffect - для обращения первого запрос на сервер при отрисовки приложения


Использовались actions:

GET_WISH_GOOD - для добавления товара в корзину и одновременного удлаления товара со склада

REMOVE_WISH_GOOD - для удаления товара из корзины

GET_ALL_LIST_GOODS - первичный запрос на сервер


Картинки подтягиваются прямыми ссылками с ресурса https://game-icons.net/


Для имитации отклика с сервера использовался репозиторий json-server: https://github.com/typicode/json-server

Для запсука сервера:
1. Перейдите в папку server-api
2. Установите json-server: npm i --save json-server
3. В файле package.json измените значение ключа Script по примеру:

  "scripts": {

    "start":"json-server -p 3006 -w db.json"

  },

  Параметр start созхраняет данные: 

    что будет запущено (json-server)

    на каком порут будет запущено: (-p 3006 т.е. в нашем случае на 3006)

    в какому афле хранится отклик(-w db.json)

    файл db.json должен лежать в той же папке что и package.json
    
4. Запустите сервер: npm start
