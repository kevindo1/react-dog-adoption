import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Dogs from './views/Dogs/Dogs';
import Dog from './views/Dog/Dog';
import Header from './views/Header/Header';

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
          <Route exact path="/dogs">
            <Dogs />
          </Route>
          <Route exact path="/dogs/:id">
            <Dog />
          </Route>
          <Route exact path="/">
            <Header />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
