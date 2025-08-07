import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedCourses from '../components/FeaturedCourses';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CareerPaths from '../components/CareerPaths';
import Pricing from '../components/Pricing';
import TrustIndicators from '../components/TrustIndicators';
import MobileApp from '../components/MobileApp';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <Categories />
        <FeaturedCourses />
        <WhyChooseUs />
        <CareerPaths />
        <Testimonials />
        <Pricing />
        <MobileApp />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;