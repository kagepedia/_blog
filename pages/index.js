import Head from '../components/head';
import Nav from '../components/nav';
import AddIcon from '@material-ui/icons/Add';

export default () => (
  <div>
    <Head title="kagepediaのエンジニアブログ" />
    <Nav />
    <div className="hero">
      <h1 className="title">Hello Next.js</h1>
      <AddIcon fontSize="large" />
    </div>
  </div>
);
