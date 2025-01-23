import Container from "@/utils/Container";
import SectionTitle from "../SectionTitle";
import { DirectionAwareHover } from "../direction-aware-hover";

const FlashSale = () => {
  return (
    <div className=" bg-slate-100">
    <Container className="py-10 ">
      <SectionTitle title="Flash Sale" button="View All" to={"/viewAll"} />
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {
          products?.slice(0,4).map((product) => {
            return (
              <DirectionAwareHover className="h-80" key={product.id} imageUrl={product.image}>
                <p className="font-bold text-xl">{product.name ?? product.name}</p>
                <p className="font-normal text-sm">${product.price ?? product.price}</p>
              </DirectionAwareHover>
            );
          })
        }
      </div>
    </Container>

    </div>
  );
};

export default FlashSale;

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "Smartphones",
    price: 1499,
    description: "The latest iPhone with an A17 chip and a stunning 120Hz OLED display.",
    image: "https://i.ibb.co.com/M54mbwr/blue-modern-smartphone-instagram-post-1.png",
    quantity: 20,
    rating: 4.8,
    reviews: 125,
  },
  {
    id: 2,
    name: "Apple Watch Ultra 2",
    category: "Wearables",
    price: 899,
    description: "A rugged and feature-rich smartwatch for outdoor adventures.",
    image: "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039303.jpg",
    quantity: 35,
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 3,
    name: "MacBook Pro 16-inch",
    category: "Laptops",
    price: 2799,
    description: "High-performance laptop with M3 Pro chip for creators and professionals.",
    image: "https://img.freepik.com/free-photo/laptop-mobile-phone-dark-background-3d-rendering_1142-38685.jpg",
    quantity: 15,
    rating: 4.9,
    reviews: 154,
  },
  {
    id: 4,
    name: "Sony WH-1000XM5 Headphones",
    category: "Audio",
    price: 399,
    description: "Premium noise-canceling headphones for immersive sound experiences.",
    image: "https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072186.jpg",
    quantity: 50,
    rating: 4.6,
    reviews: 112,
  },
  {
    id: 5,
    name: "Logitech MX Master 3S Mouse",
    category: "Accessories",
    price: 99,
    description: "Ergonomic and precise wireless mouse for productivity.",
    image: "https://images.pexels.com/photos/3981749/pexels-photo-3981749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quantity: 60,
    rating: 4.5,
    reviews: 87,
  },
  {
    id: 6,
    name: "PlayStation 5 Console",
    category: "Gaming",
    price: 499,
    description: "Next-generation gaming console with stunning 4K graphics and lightning-fast load times.",
    image: "https://images.pexels.com/photos/7862350/pexels-photo-7862350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quantity: 10,
    rating: 4.9,
    reviews: 234,
  },
];
