import React from 'react';
import BodyCarousel from './BodyCarousel';
import FilterBar from './FilterBar';
import CarListings from './CarListings';

function Home() {
  return (
    <div> 
      <BodyCarousel />
      <FilterBar />
      <CarListings />
    </div>
  )
}

export default Home;
