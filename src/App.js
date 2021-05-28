import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Equipments from './components/Products/Equipments/Equipments';
import Accesories from './components/Products/Accesories/Accessories';
import CartButton from './components/Buttons/CartButton/CartButton';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route exact path="/equipments">
                <Equipments />
            </Route>
            <Route exact path="/accesories">
                <Accesories />
            </Route>
            <Route exact path="/cart">
              <Cart/>
            </Route>
          </Switch>
      </BrowserRouter>
      <CartButton />
      <Equipments stock='20' initial='1'/>
      <Accesories stock='20' initial='1'/>
    </>
  )
}

export default App;
