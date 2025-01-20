
import CarouselHome from "./Carousel";

const Hero = () => {
    return (
        <div className=" hero flex justify-center items-center bg-[#111827]">
            <div className="md:pt-20 p-5 pb-0">
                <h1 className="text-3xl md:text-5xl text-center text-white">Next-Commerce: Your One-Stop Gadget Hub</h1>
                <p className="text-center text-slate-900">Explore the latest tech, cutting-edge gadgets, and must-have accessories—all at unbeatable prices. Upgrade your world today!</p>
            <CarouselHome/>
            </div>  
        </div>
    );
};

export default Hero;