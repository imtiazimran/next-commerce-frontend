import CarouselHome from "@/components/ui/Homepage/Carousel";
import FlashSale from "@/components/ui/Homepage/FlashSale";
import Hero from "@/components/ui/Homepage/Hero";
import MostPopular from "@/components/ui/Homepage/MostPopular";
import TopCategories from "@/components/ui/Homepage/TopCategories";

const Home = () => {
    return (
        <div>
          <Hero/>
          <CarouselHome/>
          <FlashSale/>
          <TopCategories/>
          <MostPopular/>
        </div>
    );
};

export default Home;