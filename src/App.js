// import { useEffect } from 'react';
import {BrowserRouter,NavLink,Redirect,Route} from 'react-router-dom'
import {  useSelector } from 'react-redux';
// import axios from 'axios'

// import {getAllListGoods} from './actions/index'

import Magazine from './components/magazine';
import GoodsStore from './components/goodsStore';
import Cart from './components/Cart';

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css';


function App() {
  // проверка на наличии товаров в корзине
  const isEmptyCart = useSelector(state =>state.cart)

  // let dispatch = useDispatch()
  // // используем axios для отправки get запроса на сервер и получения JSON ответа для первичного заполнения Store 
  // useEffect(()=> {
  //   axios.get('http://localhost:3006/goods').then((res)=> {
  //     dispatch(getAllListGoods(res.data))
  //   })
  // },[dispatch])

  return (
    <BrowserRouter>
      <div className="App">
      <div className="btn-group" role="group">
        <NavLink to='/goodstore'>
          <button className='btn btn-outline-secondary'><img src='https://icons.getbootstrap.com/assets/icons/archive.svg' alt=''/> Склад</button>
        </NavLink>
        <NavLink exact to='/magazine'>
          <button className='btn btn-outline-secondary'><img src='https://icons.getbootstrap.com/assets/icons/check2-square.svg' alt=''/> Магазин</button>
        </NavLink>
        {/* Если товаров в корзине нет - не показыывать значок корзины */}
        {isEmptyCart.length !== 0 ? <Cart /> : null}
        </div>
        <Route exact path='/goodstore'><GoodsStore /></Route>
        <Route exact path='/magazine'><Magazine /></Route>
        <Redirect to="/magazine" />
      </div>
    </BrowserRouter>
  );
}

export default App;