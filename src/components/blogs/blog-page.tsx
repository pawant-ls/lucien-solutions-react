"use client";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import MainBackground from "../shared/main-bg";
import { sampleBlogMd } from "@/data/blogs";

const BlogPage = () => {
  return (
    <MainBackground>
      <div
        className=" relative h-[80vh] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/influencer.webp')`,
        }}
      >
        <div className=" bg-black/50 py-10 text-white absolute inset-x-0 bottom-0">
          <div className=" flex flex-col lg:flex-row  justify-between lg:items-center container mx-auto ">
            <h2 className=" text-3xl font-medium">
              IMPORTANCE OF GREENFLUENCERS{" "}
            </h2>

            <div>
              <div>
                <p>June 15, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="   rounded-lg overflow-hidden">
          <div className="">
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
              {sampleBlogMd}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </MainBackground>
  );
};

export default BlogPage;
