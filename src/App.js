
import './App.css';
import GoodsStore from './components/goodsStore';
import Korzina from './components/korzina';
import Magazine from './components/magazine';
import {BrowserRouter,NavLink,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import {getAllListGoods} from './actions/index'

function App() {

  let dispatch = useDispatch()
  // используем axios для отправки get запроса на сервер и получения JSON ответа для первичного заполнения Store 
  useEffect(()=> {
    axios.get('http://localhost:3006/goods').then((res)=> {
      dispatch(getAllListGoods(res.data))
    })
  },[])

  return (
    <BrowserRouter>
      <div className="App">
      <div className="btn-group" role="group">
        <NavLink to='/goodstore'>
          <button className='btn btn-outline-secondary'>Склад</button>
        </NavLink>
        <NavLink to='/magazine'>
          <button className='btn btn-outline-secondary'>Магазин</button>
        </NavLink>
        <NavLink to='/korzina'>
          <button className='btn btn-outline-secondary'>Корзина</button>
        </NavLink>
        </div>
        <Route path='/goodstore'>
          <GoodsStore />
        </Route>
        <Route path='/magazine'>
          <Magazine />
        </Route>
        <Route path='/korzina'>
          <Korzina />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
