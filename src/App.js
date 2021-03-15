import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Menu from './components/menu/menu';
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
