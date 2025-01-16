import Image from "next/image";
import { Card, Carousel } from "../apple-cards-carousel";

const CarouselHome = () => {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} layout={true} index={index} />
    ));
    return (
        <div>
            <Carousel items={cards} />
        </div>
    );
};

export default CarouselHome;


const data = [
  {
    category: "Smartphones",
    title: "Explore the latest iPhone 15 Pro Max.",
    src: "https://cdn.mockupnest.com/wp-content/uploads/edd/2024/02/01-Samsung-Galaxy-S24-Ultra-Mockup.jpg?class=large",
    content: (
      <div
        key={"dummy-content-0"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            The future is here with the iPhone 15 Pro Max.
          </span>{" "}
          Experience the unmatched power of the iPhone 15 Pro Max with its
          advanced A17 chip, a stunning 120Hz OLED display, and a professional
          camera system built for innovation.
        </p>
        <Image
          src="https://cellphonehub.co.uk/wp-content/uploads/2024/07/S24-Ultra.png"
          alt="iPhone 15 Pro Max"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },
  {
    category: "Wearables",
    title: "Smartwatches to keep you connected.",
    src: "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039303.jpg?t=st=1737055721~exp=1737059321~hmac=8e467d31e6cbb7f644f2370303b4ed96830c85cd419bd13b9ceacc9ec7360404&w=740",
    content: (
      <div
        key={"dummy-content-1"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Stay ahead with the latest wearables.
          </span>{" "}
          From fitness tracking to seamless notifications, our smartwatches are
          the perfect companions for your modern lifestyle.
        </p>
        <Image
          src="https://5.imimg.com/data5/SELLER/Default/2023/3/294180629/DD/UI/DB/35510924/realme-watch-2-left-side-500x500.png"
          alt="Smartwatch"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },
  {
    category: "Laptops",
    title: "Powerful laptops for work and play.",
    src: "https://img.freepik.com/free-photo/laptop-mobile-phone-dark-background-3d-rendering_1142-38685.jpg?t=st=1737055931~exp=1737059531~hmac=2d22bf09be20bab5b0cf71fee7928767949f08354b51ac315f1be1fb474393fc&w=740",
    content: (
      <div
        key={"dummy-content-2"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Work smarter, play harder with our latest laptops.
          </span>{" "}
          Featuring powerful processors and sleek designs, these laptops are
          perfect for work, gaming, and everything in between.
        </p>
        <Image
          src="https://assets.aceternity.com/macbook.png"
          alt="Laptop"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ),
  },
  // Repeat similar structure for "Audio," "Accessories," and "Gaming."
];
