import SwiperComponent from '@/lib/SwiperJs';
import Breadcumb from '@/utils/Breadcumb';
import Container from '@/utils/Container';
import { Star } from 'lucide-react';



interface Params {
  productId: string;
}

const ProductPage = async ({ params }: { params: Params }) => {
  const { productId } = params; 
  const data = await fetch(`http://localhost:5000/data/${productId}`);
  const product = await data.json();

  return (
    <Container className="pb-10">
      <Breadcumb routes={[ {name: "Home", path: "/"}, { name: "Product", path: "/products" }, { name: product?.name || "Not Found", path: "" }]} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <SwiperComponent images={product?.images || []} />
        </div>

        <div>
          <h1 className="text-4xl font-bold">{product?.name || "Product Not Found"}</h1>
          <div className="flex items-center justify-start mt-4 border-b-2 pb-2">
            <p className="text-xl font-normal text-[#414141] pr-2 border-r-2">${product?.price || "N/A"}</p>
            <div className='flex items-center gap-1 p-1'>
              {[...Array(5)].map((_, index) => <Star key={index} size={20} />)}
            </div>
            (32 Review)
          </div>

          <div className="mt-4">
            <p className="text-lg font-normal text-[#414141]">{product?.description || "No description available."}</p>
            
            {
              product?.points?.map((point: string, index: number) => (
                <div key={index} className="flex items-center gap-2 mt-2">
                  <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                  <p className="text-lg font-normal text-[#414141]">{point}</p>
                </div>
              )) || <p>No details available.</p>
            }
          </div>
        </div>
      </div>
    </Container>
  );
};


export default ProductPage;
