import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';

// Simplified Article component for Hero Section items
const HeroArticleItem = ({ article, main = false }) => {
  const placeholderImage = "/placeholders/placeholder-image.png";
  if (!article) return null;

  return (
    <Link href={`/article/${article.id}`} className={main ? styles.mainArticle : styles.secondaryArticle}>
      <div className={styles.imageContainer}>
        <Image
          src={article.imageUrl || placeholderImage}
          alt={article.title}
          fill
          className={styles.image}
          sizes={main ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 50vw, 30vw"}
          onError={(e) => { e.target.src = placeholderImage; }}
        />
      </div>
      <div className={styles.textOverlay}>
        {article.category && !main && <span className={styles.category}>{article.category}</span>}
        <h2 className={styles.title}>{article.title}</h2>
        {main && article.excerpt && <p className={styles.excerpt}>{article.excerpt}</p>}
      </div>
    </Link>
  );
};

const HeroSection = ({ mainStory, secondaryStories }) => {
  if (!mainStory) {
    return <div className={styles.heroContainerEmpty}>No main story to display.</div>;
  }

  return (
    <section className={styles.heroContainer}>
      <div className={styles.mainStory}>
        <HeroArticleItem article={mainStory} main={true} />
      </div>
      {secondaryStories && secondaryStories.length > 0 && (
        <div className={styles.secondaryStories}>
          {secondaryStories.slice(0, 2).map(story => ( // Max 2 secondary stories
            <HeroArticleItem key={story.id} article={story} />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
