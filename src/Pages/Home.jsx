import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import FeaturedCrafts from "../Components/FeaturedCrafts";
import CraftCategories from "../Components/CraftCategories";
import WhyHandmade from "../Components/WhyHandmade";
import ArtisanSection from "../Components/Artisan";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />
      <Banner />
      <FeaturedCrafts />
      <CraftCategories />
       <WhyHandmade />
       <ArtisanSection />
       <Footer />
    </div>
  );
};

export default Home;