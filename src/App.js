
import './App.css';
import GoodsStore from './components/goodsStore';
import Korzina from './components/korzina';
import Magazine from './components/magazine';
import {BrowserRouter,NavLink,Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

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
        <Route exact path='/goodstore'>
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
