"use client";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import MainBackground from "../shared/main-bg";

// This is a mock function to simulate fetching Markdown content
// In a real application, you'd replace this with an actual API call
const fetchMarkdownContent = async () => {
  // Simulating an API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return `
  # Importance Of Greenfluencers

  
  *Sarika Wable*
  
  The influencer landscape is undergoing a significant shift, with environmental consciousness taking center stage. Recognizing that sustainable practices are no longer a luxury but a necessity, a new breed of influencer is emerging: the Green Influencer.
  
  This trend is fueled by a growing public demand for eco-friendly living. Studies show that 78% of people have been inspired by influencers to adopt more sustainable practices. Green influencers are acting as catalysts for change, empowering their audiences to make greener choices in their everyday lives.
  
  According to a study by the University of Erfurt within Gen Z, meaningful influencers manage to benefit from a higher level of credibility than "normal influencers". These influencers resonate because they:
  
  - **Walk the Walk**: Their actions align with their message, fostering trust and credibility. Gone are the days of greenwashing – audiences demand consistency between what's preached and practiced.
  - **Open Books**: They share their successes and struggles on the path to sustainability. This transparency allows audiences to connect with their journeys, making it feel attainable for everyone.
  
  This authenticity resonates with environmentally conscious consumers. A staggering 46% now demand brands to prioritize sustainability efforts. This is where Green Influencers become powerful allies for companies looking to reshape their marketing approach:
  
  ## Visibility and Awareness Champions
  
  Green influencers act as a megaphone for sustainable brands and products. They cut through the noise of traditional advertising, showcasing eco-conscious living as the norm. The phenomenal success of #ecotok, a hashtag boasting over 630 million views and counting, exemplifies the public's appetite for environmental content presented in fresh and engaging formats. This influencer-driven movement is proving that sustainability can be captivating, inspiring, and even go viral. It's a testament to the power of Green Influencers to not only raise awareness but also to make environmental action exciting and accessible.
  
  ## Building Trust
  
  Consumers are more likely to adopt green practices if they see them endorsed by authentic influencers. Sharing personal experiences and the tangible benefits of sustainable choices fosters a deeper connection with brands, bridging the gap between awareness and action.
  
  ## Community Cultivators
  
  Green influencers excel in fostering communities centered around shared environmental values. Their platforms become vibrant forums for discussing sustainability, exchanging tips, and motivating each other to adopt eco-friendly habits. This creates a powerful network effect, driving positive change beyond the individual.
  
  The weight of this impact is echoed by the scientists behind the Intergovernmental Panel on Climate Change (IPCC)'s latest report, which states that "social influencers and thought leaders can increase the adoption of low-carbon technologies, behaviours, and lifestyles." By weaving environmental consciousness into relatable content, Green Influencers are fostering a cultural shift towards a more sustainable future.
  
  ## Summary
  
  Social media is experiencing a green revolution with the rise of Greenfluencers. These eco-conscious personalities are leveraging their platforms to inspire a more sustainable future. Public demand for eco-friendly living is surging, with 78% of people influenced by online figures to adopt greener practices. Greenfluencers act as catalysts for change, empowering audiences to make everyday choices that benefit the environment.
  
  Their authenticity is key. Unlike traditional influencers, Greenfluencers "walk the walk," ensuring their actions align with their message. Transparency is another hallmark. They share their journeys towards sustainability, struggles and all, making it relatable and achievable for followers.
  
  This resonates with environmentally conscious consumers, with 46% demanding brands prioritize sustainability efforts. Greenfluencers become valuable allies for brands by promoting sustainable products and normalizing eco-conscious living. They build trust by sharing personal experiences with sustainable choices, and cultivate online communities where people discuss sustainability and motivate each other towards eco-friendly habits. This network effect drives positive change beyond the individual, making Green Influencers a powerful force for a more sustainable future.
  
  ## Key Pointers
  
  1. **Demand for Sustainability**: Public demand for eco-friendly living is surging, with 78% of people influenced by online personalities to adopt greener practices. Green influencers act as catalysts for change, empowering audiences to make sustainable choices.
  
  2. **Authenticity is Key**: Unlike traditional influencers, Green Influencers are genuine. They practice what they preach and share their sustainability journeys openly. This transparency builds trust and credibility.
  
  3. **Allies for Sustainable Brands**: Green influencers promote sustainable products and normalize eco-conscious living. They boost visibility and help build trust.
  
  4. **Community Builders**: Green influencers foster online communities around shared environmental values. They create forums for discussing sustainability, exchanging tips, and motivating each other towards eco-friendly habits. This network effect drives positive change beyond the individual.`;
};

const BlogPage = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      const markdown = await fetchMarkdownContent();
      setContent(markdown);
      setLoading(false);
    };
    loadContent();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <MainBackground>
      <div className="container mx-auto px-4 py-8">
        <div className="   rounded-lg overflow-hidden">
          <div className="p-6">
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
        </div>
      </div>
    </MainBackground>
  );
};

export default BlogPage;
