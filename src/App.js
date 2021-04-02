
import './App.css';
import GoodsStore from './components/goodsStore';
import Korzina from './components/korzina';
import Magazine from './components/magazine';
import {BrowserRouter,NavLink,Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavLink to='/goodstore'>
          <button>Склад</button>
        </NavLink>
        <NavLink to='/magazine'>
          <button>Магазин</button>
        </NavLink>
        <NavLink to='/korzina'>
          <button>Корзина</button>
        </NavLink>
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
