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
      <itemCount stock='5' initial='1' />
    </>
  )
}

export default App;
