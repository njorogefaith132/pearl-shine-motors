import './App.css';
import Navbar from './components/Navbar';
import BodyCarousel from './components/BodyCarousel';
import FilterBar from './components/FilterBar';
import CarListings from './components/CarListings';


function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="body-content">
        <BodyCarousel />
        <FilterBar />
        <CarListings />
      </div>
    </div>
  );
}

export default App;
