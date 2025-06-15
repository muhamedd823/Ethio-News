import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ArticleCard from '../../components/news/ArticleCard';
import styles from '../../styles/CategoryPage.module.css';
import { allArticles } from '../../utils/articles'; // Import from the new location

// Function to capitalize category name for display
const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  // Handle "society-culture" specifically for better display if needed, or make slug generation more robust
  if (s === 'society-culture') return 'Society & Culture';
  return s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');
};

const CategoryPage = () => {
  const router = useRouter();
  const { categoryName } = router.query;

  if (router.isFallback || !categoryName) {
    return <div>Loading...</div>;
  }

  const currentCategorySlug = categoryName.toLowerCase();
  const filteredArticles = allArticles.filter(
    // Ensure comparison is robust, e.g. category "Society & Culture" becomes slug "society-culture"
    article => article.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and') === currentCategorySlug
  );

  const displayCategoryName = capitalize(currentCategorySlug);

  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Category: {displayCategoryName} - Ethiopian News</title>
        <meta name="description" content={`Articles in the ${displayCategoryName} category.`} />
      </Head>

      <Header />

      <main className={styles.mainContent}>
        <h1 className={styles.categoryTitle}>Category: {displayCategoryName}</h1>

        {filteredArticles.length > 0 ? (
          <div className={styles.articlesGrid}>
            {filteredArticles.map(article => (
              <ArticleCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                imageUrl={article.imageUrl}
                category={article.category}
                href={`/article/${article.slug}`}
              />
            ))}
          </div>
        ) : (
          <p className={styles.noArticlesMessage}>
            No articles found in the "{displayCategoryName}" category yet. Please check back later.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
