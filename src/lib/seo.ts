export const metaTagsGenerator = ({
  title,
  description,
  img,
  url,
}: {
  title?: string;
  description?: string;
  img?: string;
  url?: string;
}) => {
  // https://i.imgur.com/5U4Bzjvl.png
  const metaObject = {
    title: title || "Lucien Solutions",
    description:
      description ||
      "Your Digital Lighthouse in the Sea of Success Crafted to precision by trusted experts, our data-backed, result-driven, innovative approaches foster meaningful connections with end users. Facebook-square Linkedin Instagram Strategic Solutions Tailored to ILLUMINATE YOUR BRAND Strategic Solutions Tailored to ILLUMINATE YOUR BRAND At Lucien Solutions, we believe in personalised strategies tailored to your unique needs.",

    openGraph: {
      type: "website",
      locale: "en_IE",
      url:
        `https://lucien-solutions-react.vercel.app${url}` ||
        "https://lucien-solutions-react.vercel.app/",
      title: title || "Lucien Solutions",
      description:
        description ||
        "Your Digital Lighthouse in the Sea of Success Crafted to precision by trusted experts, our data-backed, result-driven, innovative approaches foster meaningful connections with end users. Facebook-square Linkedin Instagram Strategic Solutions Tailored to ILLUMINATE YOUR BRAND Strategic Solutions Tailored to ILLUMINATE YOUR BRAND At Lucien Solutions, we believe in personalised strategies tailored to your unique needs.",
      images: [
        {
          url: img || "https://i.imgur.com/5U4Bzjvl.png",
          width: 800,
          height: 450,
        },
        {
          url: img || "https://i.imgur.com/5U4Bzjvl.png",
          width: 800,
          height: 450,
        },
      ],
      site_name: "Cinephilex",
    },
    twitter: {
      card: "summary_large_image",
      title: title || "Lucien Solutions ",
      description:
        description ||
        "Your Digital Lighthouse in the Sea of Success Crafted to precision by trusted experts, our data-backed, result-driven, innovative approaches foster meaningful connections with end users. Facebook-square Linkedin Instagram Strategic Solutions Tailored to ILLUMINATE YOUR BRAND Strategic Solutions Tailored to ILLUMINATE YOUR BRAND At Lucien Solutions, we believe in personalised strategies tailored to your unique needs.",
      // creator: "@goldeninfotech",
      images: [img || "https://i.imgur.com/5U4Bzjvl.png"],
    },
  };

  return metaObject;
};
