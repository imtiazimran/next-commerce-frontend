import { BoxIcon, Car } from "lucide-react";
const DeliveryInfo = () => {
    return (
        <div>
            <div className="flex items-center gap-10 my-2">
                <Car className="text-[#b9b9b9]" size={32} />
                <p>Free Delivery on orders over $100</p>
            </div>
            <div className="flex items-center gap-10 my-2">
                <BoxIcon className="text-[#b9b9b9]" size={32} />
                <p>Delivers in: 3-7 Working Days Shipping & Return</p>
            </div>
        </div>
    );
};

export default DeliveryInfo;