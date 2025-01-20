
import FlashSale from "@/components/ui/Homepage/FlashSale";
import Hero from "@/components/ui/Homepage/Hero";
import MostPopular from "@/components/ui/Homepage/MostPopular";
import Partnars from "@/components/ui/Homepage/Partnars";
import TopCategories from "@/components/ui/Homepage/TopCategories";

const Home = () => {
    return (
        <div>
          <Hero/>
          <FlashSale/>
          <TopCategories/>
          <MostPopular/>
          <Partnars/>
        </div>
    );
};

export default Home;