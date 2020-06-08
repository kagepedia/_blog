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
  </div>
);
