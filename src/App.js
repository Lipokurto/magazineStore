import './App.css';
import GoodsStore from './components/goodsStore';
// import Korzina from './components/korzina';
import Magazine from './components/magazine';
import {BrowserRouter,NavLink,Redirect,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import {getAllListGoods} from './actions/index'
import LIlKorzina from './components/LilKorzina';

function App() {
  // проверка на наличии товаров в корзине
  const isEmptyKorzina = useSelector(state =>state.korzina)

  let dispatch = useDispatch()
  // используем axios для отправки get запроса на сервер и получения JSON ответа для первичного заполнения Store 
  useEffect(()=> {
    axios.get('http://localhost:3006/goods').then((res)=> {
      dispatch(getAllListGoods(res.data))
    })
  },[dispatch])

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
        {isEmptyKorzina.length !== 0 ? <LIlKorzina className='text-right'/> : null}
        </div>
        <Route exact path='/goodstore'><GoodsStore /></Route>
        <Route exact path='/magazine'><Magazine /></Route>
        <Redirect to="/magazine" />
      </div>
    </BrowserRouter>
  );
}

export default App;