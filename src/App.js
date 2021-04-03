
import './App.css';
import GoodsStore from './components/goodsStore';
import Korzina from './components/korzina';
import Magazine from './components/magazine';
import {BrowserRouter,NavLink,Route} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavLink to='/goodstore'>
          <Button>Склад</Button>
        </NavLink>
        <NavLink to='/magazine'>
          <Button>Магазин</Button>
        </NavLink>
        <NavLink to='/korzina'>
          <Button>Корзина</Button>
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
