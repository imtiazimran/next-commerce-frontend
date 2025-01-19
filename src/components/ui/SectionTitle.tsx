
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
    <div className="flex justify-between my-10">
      <div>
        <h1 className="text-4xl">{title ?? title}</h1>
        <p className="text-center text-[#666666]">{subtitle}</p>
      </div>
      {button && to && (
       <Button text={button} to={to} />
      )}
    </div>
  );
};

export default SectionTitle;
