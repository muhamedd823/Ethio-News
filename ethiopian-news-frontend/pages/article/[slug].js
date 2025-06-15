import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ArticleLayout from '../../components/news/ArticleLayout';
// import styles from '../../styles/ArticlePage.module.css'; // If page-specific styles are needed beyond layout

// Placeholder data - in a real app, this would come from getStaticProps/getServerSideProps
const sampleArticleData = {
  slug: "sample-article-title",
  title: "This is a Sample Article Title for the Ethiopian News Website",
  author: "Alemayehu Reporter",
  date: "October 27, 2023",
  imageUrl: "/placeholders/placeholder-image.png",
  imageCaption: "A placeholder image representing the essence of the sample article.",
  body: "<p>This is the first paragraph of the sample article. It contains some interesting information that readers will find engaging. The layout is designed to be clean and prioritize readability, drawing inspiration from leading news platforms while incorporating subtle Ethiopian cultural richness.</p><p>This is the second paragraph, providing more details and context. The design focuses on readability and a clean presentation of news content. We will ensure that images and other media are well-integrated. Ethiopian News aims to be a trustworthy and bold voice, connecting deeply with its readership and the Ethiopian identity.</p><h3>A Subheading within the Article</h3><p>This paragraph follows a subheading, demonstrating content structure. We can include lists, blockquotes, and other rich text elements here in the future. The goal is to provide a seamless and informative reading experience. Future enhancements will include real-time updates, multimedia galleries, and interactive elements.</p>",
  tags: ["sample", "news", "development", "ethiopia", "journalism"],
  relatedArticles: [
    {
      id: 301,
      title: "Understanding Ethiopian Coffee Traditions",
      excerpt: "A look into the rich history and cultural significance of coffee in Ethiopia.",
      imageUrl: "/placeholders/placeholder-image.png",
      category: "Culture",
      slug: "understanding-ethiopian-coffee-traditions"
    },
    {
      id: 302,
      title: "The Future of Tech in the Horn of Africa",
      excerpt: "Exploring the potential and challenges for technological advancement in the region.",
      imageUrl: null,
      category: "Technology",
      slug: "future-of-tech-horn-of-africa"
    },
    {
      id: 303,
      title: "Addis Ababa's Urban Development Projects",
      excerpt: "An overview of ongoing construction and infrastructure changes in the capital city.",
      imageUrl: "/placeholders/placeholder-image.png",
      category: "Urbanism",
      slug: "addis-ababa-urban-development"
    }
  ]
};

const ArticlePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // For now, always returning the sample article data, ignoring the slug
  // In a real app: fetch article based on slug
  const articleData = sampleArticleData;

  if (router.isFallback) {
    return <div>Loading article...</div>;
  }

  if (!articleData) {
    // This case won't be hit with current hardcoded data but is good for real fetching
    return <div>Article not found.</div>;
  }

  return (
    <div> {/* Consider adding a class from styles.ArticlePage if needed */}
      <Head>
        <title>{articleData.title} - Ethiopian News</title>
        <meta name="description" content={articleData.excerpt || articleData.title} />
        {/* Add other relevant meta tags for articles: author, published_time, etc. */}
      </Head>

      <Header />
      <ArticleLayout articleData={articleData} />
      <Footer />
    </div>
  );
};

export default ArticlePage;

// If using getStaticProps for dynamic routes (example, not fully implemented for this task)
// export async function getStaticPaths() {
//   // Fetch all possible slugs or define a few for build time
//   return {
//     paths: [{ params: { slug: 'sample-article-title' } }],
//     fallback: true, // or 'blocking' or false
//   };
// }

// export async function getStaticProps({ params }) {
//   // Fetch article data based on params.slug
//   // const articleData = await fetchArticleBySlug(params.slug);
//   // For now, just return the sample data if slug matches
//   if (params.slug === sampleArticleData.slug) {
//     return {
//       props: { articleData: sampleArticleData },
//       revalidate: 60, // Optional: ISR revalidation period in seconds
//     };
//   }
//   return { notFound: true };
// }
