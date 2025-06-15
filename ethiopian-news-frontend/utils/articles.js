// utils/articles.js

// Hardcoded sample articles for various categories
export const allArticles = [
  {
    id: 1, slug: "sample-article-title", title: "This is a Sample Article Title for the Ethiopian News Website",
    excerpt: "Leaders gathered in the capital to sign a landmark deal aimed at fostering regional economic cooperation. The design focuses on readability.",
    imageUrl: "/placeholders/placeholder-image.png", category: "Politics",
    body: "<p>This is the first paragraph of the sample article. It contains some interesting information that readers will find engaging. The layout is designed to be clean and prioritize readability, drawing inspiration from leading news platforms while incorporating subtle Ethiopian cultural richness.</p><p>This is the second paragraph, providing more details and context. The design focuses on readability and a clean presentation of news content. We will ensure that images and other media are well-integrated. Ethiopian News aims to be a trustworthy and bold voice, connecting deeply with its readership and the Ethiopian identity.</p><h3>A Subheading within the Article</h3><p>This paragraph follows a subheading, demonstrating content structure. We can include lists, blockquotes, and other rich text elements here in the future. The goal is to provide a seamless and informative reading experience. Future enhancements will include real-time updates, multimedia galleries, and interactive elements.</p>",
    author: "Alemayehu Reporter", date: "October 27, 2023",
    tags: ["sample", "news", "development", "ethiopia", "journalism"],
    relatedArticles: [ /* Simplified related for this context */ ]
  },
  {
    id: 401, slug: "election-updates-2023", title: "Key Updates on National Elections Process",
    excerpt: "Officials provide the latest information regarding voter registration and polling station readiness. An important election topic.",
    imageUrl: "/placeholders/placeholder-image.png", category: "Politics"
  },
  {
    id: 402, slug: "economic-outlook-q4", title: "Economic Outlook for the Fourth Quarter",
    excerpt: "Analysts discuss predictions for economic growth and inflation challenges. The economy is a key discussion.",
    imageUrl: null, category: "Economy"
  },
  {
    id: 403, slug: "new-fintech-startup", title: "New FinTech Startup Aims to Revolutionize Payments",
    excerpt: "A local company launches an innovative mobile payment platform. Technology is evolving fast.",
    imageUrl: "/placeholders/placeholder-image.png", category: "Technology"
  },
  {
    id: 404, slug: "annual-cultural-fest", title: "Annual Cultural Festival Kicks Off in Addis",
    excerpt: "The much-anticipated festival begins, showcasing diverse traditions from across Ethiopia. Culture is vibrant.",
    imageUrl: "/placeholders/placeholder-image.png", category: "Society & Culture"
  },
  {
    id: 405, slug: "national-team-victory", title: "National Football Team Secures Crucial Victory in Sports",
    excerpt: "A thrilling match sees the home team take one step closer to championship qualification. A great sports moment.",
    imageUrl: null, category: "Sports"
  },
  {
    id: 406, slug: "parliament-discusses-new-bill", title: "Parliament Debates New Environmental Bill",
    excerpt: "Lawmakers consider new regulations aimed at protecting natural resources and the environment.",
    imageUrl: "/placeholders/placeholder-image.png", category: "Politics"
  },
  {
    id: 407, slug: "agricultural-exports-rise", title: "Agricultural Exports See Significant Rise This Year",
    excerpt: "Increased production and favorable market conditions boost export revenues from agriculture.",
    imageUrl: "/placeholders/placeholder-image.png", category: "Economy"
  },
  {
    id: 408, slug: "5g-rollout-plans", title: "Telecom Announces 5G Rollout Plans for Major Cities",
    excerpt: "The national telecom provider outlines its strategy for next-generation network deployment. This technology is exciting.",
    imageUrl: null, category: "Technology"
  },
  {
    id: 409, slug: "world-leader-visits-ethiopia", title: "World Leader Visits Ethiopia to Discuss Politics",
    excerpt: "A prominent world leader visits Ethiopia to discuss bilateral relations and global politics.",
    imageUrl: "/placeholders/placeholder-image.png", category: "World"
  },
  {
    id: 410, slug: "editorial-on-current-affairs", title: "Editorial: Navigating Current Affairs and Opinions",
    excerpt: "An opinion piece on the current political and economic landscape. What is your opinion?",
    imageUrl: null, category: "Opinion"
  },
  {
    id: 411, slug: "health-initiatives-expanded", title: "New Health Initiatives Expanded Nationwide",
    excerpt: "The ministry of health announces an expansion of key public health programs and initiatives.",
    imageUrl: "/placeholders/placeholder-image.png", category: "Health"
  },
  {
    id: 412, slug: "education-reform-proposals", title: "Education Reform Proposals Submitted to Parliament",
    excerpt: "A new set of education reforms are under consideration to improve quality and access.",
    imageUrl: null, category: "Education"
  }
];

// You can add more utility functions related to articles here if needed in the future
// e.g., getArticleBySlug, getArticlesByCategory, etc.
