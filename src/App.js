import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Dogs from './views/Dogs/Dogs';
import Dog from './views/Dog/Dog';

function App() {
  return (
    <div className="App">
      <h1>Dog Adoption</h1>
      <BrowserRouter>
        <header>
          <NavLink to="/dogs">Home</NavLink>
        </header>
        <Switch>
          <Route exact path="/dogs">
            <Dogs />
          </Route>
          <Route exact path="/dogs/:id">
            <Dog />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
