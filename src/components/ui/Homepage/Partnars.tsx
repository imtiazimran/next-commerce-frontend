import Image from "next/image";

const Partnars = () => {
    return (
        <div className="bg-[#f0f0f0] py-3 ">
            <div className="flex gap-10  whitespace-nowrap justify-center items-center">

            {
                gadgetBrandLogos?.map((logo, i) => (
                    <div key={i}>
                        <Image alt={logo.name} src={logo.logo} width={70} height={70}/>
                    </div>
                ))
            }
          
            </div>
        </div>
    );
};

export default Partnars;

const gadgetBrandLogos = [
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    },
    {
      name: "Sony",
      logo: "https://cdn.freebiesupply.com/images/thumbs/2x/sony-logo.png",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Dell",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
    },
    {
      name: "Lenovo",
      logo: "https://cdn.worldvectorlogo.com/logos/lenovo-2.svg",
    },
    {
      name: "HP",
      logo: "https://cdn.freebiesupply.com/images/large/2x/hewlett-packard-logo-black-and-white.png",
    },
    {
      name: "Asus",
      logo: "https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png",
    },
    {
      name: "Acer",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/1024px-Acer_2011.svg.png",
    },
    {
      name: "Xiaomi",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
    },
    {
      name: "Huawei",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1200px-Huawei_Standard_logo.svg.png",
    },
    {
      name: "LG",
      logo: "https://images.squarespace-cdn.com/content/v1/502a8efb84ae42cbccf920c4/1585574686746-VCDIHSO21O76WR72WIAD/LG-Logo.png",
    },
  ];
  
  