import {
  faCogs,
  faFileCode,
  faExternalLinkAlt,
  faMapMarkerAlt,
  faShoppingCart,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSearch,
  faExchangeAlt,
  faChartLine,
  faEye,
  faShieldAlt,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSearchPlus,
  faLightbulb,
  faProjectDiagram,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

export const seoStrategies = [
  {
    title: "Technical SEO",
    description:
      "Improving the website's speed, mobile-friendliness, indexing, structured data, and more, to allow search engines to crawl and index the website better.",
    icon: faCogs,
    explorePage: "/technical-seo",
  },
  {
    title: "On-Page SEO",
    description:
      "Optimising the content, meta tags, headers, images, internal linking, and similar aspects of every webpage to rank higher and earn more relevant traffic in search engines.",
    icon: faFileCode,
    explorePage: "/on-page-seo",
  },
  {
    title: "Off-Page SEO",
    description:
      "Improve activities performed outside your website, like building backlinks, social media marketing, and influencer outreach as they help rank higher on search engines.",
    icon: faExternalLinkAlt,
    explorePage: "/off-page-seo",
  },
  {
    title: "Local SEO",
    description:
      "Optimising your GMB profiles, local citations, and reviews to target the local search results, especially for businesses with physical locations. These results drive foot traffic for the business.",
    icon: faMapMarkerAlt,
    explorePage: "/local-seo",
  },
  {
    title: "E-commerce SEO",
    description:
      "Tailored SEO efforts towards product descriptions, user experience, site structure, and optimising product-related keywords for online stores to attract organic traffic and drive sales.",
    icon: faShoppingCart,
    explorePage: "/ecommerce-seo",
  },
  {
    title: "International SEO",
    description:
      "Optimising your website for search engines to easily identify which countries and languages your content is intended for. It includes hreflang tags, geotargeting, and content localisation.",
    icon: faGlobe,
    explorePage: "/international-seo",
  },
];

export const seoBenefits = [
  {
    title: "Higher Search Engine Rankings",
    icon: faSearch,
  },
  {
    title: "Improved Conversion",
    icon: faExchangeAlt,
  },
  {
    title: "Higher Traffic Quantity",
    icon: faChartLine,
  },
  {
    title: "Improved Brand Visibility",
    icon: faEye,
  },
  {
    title: "Higher Domain Authority",
    icon: faShieldAlt,
  },
  {
    title: "Long Term Growth",
    icon: faSeedling,
  },
];

export const seoProcess = [
  {
    step: "01",
    title: "Audit",
    description:
      "We begin by closely analysing your website for a comprehensive SEO Audit, revealing all its gaps in SEO.",
    icon: faSearchPlus,
  },
  {
    step: "02",
    title: "Strategies",
    description:
      "We employ time-tested white-hat SEO techniques based on your marketing gaps.",
    icon: faLightbulb,
  },
  {
    step: "03",
    title: "Execution",
    description:
      "We strategically add keyword-rich content, refine structure, and build link portfolios to expand online reach.",
    icon: faProjectDiagram,
  },
  {
    step: "04",
    title: "Evaluation",
    description:
      "We closely monitor website traffic and progress to refine strategies to help your brand stand out.",
    icon: faChartBar,
  },
];
