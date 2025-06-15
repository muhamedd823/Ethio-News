import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <span className={styles.logoTextPrimary}>Ethiopian</span>
      <span className={styles.logoTextAccent}>News</span>
    </div>
  );
};

export default Logo;
