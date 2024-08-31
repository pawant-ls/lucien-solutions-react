"use client";
import MainBackground from "../shared/main-bg";
import ReactMarkdown from "react-markdown";
import JobApplicationForm from "./job-form";
import { GradientMixer } from "../home/home";

const JobDetails = ({ data }: { data: any }) => {
  return (
    <MainBackground>
      <section className="   container">
        <div className=" relative gap-5 grid text-text  md:grid-cols-2 lg:grid-cols-3">
          <div className=" lg:col-span-2 ">
            <ReactMarkdown
              components={{
                // Map the Markdown structure to React components
                h1: ({ children }) => (
                  <h1 className=" text-text">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className=" text-text">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className=" text-text">{children}</h3>
                ),
                h4: ({ children }) => (
                  <h4 className=" text-text">{children}</h4>
                ),
                h5: ({ children }) => (
                  <h5 className=" text-text">{children}</h5>
                ),
                p: ({ children }) => (
                  <p className=" text-text/90">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className=" text-text">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className=" text-text">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className=" text-text">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className=" text-text">{children}</strong>
                ),
                a: ({ children }) => <a className=" text-text">{children}</a>,
              }}
              className="prose  text-text "
            >
              {data.jobDescription}
            </ReactMarkdown>
          </div>

          <div className=" sticky  top-0 right-0">
            <JobApplicationForm />
          </div>
        </div>
      </section>
    </MainBackground>
  );
};

export default JobDetails;
