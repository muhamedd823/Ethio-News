import { useState, useEffect, useRef } from 'react'; // Added useEffect, useRef
import Link from 'next/link';
import { useRouter } from 'next/router'; // For active link styling (optional part)
import styles from './Navigation.module.css';

const Navigation = ({ navLinks, moreLinks }) => {
  const [showMore, setShowMore] = useState(false);
  const router = useRouter(); // For active link
  const moreDropdownRef = useRef(null); // For click outside to close

  const toggleShowMore = () => {
    setShowMore(prev => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setShowMore(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const isLinkActive = (href) => {
    if (href === '/') {
      return router.pathname === href;
    }
    // For category pages, check if the pathname starts with the category href
    if (href.startsWith('/category/')) {
      return router.pathname.startsWith(href);
    }
    return router.pathname === href;
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navLinks && navLinks.map((link) => (
          <li key={link.label} className={styles.navItem}>
            <Link
              href={link.href}
              className={`${styles.navLink} ${isLinkActive(link.href) ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}

        {moreLinks && moreLinks.length > 0 && (
          <li
            className={`${styles.navItem} ${styles.dropdownContainer}`}
            ref={moreDropdownRef}
          >
            <span
              className={`${styles.navLink} ${styles.moreButton} ${showMore ? styles.activeMore : ''}`}
              onClick={toggleShowMore}
              role="button" // Semantics for clickability
              tabIndex={0} // Make it focusable
              onKeyDown={(e) => e.key === 'Enter' && toggleShowMore()} // Keyboard accessibility
            >
              More {showMore ? '▲' : '▼'}
            </span>
            {showMore && (
              <div className={styles.dropdownContent}>
                {moreLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`${styles.dropdownLink} ${isLinkActive(link.href) ? styles.activeDropdownLink : ''}`}
                    onClick={() => setShowMore(false)} // Close dropdown on link click
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
