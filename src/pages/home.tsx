import React from 'react';
import HeroSection from '../components/homeComponents/Hero';
// import CategoryPage from '../components/homeComponents/Category';

// import RandomProducts from './Products/RelatedProd';
import BlogBanner from './Blog/blogBanner';
import FeaturedBlog from './Blog/featuredBlog';
import RelatedShop from './Backend/relatedshop';



const Home: React.FC = () => {
  return (
<>
<HeroSection/>

<RelatedShop/>
{/* <RandomProducts/> */}
<FeaturedBlog/>
<BlogBanner/>


</>
  );
};

export default Home;
