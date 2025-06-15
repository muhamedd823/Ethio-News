import Head from 'next/head';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>About Us - Ethiopian News</title>
        <meta name="description" content="Learn more about Ethiopian News, our mission, vision, and values." />
      </Head>

      <Header />

      <main className={styles.mainContent}>
        <h1 className={styles.title}>About Ethiopian News</h1>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Our Mission</h2>
          <p>
            Ethiopian News is dedicated to providing accurate, timely, and comprehensive news coverage of Ethiopia and the Horn of Africa. We strive to empower our readers with information that matters, fostering understanding and promoting constructive dialogue. Our commitment is to journalistic integrity, balanced reporting, and serving the public interest.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Our Vision</h2>
          <p>
            To be the most trusted and influential source of news and information for Ethiopians worldwide and for anyone interested in the region. We envision a future where informed citizens contribute to a thriving, democratic, and prosperous Ethiopia, and we aim to be a catalyst for that positive change.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Our Values</h2>
          <ul className={styles.valuesList}>
            <li><strong>Accuracy:</strong> We are committed to factual reporting, verifying information before publication, and correcting errors promptly and transparently.</li>
            <li><strong>Impartiality:</strong> We aim for fairness and balance in our coverage, presenting diverse perspectives without bias.</li>
            <li><strong>Independence:</strong> Our journalism is free from undue influence, whether political, commercial, or personal.</li>
            <li><strong>Accountability:</strong> We are accountable to our audience and uphold the highest ethical standards.</li>
            <li><strong>Respect:</strong> We treat our subjects, sources, and readers with respect, reflecting the rich diversity of Ethiopian society.</li>
            <li><strong>Innovation:</strong> We embrace new technologies and storytelling methods to engage our audience effectively.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Our Team</h2>
          <p>
            Ethiopian News is powered by a dedicated team of experienced journalists, editors, designers, and technologists who are passionate about Ethiopia and committed to excellence in news delivery. (Placeholder for more team details or a link to a team page).
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
