import React from 'react';
import Hero from '../components/Hero';
import MostRatedAstrologer from '../components/MostRatedAstrologer';
import TodayArticles from '../components/TodayArticles';

const Home = () => {
  return (
    <div className="font-poppins">
      <Hero />
      <MostRatedAstrologer />
      <TodayArticles />
    </div>
  );
};

export default Home;
