import Container from "@/utils/Container";
import SectionTitle from "../SectionTitle";
import { DirectionAwareHover } from "../direction-aware-hover";
import AllProducts from "@/utils/AllProducts";
import Link from "next/link";
import { Product } from "@/types";

const FlashSale = async () => {
  const products = await AllProducts()
  return (
    <div className=" bg-slate-100">
    <Container className="py-10 ">
      <SectionTitle title="Flash Sale" button="View All" to={"/product"} />
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {
          products?.slice(0,4).map((product : Product) => {
            return (
              <Link href={`/product/${product.id}`} key={product.id}>
              <DirectionAwareHover className="h-80"  imageUrl={product?.images[0]}>
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

export default FlashSale;

