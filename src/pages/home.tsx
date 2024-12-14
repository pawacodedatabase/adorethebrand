import React from 'react';
import HeroSection from '../components/homeComponents/Hero';
import CategoryPage from '../components/homeComponents/Category';
import { products } from "../pages/Products/products";
import RandomProducts from './Products/RelatedProd';



const Home: React.FC = () => {
  return (
<>
<HeroSection/>
<CategoryPage products={products}/>
<RandomProducts/>


</>
  );
};

export default Home;
