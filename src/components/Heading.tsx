interface Props {
  title: string;
  heading: string;
}

const HeadingBlue = ({ title, heading }: Props) => {
  return (
    <>
      <p className="  text-blue-500 tracking-widest pb-2">{title}</p>
      <h1 className="text-5xl text-light font-bold pb-4">{heading}</h1>
    </>
  );
};

export default HeadingBlue;
