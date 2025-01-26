
import Container from "@/utils/Container";
import SectionTitle from "../SectionTitle";
import { DirectionAwareHover } from "../direction-aware-hover";
import AllProducts, { Product } from "@/utils/AllProducts";
import Link from "next/link";



const MostPopular = async () => {
  const products = await AllProducts()
  return (
    <div className=" bg-slate-100">
      <Container className="py-10">
        <SectionTitle
          title="Most Popular Products"
          subtitle="Explore our most populer products you'll find so many exiting products here"
          button="View All"
          to={"/product"}
        />
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {
            products?.map((product: Product) => {
              return (
                <Link href={`/product/${product.id}`} key={product.id} >
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

export default MostPopular;

