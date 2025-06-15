import ArticleCard from './ArticleCard';
import styles from './FeaturedStoriesSection.module.css';

const FeaturedStoriesSection = ({ featuredArticles }) => {
  if (!featuredArticles || featuredArticles.length === 0) {
    return null;
  }

  return (
    <section className={styles.featuredSection}>
      <h2 className={styles.sectionTitle}>Featured Stories</h2>
      <div className={styles.articlesContainer}>
        {featuredArticles.map(article => (
          <ArticleCard
            key={article.id}
            title={article.title}
            excerpt={article.excerpt}
            imageUrl={article.imageUrl}
            category={article.category}
            // You might want to add a specific style or prop for featured cards if needed
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedStoriesSection;
