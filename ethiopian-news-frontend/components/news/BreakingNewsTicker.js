import styles from './BreakingNewsTicker.module.css';

const BreakingNewsTicker = ({ newsItems }) => {
  if (!newsItems || newsItems.length === 0) {
    return null; // Don't render if no news items
  }

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.label}>BREAKING NEWS</div>
      <div className={styles.newsScroll}>
        <div className={styles.newsContent}>
          {newsItems.map((item, index) => (
            <span key={index} className={styles.newsItem}>
              {item}
            </span>
          ))}
          {/* Duplicate content for seamless scroll effect if using pure CSS animation */}
          {newsItems.map((item, index) => (
            <span key={`dup-${index}`} className={styles.newsItem}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTicker;
