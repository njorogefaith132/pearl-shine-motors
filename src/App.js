import './App.css';
import Navbar from './components/Navbar';
import BodyCarousel from './components/BodyCarousel';
import FilterBar from './components/FilterBar';
import CarListings from './components/CarListings';


function App() {
  return (
    <div>
      <Navbar />
      <BodyCarousel />
      <FilterBar />
      <CarListings />
    </div>
  );
}

export default App;
