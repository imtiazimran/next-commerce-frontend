const RichText = ({title, subtitle}: {title?:string, subtitle?: string}) => {
    return (
        <div className="py-5">
          <h1 className="text-4xl text-center">{title}</h1>
          <p className="text-[#666666] text-center"> {subtitle} </p>
        </div>
    );
};

export default RichText;