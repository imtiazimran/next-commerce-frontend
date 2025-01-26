
import SwiperComponent from '@/lib/SwiperJs';
import Breadcumb from '@/utils/Breadcumb';
import Container from '@/utils/Container';
import { Star } from 'lucide-react';



interface Params {
  productId: string;
}

const ProductPage = async ({ params }: { params: Params }) => {
  const { productId } = params;
  const data = await fetch(`http://localhost:5000/products/${productId}`)
  const product = await data.json()


  const images = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
  ];

  return (
    <Container>
      <Breadcumb routes={[{ name: "Product", path: "/Products" }, { name: product.name, path: "" }]} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <SwiperComponent images={images} />
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
            </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
