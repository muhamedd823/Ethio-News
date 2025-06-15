import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ArticleCard from '../components/news/ArticleCard';
import { allArticles } from '../utils/articles';
import styles from '../styles/SearchPage.module.css';

const SearchPage = () => {
  const router = useRouter();
  const { q: searchQuery } = router.query; // q is the query parameter name

  let filteredArticles = [];
  let message = '';

  if (!searchQuery) {
    message = 'Please enter a search term above to find articles.';
  } else {
    const lowerCaseQuery = searchQuery.toLowerCase();
    filteredArticles = allArticles.filter(article => {
      const titleMatch = article.title && article.title.toLowerCase().includes(lowerCaseQuery);
      const excerptMatch = article.excerpt && article.excerpt.toLowerCase().includes(lowerCaseQuery);
      // const bodyMatch = article.body && article.body.toLowerCase().includes(lowerCaseQuery); // Optional: search in body
      return titleMatch || excerptMatch; // || bodyMatch;
    });

    if (filteredArticles.length === 0) {
      message = `No results found for "${searchQuery}". Try a different search term.`;
    }
  }

  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>{searchQuery ? `Search results for "${searchQuery}"` : "Search"} - Ethiopian News</title>
        <meta name="description" content={`Search results for news articles on Ethiopian News. Query: ${searchQuery || ''}`} />
      </Head>

      <Header />

      <main className={styles.mainContent}>
        {searchQuery && (
          <h1 className={styles.searchTitle}>
            Search Results for: "<span className={styles.queryText}>{searchQuery}</span>"
          </h1>
        )}

        {message && <p className={styles.searchMessage}>{message}</p>}

        {filteredArticles.length > 0 && (
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
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;
