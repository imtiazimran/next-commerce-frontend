import DeliveryInfo from '@/components/ui/DeliveryInfo';
import SwiperComponent from '@/lib/SwiperJs';
import Breadcumb from '@/utils/Breadcumb';
import Container from '@/utils/Container';
import { IconStarFilled } from '@tabler/icons-react';
import { Heart } from 'lucide-react';



interface Params {
  productId: string;
}

const ProductPage = async ({ params }: { params: Params }) => {
  const { productId } = params;
  const data = await fetch(`http://localhost:5000/data/${productId}`);
  const product = await data.json();

  return (
    <div>
      <Container className="pb-10">
        <Breadcumb routes={[{ name: "Home", path: "/" }, { name: "Product", path: "/products" }, { name: product?.name || "Not Found", path: "" }]} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <SwiperComponent images={product?.images || []} />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold">{product?.name || "Product Not Found"}</h1>
              <Heart className='text-[#b9b9b9]' size={30} />
            </div>
            <div className="flex items-center justify-start mt-4 border-b-2 pb-2">
              <p className="text-xl font-normal text-[#414141] pr-2 border-r-2">${product?.price || "N/A"}</p>
              <div className='flex items-center gap-1 p-1'>
                {[...Array(5)].map((_, index) => <IconStarFilled className='text-[#b9b9b9]' key={index} size={20} />)}
              </div>
              (32 Review)
            </div>
            <div className="flex items-center justify-start mt-4 gap-4">
              <button className={`relative w-40 h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400`}
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-slate-900 px-5 py-1 font-medium text-white backdrop-blur-3xl">
                  Buy Now
                </span></button>

              <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                Add to Cart
              </button>
            </div>
            <div className="mt-4">
              <p className="text-lg font-normal text-[#414141]">{product?.short_description || "No short description available."}</p>

              {
                product?.points?.map((point: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 mt-2">
                    <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                    <p className="text-lg font-normal text-[#414141]">{point}</p>
                  </div>
                )) || <p>No details available.</p>
              }
              <DeliveryInfo />
            </div>
          </div>
        </div>

      </Container>
      <div className='bg-[#f8f8f8] my-20 '>
        <Container className="p-10">
          <h2 className='my-5 text-2xl font-bold'>Description</h2>
          <p className='my-5'>{product?.description || "No description available."}</p>
          {
            product?.points?.map((point: string, index: number) => (
              <div key={index} className="flex items-center gap-2 mt-2">
                <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                <p className="text-lg font-normal text-[#414141]">{point}</p>
              </div>
            )) || <p>No details available.</p>
          }
        </Container>
      </div>
    </div>
  );
};


export default ProductPage;
