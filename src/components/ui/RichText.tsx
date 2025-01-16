const RichText = ({title, subtitle}: {title?:string, subtitle?: string}) => {
    return (
        <div>
          <h1 className="text-4xl text-center">{title}</h1>
          <p className="text-[#666666]"> {subtitle} </p>
        </div>
    );
};

export default RichText;