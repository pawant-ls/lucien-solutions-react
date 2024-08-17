import { Box } from "lucide-react";
import BoxReveal from "../magicui/box-reveal";

const Heading = ({
  firstLine = ["", ""],
  secondLine = "",
  description = "",
}) => {
  return (
    <div className=" max-w-2xl my-12 mx-auto text-center text-gray-100">
      <div className=" flex justify-center w-full">
        <BoxReveal boxColor={"#FF7A00"} duration={0.5}>
          <h1 className=" text-3xl text-center font-semibold uppercase">
            {firstLine[0]} <span className=" text-primary">{firstLine[1]}</span>
          </h1>
        </BoxReveal>
      </div>
      <div className=" flex justify-center w-full">
        <BoxReveal boxColor={"#FF7A00"} duration={0.8}>
          <h1 className=" text-primary text-3xl font-semibold uppercase">
            {secondLine}
          </h1>
        </BoxReveal>
      </div>

      <p className=" mt-10">{description}</p>
    </div>
  );
};

export default Heading;
