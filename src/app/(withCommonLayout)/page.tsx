import CarouselHome from "@/components/ui/Homepage/Carousel";
import FlashSale from "@/components/ui/Homepage/FlashSale";
import Hero from "@/components/ui/Homepage/Hero";

const Home = () => {
    return (
        <div>
          <Hero/>
          <CarouselHome/>
          <FlashSale/>
        </div>
    );
};

export default Home;