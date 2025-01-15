import Container from "@/utils/Container";
import Image from "next/image";
import logo from "@/assests/nextCommerceLogo.png"
const Navbar = () => {
  return (
    <Container className="border flex justify-between items-center">
      <div>
        <Image src={logo} width={100} height={100} alt="logo" />
      </div>
      <div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>categories</li>
          <li>Products</li>
          <li>Flash Sale</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;