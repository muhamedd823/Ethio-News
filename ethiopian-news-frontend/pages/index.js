import Head from 'next/head';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BreakingNewsTicker from '../components/news/BreakingNewsTicker';
import HeroSection from '../components/news/HeroSection';
import FeaturedStoriesSection from '../components/news/FeaturedStoriesSection';
import ArticleCard from '../components/news/ArticleCard';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  const breakingNews = [
    "Government announces new infrastructure projects.",
    "Ethiopian athletes shine at international competition.",
    "Record coffee harvest reported this season.",
    "Tech conference to be held in Addis Ababa next month.",
  ];

  const mainHeroStory = {
    id: 101,
    title: "Major Policy Shift Aims to Boost National Economy",
    excerpt: "The new framework introduces several measures intended to attract investment and stimulate growth across key sectors.",
    imageUrl: "/placeholders/placeholder-image.png",
    category: "Economy",
    slug: "major-policy-shift" // Added slug for linking
  };

  const secondaryHeroStories = [
    {
      id: 102,
      title: "Cultural Exchange Program Launched with Neighboring Countries",
      imageUrl: "/placeholders/placeholder-image.png",
      category: "Culture",
      slug: "cultural-exchange"
    },
    {
      id: 103,
      title: "Advances in Agricultural Technology Improve Crop Yields",
      imageUrl: "/placeholders/placeholder-image.png",
      category: "Technology",
      slug: "advances-agri-tech"
    },
  ];

  // Update HeroSection to pass slugs to its HeroArticleItem if it handles links internally
  // For now, HeroArticleItem in HeroSection.js already uses Link with `/article/${article.id}`.
  // If a proper slug is desired, HeroSection and HeroArticleItem should be updated.
  // For this task, we'll focus on linking from a standard ArticleCard.

  const featuredArticles = [
    {
      id: 201,
      title: "Inside Ethiopia's Booming Tech Scene",
      excerpt: "A deep dive into the startups and innovators driving Ethiopia's digital transformation.",
      imageUrl: "/placeholders/placeholder-image.png",
      category: "Technology",
      slug: "ethiopia-tech-scene"
    },
    {
      id: 202,
      title: "The Ancient Churches of Lalibela: A Journey Through Time",
      excerpt: "Explore the rock-hewn masterpieces that continue to inspire awe and devotion.",
      imageUrl: null,
      category: "Heritage",
      slug: "lalibela-churches"
    },
    {
      id: 203,
      title: "Sustainable Farming Initiatives Take Root",
      excerpt: "How local communities are embracing eco-friendly practices for a greener future.",
      imageUrl: "/placeholders/placeholder-image.png",
      category: "Environment",
      slug: "sustainable-farming"
    },
    {
      id: 204,
      title: "Young Entrepreneurs Leading Change",
      excerpt: "Meet the new generation of business leaders making their mark.",
      imageUrl: "/placeholders/placeholder-image.png",
      category: "Business",
      slug: "young-entrepreneurs"
    }
  ];

  const latestArticles = [
    {
      id: 1,
      title: "Historic Agreement Reached in Addis Ababa (Click to Read Sample)",
      excerpt: "Leaders gathered in the capital to sign a landmark deal aimed at fostering regional economic cooperation.",
      imageUrl: "/placeholders/placeholder-image.png",
      category: "Politics",
      slug: "sample-article-title" // This will link to our sample article
    },
    {
      id: 2,
      title: "New Art Exhibition Opens Downtown",
      excerpt: "The gallery showcases contemporary Ethiopian artists exploring themes of identity and change.",
      imageUrl: null,
      category: "Arts",
      slug: "art-exhibition"
    },
    {
      id: 3,
      title: "National Football Team Prepares for Qualifiers",
      excerpt: "The Walia Ibex are in high spirits as they gear up for the upcoming continental championship qualifiers.",
      imageUrl: "/placeholders/placeholder-image.png",
      category: "Sports",
      slug: "football-qualifiers"
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Ethiopian News - Home</title>
        <meta name="description" content="Your trusted source for Ethiopian news and updates." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <BreakingNewsTicker newsItems={breakingNews} />

      <main className={styles.mainContent}>
        {/* HeroSection already uses internal linking with placeholder IDs, can be updated to use slugs later */}
        <HeroSection mainStory={mainHeroStory} secondaryStories={secondaryHeroStories} />

        <FeaturedStoriesSection
          featuredArticles={featuredArticles.map(article => ({
            ...article,
            href: `/article/${article.slug}`
          }))}
        />

        <section className={styles.latestNewsSection}>
          <h2 className={styles.sectionTitle}>Latest News</h2>
          <div className={styles.articlesGrid}>
            {latestArticles.map(article => (
              <ArticleCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                imageUrl={article.imageUrl}
                category={article.category}
                href={`/article/${article.slug}`} // Linking ArticleCard
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
