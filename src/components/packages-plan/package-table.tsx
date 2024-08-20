import React from "react";

type Plan = {
  name: string;
  price: string;
  paymentFrequency: string;
  [key: string]: string | number;
};

type Package = {
  category: string;
  features: string[];
  plans: Plan[];
};

const packagesData: Package[] = [
  {
    category: "Social Media Marketing Packages",
    features: [
      "Creatives",
      "Reels",
      "Account Management",
      "Content Calendar",
      "Content Strategy",
      "Community Engagement",
      "Reporting & Analytics",
      "Ad Campaigns",
      "Ad budget",
      "Trendjacking",
    ],
    plans: [
      {
        name: "Basic Plan",
        price: "₹10,000",
        paymentFrequency: "Payable Every Month",
        creatives: 12,
        reels: 4,
        contentCalendar: "Monthly",
        adCampaigns: "1 Ad",
        adBudget: "billed as actuals",
      },
      {
        name: "Standard Plan",
        price: "₹15,000",
        paymentFrequency: "Payable Every Month",
        creatives: 16,
        reels: 6,
        contentCalendar: "Bi-Monthly",
        adCampaigns: "2 Ad",
        adBudget: "billed as actuals",
      },
      {
        name: "Advanced Plan",
        price: "₹25,000",
        paymentFrequency: "Payable Every Month",
        creatives: 24,
        reels: 10,
        contentCalendar: "Bi-Monthly",
        adCampaigns: "3 Ad",
        adBudget: "₹2000 Ad Budget Included (For Boosting)",
        extraFeatures: "Online Reputation Management",
      },
    ],
  },
  {
    category: "Performance Marketing Packages",
    features: [
      "Minimum Ad Budget Recommended (Not Included in Package)",
      "Ad Creative",
      "Facebook & Instagram",
      "Google",
      "Ad Campaign Strategy",
      "Ad Campaign Optimization",
      "Ad Campaign Reporting",
      "Ad Campaign Analytics",
      "Google Tag Manager Set Up",
      "Facebook Business Account Set Up",
      "Profile Optimization",
      "Landing Page Development",
    ],
    plans: [
      {
        name: "Basic Plan",
        price: "₹10,000",
        paymentFrequency: "Payable Every Month",
        minimumAdBudget: "₹15000",
        discretion: "As Per Team's Discretion",
      },
      {
        name: "Standard Plan",
        price: "₹15,000",
        paymentFrequency: "Payable Every Month",
        minimumAdBudget: "₹35000",
        discretion: "As Per Team's Discretion",
      },
      {
        name: "Advanced Plan",
        price: "₹25,000",
        paymentFrequency: "Payable Every Month",
        minimumAdBudget: "₹50000",
        discretion: "As Per Team's Discretion",
      },
    ],
  },
  {
    category: "Website Packages",
    features: [
      "Webpages",
      "Contact Form",
      "SEO-Enabled Content",
      "Unique Design",
      "Contact Forms",
      "WhatsApp Link Integration",
      "Social Links Integration",
      "Google Map Integration",
      "Lead Capture Form",
      "Payment Gateway",
      "Technical SEO",
    ],
    plans: [
      {
        name: "Basic Plan",
        price: "₹10,000",
        paymentFrequency: "Payable Every Month",
        features: "Landing Page (1 page website)",
      },
      {
        name: "Standard Plan",
        price: "₹15,000",
        paymentFrequency: "Payable Every Year",
        features: "Up to 5 Pages Website",
      },
      {
        name: "Advanced Plan",
        price: "₹25,000",
        paymentFrequency: "One Time Payment",
        features: "Up to 20 Pages Website",
      },
    ],
  },
  {
    category: "Email Marketing Packages",
    features: [
      "Email Marketing Campaigns",
      "Email Marketing Software",
      "Contacts",
      "Email Campaign Analytics",
      "Email Template Design",
      "Email Content",
    ],
    plans: [
      {
        name: "Basic Plan",
        price: "₹12,000",
        paymentFrequency: "Payable Every Month",
        campaigns: 2,
        contacts: 2500,
      },
      {
        name: "Standard Plan",
        price: "₹18,000",
        paymentFrequency: "Payable Every Month",
        campaigns: 4,
        contacts: 5000,
      },
      {
        name: "Advanced Plan",
        price: "₹25,000",
        paymentFrequency: "Payable Every Month",
        campaigns: 7,
        contacts: 8000,
      },
    ],
  },
  {
    category: "Search Engine Optimization Packages",
    features: [
      "Industry-Specific Keywords",
      "Blogs",
      "Technical Audit",
      "On-page SEO",
      "Competitor Analysis",
      "Off-page SEO",
      "Social Sharing",
      "Backlinks",
      "Monthly Reporting",
      "Website Speed Optimization",
      "Content Optimization",
      "Blog Optimization",
    ],
    plans: [
      {
        name: "Basic Plan",
        price: "₹8,500",
        paymentFrequency: "Payable Every Month",
        keywords: 10,
        blogs: 3,
        backlinks: 5,
      },
      {
        name: "Standard Plan",
        price: "₹15,000",
        paymentFrequency: "Payable Every Month",
        keywords: 20,
        blogs: 5,
        backlinks: 8,
      },
      {
        name: "Advanced Plan",
        price: "₹24,000",
        paymentFrequency: "Payable Every Month",
        keywords: 30,
        blogs: 10,
        backlinks: 12,
      },
    ],
  },
];

const PackageTable: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {packagesData.map((pkg, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{pkg.category}</h2>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Plan</th>
                <th className="border border-gray-300 p-2">Price</th>
                <th className="border border-gray-300 p-2">
                  Payment Frequency
                </th>
                {pkg.features.map((feature, featureIndex) => (
                  <th key={featureIndex} className="border border-gray-300 p-2">
                    {feature}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pkg.plans.map((plan, planIndex) => (
                <tr key={planIndex} className="text-center">
                  <td className="border border-gray-300 p-2 font-semibold">
                    {plan.name}
                  </td>
                  <td className="border border-gray-300 p-2">{plan.price}</td>
                  <td className="border border-gray-300 p-2">
                    {plan.paymentFrequency}
                  </td>
                  {pkg.features.map((feature, featureIndex) => (
                    <td
                      key={featureIndex}
                      className="border border-gray-300 p-2"
                    >
                      {plan[feature.replace(/\s+/g, "").toLowerCase()] || "N/A"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PackageTable;
