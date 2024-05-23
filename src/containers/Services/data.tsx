const generalImg = new URL("../../assets/services/general.png", import.meta.url)
  .href;

const seoImg = new URL("../../assets/services/seo.png", import.meta.url).href;

const contentImg = new URL("../../assets/services/content.png", import.meta.url)
  .href;

const influencerImg = new URL(
  "../../assets/services/influencer.png",
  import.meta.url
).href;

const emailImg = new URL("../../assets/services/email.png", import.meta.url)
  .href;

export const serviceArray = [
  {
    icon: generalImg,
    title: "General Packages",
    list: [
      "SEO Audit (once-off)",
      "Keyword Research (once-off)",
      "Ongoing SEO package (includes on-page, technical, and off-page SEO)",
      "Social Meda Add-in (usually it’s Facebook Ads)",
      "Content Marketing Add-in (creating content assets every month)",
      "Google Ads Campaign Management (on-going)",
      "Email automation and workflows (once-off)",
    ],
  },
  {
    icon: seoImg,
    title: "SEO Packages",
    list: [
      "SEO Audit",
      "Recovery from Google Penalties",
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Local SEO (Including Google Maps)",
      "Off-Page SEO (Link-Building, Digital PR)",
      "Ecommerce SEO",
      "Content Writing",
      "SEO Competitor Analysis",
    ],
  },
  {
    icon: contentImg,
    title: "Content Marketing Packages",
    list: [
      "Content marketing strategy (including crafting a content calendar)",
      "Creating blog posts",
      "Creating ebooks, industry studies, and other lead magnets",
      "Designing high-quality visuals",
      "Video scripts",
      "Creating and optimizing copy for landing pages",
    ],
  },
  {
    icon: influencerImg,
    title: "Influencer Marketing",
    list: [
      "Identifying influencers",
      "Campaign strategy and planning",
      "Campaign execution",
      "Analysis and reporting",
    ],
  },
  {
    icon: emailImg,
    title: "Email Marketing Package",
    list: [
      "Email strategy",
      "Email automation setup",
      "Email workflows",
      "Email templates",
      "Email marketing analytics and reporting",
    ],
  },
];
