interface Props {
  title: string;
  heading: string;
  subtitle?: string;
}

const Heading = ({ title, heading, subtitle }: Props) => {
  return (
    <div>
      <p className="text-blue-500 tracking-widest pb-1">
        {title.toUpperCase()}
      </p>
      <h1 className="text-7xl text-light font-bold ">
        {heading.toUpperCase()}
      </h1>
      <p className=" text-light">{subtitle}</p>
    </div>
  );
};

export default Heading;
