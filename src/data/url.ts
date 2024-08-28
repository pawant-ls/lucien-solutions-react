export const urls = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About us",
    url: "/about-us",
  },
  {
    name: "Our Services",
    url: "/our-services",
    children: [
      {
        name: "Search Engine Optimization",
        url: "/our-services/search-engine-optimization",
        children: [
          {
            name: "On Page SEO",
            url: "/our-services/search-engine-optimization/on-page-seo",
          },
          {
            name: "Off Page SEO",
            url: "/our-services/search-engine-optimization/off-page-seo",
          },
          {
            name: "Technical SEO",
            url: "/our-services/search-engine-optimization/technical-seo",
          },
          {
            name: "Local SEO",
            url: "/our-services/search-engine-optimization/local-seo",
          },
          {
            name: "E-commerce SEO",
            url: "/our-services/search-engine-optimization/e-commerce-seo",
          },
          {
            name: "International SEO",
            url: "/our-services/search-engine-optimization/international-seo",
          },
        ],
      },
      {
        name: "Social Media Marketing",
        url: "/social-media-marketing",
        children: [
          {
            name: "Instagram",
            url: "/social-media-marketing/instagram",
          },
          {
            name: "Facebook",
            url: "/social-media-marketing/facebook",
          },
          {
            name: "Graphic Design",
            url: "/social-media-marketing/graphic-design",
          },
          {
            name: "Linkedin Marketing",
            url: "/social-media-marketing/linkedin-marketing",
          },
          {
            name: "Content Marketing",
            url: "/social-media-marketing/content-marketing",
          },
          {
            name: "Influencer Marketing",
            url: "/social-media-marketing/influencer-marketing",
          },
          {
            name: "SMM – Performance Marketing",
            url: "/social-media-marketing/smm-performance-marketing",
          },
        ],
      },
      {
        name: "Email Marketing",
        url: "/email-marketing",
      },
      {
        name: "WordPress Website",
        url: "/wordpress-website",
      },
      {
        name: "Pay Per Click",
        url: "/pay-per-click",
      },
    ],
  },
  {
    name: "Packages and Plans",
    url: "/packages-and-plans",
  },
  {
    name: "Career",
    url: "/career",
  },
  {
    name: "Blog",
    url: "/blogs",
  },
];

export const policies = [
  {
    name: "Refund Policy",
    url: "/refund-policy",
  },
  {
    name: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    name: "Disclaimer",
    url: "/disclaimer",
  },
  {
    name: "Terms & Conditions",
    url: "/terms-and-conditions",
  },
  {
    name: "Shipping and Delivery Policy",
    url: "/shipping-and-delivery-policy",
  },
];
