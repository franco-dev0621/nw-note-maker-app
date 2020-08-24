import React from 'react';
import './App.css';
import Main from './components/Main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Appff from './components/mainComponents/Appff';
import Rently from './components/mainComponents/Rently';
import Showmojo from './components/mainComponents/Showmojo';
import TT from './components/mainComponents/TT';

function App() {
  return (
    <BrowserRouter>
    <div>      
      <Main />
    <Switch>
    <Route path="/appff" component={Appff}/>
    <Route path="/rently" component={Rently}/>
    <Route path="/showmojo" component={Showmojo}/>
    <Route path="/tt" component={TT}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
