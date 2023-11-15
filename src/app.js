import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Reservation from './components/Reservation';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/reservation" component={Reservation} />
        {/* Agrega más rutas según sea necesario */}
      </Switch>
    </Router>
  );
}

export default App;