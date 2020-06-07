import Head from '../../components/head';
import Nav from '../../components/nav';
import styles from "./contact.module.css"

export default () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div className="hero">
      <h1 className={styles.title}>Welcome to Conatct Pages</h1>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        padding-bottom: 12px;
        line-height: 1.15;
        font-size: 37px;
      }
      .title {
        text-align: center;
      }
    `}</style>
  </div>
);
