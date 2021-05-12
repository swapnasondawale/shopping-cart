import './App.css';
// import HomeContainer from '../containers/HomeContainer/HomeContainer'
import CartContainer from '../containers/CartContainer/CartContainer'
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <CartContainer/>
      <Home  />
     
    </div>
  );
}

export default App;
