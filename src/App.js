import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Dogs from './views/Dogs/Dogs';
import Dog from './views/Dog/Dog';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <h1>Dog Adoption</h1>
      <BrowserRouter>
        <header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dogs">Dogs</NavLink>
        </header>
        <Switch>
          <Route exact path="/dogs" component={Dogs} />
          <Route exact path="/dogs/:id" component={Dog} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
