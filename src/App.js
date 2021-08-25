import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart'
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div> 
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>


    </div>
  );
}

export default App;
