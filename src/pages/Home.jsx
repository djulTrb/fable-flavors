import React from 'react';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import AmbianceGallery from '../components/AmbianceGallery';
import FeaturedDishes from '../components/FeaturedDishes';
import ReservationCTA from '../components/ReservationCTA';

const Home = () => {
    return (
        <div className="w-full">
            <Hero />
            <Philosophy />
            <AmbianceGallery />
            <FeaturedDishes />
            <ReservationCTA />
        </div>
    );
};

export default Home;
