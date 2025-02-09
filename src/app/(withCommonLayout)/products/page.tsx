import Container from "@/utils/Container";
import AllProducts from "@/utils/AllProducts";
import Link from "next/link";
import { Product } from "@/types";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import RichText from "@/components/ui/RichText";
import AllProductSidebar from "@/components/ui/AllProductSidebar";

const Prouducts = async () => {
  const products = await AllProducts()
  return (
    <div className=" grid grid-cols-[1fr] max-w-7xl mx-auto gap-5 relative ">
      <AllProductSidebar />
      <Container className="py-10 ">
        <RichText alignment="left" subtitle="Showing 1–12 of 24 item(s)" title="Our Collection Of Products" />
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {
            products?.map((product: Product) => {
              return (
                <Link href={`/product/${product.id}`} key={product.id}>
                  <DirectionAwareHover className="h-80" imageUrl={product?.images[0]}>
                    <p className="font-bold text-xl">{product.name ?? product.name}</p>
                    <p className="font-normal text-sm">${product.price ?? product.price}</p>
                  </DirectionAwareHover>
                </Link>
              );
            })
          }
        </div>
      </Container>


    </div>
  );
};

export default Prouducts;

