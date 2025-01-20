
import Button from "./Button";

const SectionTitle = ({
  title,
  subtitle,
  button,
  to,
}: {
  title?: string;
  subtitle?: string;
  button?: string;
  to?: string | URL;
}) => {
  return (
    <div className="flex md:justify-between my-10 flex-col justify-center md:flex-row">
      <div className="flex flex-col justify-center gap-3">
        <h1 className="text-4xl md:text-left text-center">{title ?? title}</h1>
        <p className="text-center text-[#666666]">{subtitle}</p>
      </div>
      {button && to && (
       <Button text={button} to={to} />
      )}
    </div>
  );
};

export default SectionTitle;
