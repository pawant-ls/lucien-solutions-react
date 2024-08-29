import MainBackground from "./main-bg";
import ReactMarkdown from "react-markdown";

const FooterPages = ({
  heading,
  subHeading,
  content,
}: {
  heading: string;
  subHeading?: string;
  content: string;
}) => {
  return (
    <MainBackground>
      <section className=" mt-20 container ">
        <div className=" text-center">
          <h2 className="  max-w-fit mx-auto  text-3xl font-semibold uppercase  ">
            <span className=" ">{heading}</span>
          </h2>
          <div className=" h-1 mx-auto mt-3 w-60 bg-primary "></div>

          <h3 className=" text-2xl mt-5 font-medium uppercase">{subHeading}</h3>
        </div>

        <div className=" mt-10">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-4xl font-bold mb-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-3xl font-semibold mt-6 mb-3" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-2xl font-semibold mt-5 mb-2" {...props} />
              ),
              p: ({ node, ...props }) => <p className="mb-4" {...props} />,
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside mb-4" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside mb-4" {...props} />
              ),
              li: ({ node, ...props }) => <li className="mb-2" {...props} />,
              // @ts-ignore
              code: ({ node, inline, ...props }) =>
                inline ? (
                  <code
                    className=" bg-text/20 rounded px-1 py-0.5"
                    {...props}
                  />
                ) : (
                  <code
                    className="block bg-text/20  rounded p-4 mb-4 overflow-x-auto"
                    {...props}
                  />
                ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </section>
    </MainBackground>
  );
};

export default FooterPages;
