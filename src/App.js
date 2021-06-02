import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import itemCount from './components/ItemCount';
//import itemListContainer from './components/itemListContainer';
//import itemListDetail from './components/itemListDetail';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route exact path="/itemListContainer">
                <itemListContiner />
            </Route>
          </Switch>
      </BrowserRouter>
      <h1>¡Bienvenido!</h1>
      <h2>a la Tienda de Equipos Liberados Entel</h2>
      <itemCount stock='5' initial='1' />
    </>
  )
}

export default App;
