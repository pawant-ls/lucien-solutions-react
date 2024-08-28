import {
  faSearch,
  faTags,
  faLock,
  faTachometerAlt,
  faFileAlt,
  faMobileAlt,
  faChartLine,
  faLockOpen,
  faCogs,
  faDatabase,
  faChartBar,
  faGaugeSimpleMed,
} from "@fortawesome/free-solid-svg-icons";

export const technicalSeoData = {
  factors: [
    {
      title: "Crawling and Indexing",
      description:
        "Ensuring search engines can crawl (discover) and index (include in search results) your web pages effectively. And utilizing files to control crawler access and guide search engines to important pages.",
      icon: faSearch,
    },
    {
      title: "On-Page Optimization",
      description:
        "Optimizing individual web pages with meta tags (title, description), headers, content, and images with relevant keywords to rank higher and attract more relevant traffic.",
      icon: faTags,
    },
    {
      title: "Security",
      description:
        "Ensuring an SSL certificate for a secure connection between the website and visitors as Google prioritizes secure websites in search rankings.",
      icon: faLock,
    },
    {
      title: "Core Web Vitals",
      description:
        "Google prioritizes websites that score well in Core Web Vitals. These are metrics that measure website loading speed, interactivity, and visual stability.",
      icon: faTachometerAlt,
    },
    {
      title: "Log File Analysis",
      description:
        "Analysing server log files to understand, and identify errors, issues and opportunities in how search engines crawl and interact with your website.",
      icon: faFileAlt,
    },
  ],
  whyYouNeedTechnicalSeo: [
    {
      title: "Improved Search Engine Rankings",
      icon: faChartLine,
    },
    {
      title: "Competitive Advantage",
      icon: faChartBar,
    },
    {
      title: "Increased Traffic & Conversion",
      icon: faGaugeSimpleMed,
    },
    {
      title: "Enhanced User Experience",
      icon: faMobileAlt,
    },
    {
      title: "Increased Responsiveness",
      icon: faTachometerAlt,
    },
    {
      title: "Decline Bounce Rates",
      icon: faLockOpen,
    },
  ],
  process: [
    {
      step: "01",
      title: "Audit",
      description:
        "We begin by closely analysing your website for a comprehensive SEO Audit, revealing all its gaps in SEO.",
      icon: faSearch,
    },
    {
      step: "02",
      title: "Strategies",
      description:
        "We develop and employ tailored technical SEO strategies to address identified issues and improve overall site performance.",
      icon: faCogs,
    },
    {
      step: "03",
      title: "Execution",
      description:
        "We improve the website’s structure, addressing crawl and index issues, speed and responsiveness, HTTPS encryption and security, and structured data.",
      icon: faGaugeSimpleMed,
    },
    {
      step: "04",
      title: "Evaluation",
      description:
        "We closely monitor the website’s performance and technical SEO metrics to refine strategies to implement the latest technical SEO best practices.",
      icon: faDatabase,
    },
  ],
  keyToSuccess: [
    {
      title: "Mobile Friendliness",
      icon: faMobileAlt,
    },
    {
      title: "Fast Loading Speed",
      icon: faTachometerAlt,
    },
    {
      title: "Clean Website Structure",
      icon: faCogs,
    },
    {
      title: "Website Security",
      icon: faLock,
    },
    {
      title: "Regular Audits",
      icon: faSearch,
    },
    {
      title: "Regular Optimization",
      icon: faChartLine,
    },
  ],
};
