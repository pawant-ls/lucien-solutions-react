const OurServicesHeading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="  flex flex-col items-center  text-white">
      {/* <div className=" flex gap-5 ">
        {title.split(" ").map((word, index) => (
          <h1 className=" text-6xl font-semibold" key={index}>
            <span className="text-primary m-0 p-0 -mr-4">{word[0]}</span>{" "}
            {word.slice(1)}
          </h1>
        ))}
      </div> */}

      <h1 className=" text-2xl md:text-3xl lg:text-6xl font-semibold">
        {/* {title.split(" ").map((word, index) => (
          <span className=" mx-2" key={index}>
            {word}
          </span>
        ))} */}

        {title}
      </h1>

      <p className=" sm:text-lg mt-5">{description}</p>
    </div>
  );
};

export default OurServicesHeading;
