import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Dogs from './views/Dogs/Dogs';
import Dog from './views/Dog/Dog';
import Header from './views/Header/Header';
import Admin from './views/Admin/Admin';
import Edit from './views/Edit/Edit';

function App() {
  return (
    <div className="App">
      <h1>Dog Adoption</h1>
      <BrowserRouter>
        <header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dogs">Dogs</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </header>
        <Switch>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/dogs">
            <Dogs />
          </Route>
          <Route exact path="/dogs/:id">
            <Dog />
          </Route>
          <Route exact path="/dogs/:id/edit">
            <Edit />
          </Route>
          <Route exact path="/">
            <Header />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
// test
export default App;
