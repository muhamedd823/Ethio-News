import Image from 'next/image';
import Link from 'next/link'; // For breadcrumbs and tags
import ArticleCard from './ArticleCard'; // For Related Articles
import styles from './ArticleLayout.module.css';

const ArticleLayout = ({ articleData }) => {
  if (!articleData) {
    return <p>Article data is not available.</p>;
  }

  const {
    title,
    author,
    date,
    imageUrl,
    imageCaption,
    body,
    tags,
    relatedArticles,
    category // Assuming category might be part of articleData for breadcrumbs
  } = articleData;

  const placeholderImage = "/placeholders/placeholder-image.png";

  return (
    <div className={styles.articleContainer}>
      <nav className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt;
        {category && <Link href={`/category/${category.toLowerCase()}`}>{category}</Link>}
        {category && ' > '}
        <span>{title}</span>
      </nav>

      <article>
        <header className={styles.header}>
          <h1 className={styles.headline}>{title}</h1>
          <div className={styles.metadata}>
            <span className={styles.author}>By {author || "Staff Reporter"}</span>
            <span className={styles.date}>{date}</span>
          </div>
          <div className={styles.socialShareTop}>
            {/* Placeholder social share buttons */}
            <span>[Share FB]</span> <span>[Share TW]</span> <span>[Share LN]</span> <span>[Email]</span>
          </div>
        </header>

        {imageUrl && (
          <figure className={styles.featuredImageContainer}>
            <Image
              src={imageUrl || placeholderImage}
              alt={imageCaption || title}
              width={800} // Adjust width as per design
              height={450} // Adjust height
              className={styles.featuredImage}
              priority // Good for LCP on article pages
              onError={(e) => { e.target.src = placeholderImage; }}
            />
            {imageCaption && <figcaption className={styles.imageCaption}>{imageCaption}</figcaption>}
          </figure>
        )}

        {/* Article Body - Ensure body HTML is sanitized if coming from a CMS */}
        <div className={styles.articleBody} dangerouslySetInnerHTML={{ __html: body || "<p>No content available.</p>" }} />

        {tags && tags.length > 0 && (
          <div className={styles.tagsSection}>
            <h4 className={styles.tagsTitle}>Tags:</h4>
            <ul className={styles.tagsList}>
              {tags.map(tag => (
                <li key={tag} className={styles.tagItem}>
                  <Link href={`/tags/${tag.toLowerCase()}`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.actionsFooter}>
            <div className={styles.likeButton}>
                <button>[Like 👍]</button>
                {/* Add count later */}
            </div>
            <div className={styles.socialShareBottom}>
                {/* Placeholder social share buttons */}
                <span>[Share FB]</span> <span>[Share TW]</span>
            </div>
        </div>
      </article>

      {relatedArticles && relatedArticles.length > 0 && (
        <section className={styles.relatedArticlesSection}>
          <h3 className={styles.sectionTitle}>Related Articles</h3>
          <div className={styles.relatedArticlesGrid}>
            {relatedArticles.map(related => (
              <ArticleCard
                key={related.id}
                title={related.title}
                excerpt={related.excerpt}
                imageUrl={related.imageUrl}
                category={related.category}
                // href={`/article/${related.slug}`} // Assuming ArticleCard will take href
              />
            ))}
          </div>
        </section>
      )}

      <section className={styles.commentsSection}>
        <h3 className={styles.sectionTitle}>Comments</h3>
        <div className={styles.commentPlaceholder}>
          <p>Comment system will be integrated here.</p>
          <textarea placeholder="Join the conversation..." rows="4"></textarea>
          <button>Submit Comment</button>
        </div>
      </section>
    </div>
  );
};

export default ArticleLayout;
