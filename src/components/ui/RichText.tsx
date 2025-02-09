const RichText = ({title, subtitle, alignment = "center"}: {title?:string, subtitle?: string, alignment?:string}) => {
    return (
        <div className="py-5">
          <h1 className={`text-4xl text-${alignment}`}>{title}</h1>
          <p className={`text-[#666] text-${alignment}`}> {subtitle} </p>
        </div>
    );
};

export default RichText;