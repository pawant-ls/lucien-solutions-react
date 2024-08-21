"use client";
import MainBackground from "../shared/main-bg";
import ReactMarkdown from "react-markdown";
import JobApplicationForm from "./job-form";
import { GradientMixer } from "../home/home";

const JobDetails = () => {
  const content = `
# Market Research Executive

## Job description

We are looking for a Market Research Executive to help us find new clients and business opportunities through thorough market research.

### About Us:

Lucien Solutions is a digital marketing agency that helps businesses grow online.

### About You:

- Bachelor's degree in Marketing, Business, or related field.
- 2+ years of experience in market research or lead generation.
- Strong research and analytical skills.
- Proficiency in market research tools.
- Excellent communication skills.

### Responsibilities:

#### Market Research:

- Research potential clients and business opportunities.
- Analyze market trends and competitor activities.

#### Lead Generation:

- Generate leads through online research, social media, and events.
- Maintain a database of potential clients.

#### Business Development:

- Identify new business opportunities.
- Assist the sales team in reaching out to potential clients.

#### Data Analysis:

- Analyze data and provide insights.
- Prepare reports and presentations on findings.

#### Collaboration:

- Work with sales and marketing teams to align research with business goals.
- Support targeted marketing campaigns based on research.

## We Offer:

- A competitive salary and commission structure.
- A comprehensive benefits package.
- The opportunity to lead a dynamic team and play a key role in shaping the future of a thriving digital marketing agency.
- A collaborative and supportive work environment that fosters professional growth and development.

Job Types: Full-time, Permanent, Fresher

Pay: ₹12,000.00 – ₹25,000.00 per month

### Benefits:

- Paid sick time
- Paid time off
- Work from home

### Schedule:

- Day shift
- Monday to Friday
- Morning shift
- Weekend availability

### Supplemental pay types:

- Commission pay
- Performance bonus

### Language:

- Hindi (Preferred)
- English (Preferred)

### Work Location:

- Remote
  `;
  return (
    <MainBackground>
      <section className="   container">
        <div className=" relative gap-5 grid  md:grid-cols-2 lg:grid-cols-3">
          <div className=" lg:col-span-2 bg-white p-5 rounded-2xl">
            <ReactMarkdown
              components={{
                // Map the Markdown structure to React components
                h1: ({ children }) => (
                  <h1 className=" text-gray-900">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className=" text-gray-900">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className=" text-gray-900">{children}</h3>
                ),
                h4: ({ children }) => (
                  <h4 className=" text-gray-900">{children}</h4>
                ),
                h5: ({ children }) => (
                  <h5 className=" text-gray-900">{children}</h5>
                ),
                p: ({ children }) => (
                  <p className=" text-gray-700">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className=" text-gray-900">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className=" text-gray-900">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className=" text-gray-900">{children}</li>
                ),
              }}
              className="prose  text-gray-900 "
            >
              {content}
            </ReactMarkdown>
          </div>

          <div className=" sticky  top-0 right-0">
            <JobApplicationForm />
          </div>
        </div>
      </section>
      <GradientMixer />
    </MainBackground>
  );
};

export default JobDetails;
