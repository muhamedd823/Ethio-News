import { useState } from 'react'; // Import useState
import { useRouter } from 'next/router'; // Import useRouter
import Logo from './Logo';
import Navigation from './Navigation';
import styles from './Header.module.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Politics', href: '/category/politics' },
    { label: 'Economy', href: '/category/economy' },
    { label: 'Technology', href: '/category/technology' },
    { label: 'Society & Culture', href: '/category/society-culture' },
    { label: 'Opinion', href: '/category/opinion' },
    { label: 'Sports', href: '/category/sports' },
    { label: 'World', href: '/category/world' },
  ];

  const moreLinks = [
    { label: 'Health', href: '/category/health' },
    { label: 'Education', href: '/category/education' },
    { label: 'Diaspora News', href: '/category/diaspora-news' }, // Example, ensure slug matches
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(''); // Optionally clear search query after submission
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoArea}>
          <Logo />
        </div>

        <div className={styles.mainNav}>
          <Navigation navLinks={navLinks} moreLinks={moreLinks} />
        </div>

        <div className={styles.actions}>
          <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
            <input
              type="search"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              {/* Search Icon (e.g., SVG or text) */}
              <span>🔍</span>
            </button>
          </form>
          <div className={styles.languageSwitcher}>
            <button className={styles.langButton} title="Switch to English">English</button>
            <span className={styles.langSeparator}>|</span>
            <button className={styles.langButton} title="Switch to አማርኛ">አማርኛ</button>
            <span className={styles.langSeparator}>|</span>
            <button className={styles.langButton} title="Switch to Afaan Oromoo">Afaan Oromoo</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
