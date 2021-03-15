import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="logo" />
          </Link>
        </div>
      </div>
      <div id="body">body section</div>
    </div>
  );
}

export default App;
