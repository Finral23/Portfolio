interface Props {
  title: string;
  heading: string;
}

const Heading = ({ title, heading }: Props) => {
  return (
    <div>
      <p className="text-blue-500 tracking-widest pb-2">
        {title.toUpperCase()}
      </p>
      <h1 className="text-5xl text-light font-bold pb-4">
        {heading.toUpperCase()}
      </h1>
    </div>
  );
};

export default Heading;
