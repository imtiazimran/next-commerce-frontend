
import SwiperComponent from '@/lib/SwiperJs';
import AllProducts, { Product } from '@/utils/AllProducts';
import Breadcumb from '@/utils/Breadcumb';
import Container from '@/utils/Container';
import { Star } from 'lucide-react';



interface Params {
  productId: string;
}

const ProductPage = async ({ params }: { params: Promise<Params> }) => {
  const { productId } = await params;
  const data = await AllProducts()
  const product = data.find((product: Product) => product.id === Number(productId));


console.log(product);


  return (
    <Container className="py-10">
      <Breadcumb routes={[{ name: "Product", path: "/products" }, { name: product.name, path: "" }]} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <SwiperComponent images={product.images} />
        </div>

        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <div className="flex items-center justify-start mt-4 border-b-2 pb-2">
            <p className="text-xl font-normal text-[#414141] pr-2 border-r-2">${product.price}</p>
            <div className='flex items-center gap-1 p-1'>
              <Star size={20} />
              <Star size={20} />
              <Star size={20} />
              <Star size={20} />
              <Star size={20} />
            </div>
            (32 Review)
          </div>

          <div className="mt-4">
            <p className="text-lg font-normal text-[#414141]">{product.description}</p>
            {
              product.points.map((point: string, index: number) => (
                <div key={index} className="flex items-center gap-2 mt-2">
                  <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                  <p className="text-lg font-normal text-[#414141]">{point}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
