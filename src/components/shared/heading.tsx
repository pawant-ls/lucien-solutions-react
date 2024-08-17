const Heading = ({
  firstLine = ["", ""],
  secondLine = "",
  description = "",
}) => {
  return (
    <div className=" max-w-2xl my-12 mx-auto text-center text-gray-100">
      <h1 className=" text-3xl font-semibold uppercase">
        {firstLine[0]} <span className=" text-primary">{firstLine[1]}</span>
      </h1>
      <h1 className=" text-primary text-3xl font-semibold uppercase">
        {secondLine}
      </h1>

      <p className=" mt-10">{description}</p>
    </div>
  );
};

export default Heading;
