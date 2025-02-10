import Container from "@/utils/Container";
import AllProducts from "@/utils/AllProducts";
import Link from "next/link";
import { Product } from "@/types";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import RichText from "@/components/ui/RichText";
import AllProductSidebar from "@/components/ui/AllProductSidebar";
const Prouducts = async () => {
  const products = await AllProducts();

  return (
    <div className="relative max-w-7xl mx-auto flex gap-5">
      {/* Sidebar (Now handles its own state) */}
      <AllProductSidebar />

      {/* Product List - Adjust margin for sidebar */}
      <Container className="flex-1 py-10 md:ml-[300px]">
        <RichText alignment="left" subtitle="Showing 1–12 of 24 item(s)" title="Our Collection Of Products" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products?.map((product : Product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <DirectionAwareHover className="h-80" imageUrl={product?.images[0]}>
                <p className="font-bold text-xl">{product.name ?? product.name}</p>
                <p className="font-normal text-sm">${product.price ?? product.price}</p>
              </DirectionAwareHover>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Prouducts;


