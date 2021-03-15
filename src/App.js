import './App.css';
import Header from './pages/header/header';
import Home from './pages/home/home';
import About from './pages/about/about';
import Menu from './pages/menu/menu';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <div id="body">
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route exact path={'/about'}>
            <About />
          </Route>
          <Route exact path={'/menu'}>
            <Menu />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
