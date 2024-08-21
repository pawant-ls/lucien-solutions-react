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
        url: "/search-engine-optimization",
        children: [
          {
            name: "On Page SEO",
            url: "/on-page-seo",
          },
          {
            name: "Off Page SEO",
            url: "/off-page-seo",
          },
          {
            name: "Technical SEO",
            url: "/technical-seo",
          },
        ],
      },
      {
        name: "Social Media Marketing",
        url: "/social-media-marketing",
      },
      {
        name: "Email Marketing",
        url: "/email-marketing",
      },
      {
        name: "Wordpress Development",
        url: "/wordpress-development",
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
