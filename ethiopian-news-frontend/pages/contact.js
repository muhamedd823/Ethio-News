import Head from 'next/head';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Contact Us - Ethiopian News</title>
        <meta name="description" content="Get in touch with Ethiopian News. Find our contact details or send us a message." />
      </Head>

      <Header />

      <main className={styles.mainContent}>
        <h1 className={styles.title}>Contact Us</h1>

        <p className={styles.introText}>
          We value your feedback, news tips, and inquiries. Please feel free to reach out to us using the information below, or fill out our contact form.
        </p>

        <div className={styles.contactGrid}>
          <section className={`${styles.section} ${styles.contactDetails}`}>
            <h2 className={styles.subtitle}>Our Information</h2>
            <p><strong>Ethiopian News Headquarters</strong></p>
            <p>123 News Avenue, Bole Sub-city</p>
            <p>Addis Ababa, Ethiopia</p>
            <br />
            <p><strong>Email:</strong> <a href="mailto:info@ethiopiannews.example.com">info@ethiopiannews.example.com</a></p>
            <p><strong>Phone:</strong> +251-11-123-4567</p>
            <br />
            <p><strong>For News Tips:</strong> <a href="mailto:tips@ethiopiannews.example.com">tips@ethiopiannews.example.com</a></p>
            <p><strong>For Advertising:</strong> <a href="mailto:ads@ethiopiannews.example.com">ads@ethiopiannews.example.com</a></p>
          </section>

          <section className={`${styles.section} ${styles.contactFormContainer}`}>
            <h2 className={styles.subtitle}>Send Us a Message</h2>
            <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}> {/* Basic form, no functionality */}
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </section>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
