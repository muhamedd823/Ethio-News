import Link from 'next/link'; // Import Link
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/about" className={styles.footerLink}>About Us</Link>
          <Link href="/contact" className={styles.footerLink}>Contact Us</Link>
          {/* Placeholder links - can be expanded or made dynamic later */}
          <Link href="/advertise" className={styles.footerLink}>Advertise</Link>
          <Link href="/careers" className={styles.footerLink}>Careers</Link>
          <Link href="/terms-of-service" className={styles.footerLink}>Terms of Service</Link>
          <Link href="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link>
        </div>
        <div className={styles.socialMedia}>
          {/* Placeholder for social media icons - replace with actual icons/links */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>FB</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>TW</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>IG</a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>TG</a>
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Ethiopian News. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
