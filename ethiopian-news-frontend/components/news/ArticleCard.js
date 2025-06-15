import Image from 'next/image';
import Link from 'next/link'; // Import Link
import styles from './ArticleCard.module.css';

const ArticleCard = ({ title, excerpt, imageUrl, category, href }) => { // Added href prop
  const placeholderImage = "/placeholders/placeholder-image.png";

  const cardContent = (
    <>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl || placeholderImage}
          alt={title || "Article image"}
          width={400}
          height={250}
          className={styles.image}
          onError={(e) => { e.target.src = placeholderImage; }}
        />
      </div>
      <div className={styles.content}>
        {category && <span className={styles.category}>{category}</span>}
        <h3 className={styles.title}>{title || "Sample Article Title"}</h3>
        <p className={styles.excerpt}>{excerpt || "This is a brief description of the article."}</p>
        {/* Removed the generic "Read More" anchor, link is now on the card itself if href is provided */}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles.cardLink}>
        <div className={styles.card}>
          {cardContent}
        </div>
      </Link>
    );
  }

  // Fallback if no href (though typically cards should link somewhere)
  return (
    <div className={styles.card}>
      {cardContent}
      {/* Optionally, add a non-linked "Read More" or other indicator if it's not clickable */}
    </div>
  );
};

export default ArticleCard;
