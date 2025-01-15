import Container from "@/utils/Container";

const Hero = () => {
    return (
        <Container className=" flex justify-center items-center">
            <div className="p-20">
                <h1 className="text-5xl text-center">Next-Commerce: Your One-Stop Gadget Hub</h1>
                <p className="text-center text-slate-900">Explore the latest tech, cutting-edge gadgets, and must-have accessories—all at unbeatable prices. Upgrade your world today!</p>
            </div>  
        </Container>
    );
};

export default Hero;