import Head from '../../components/head';
import Nav from '../../components/nav';
import Profile from '../../components/about/profile'
import '../../styles/about/about.scss'

export default () => (
  <div>
    <Head title="このブログについて｜kagepediaのエンジニアブログ" />
    <Nav />
    <div className="hero">
      <h1 className="title">About</h1>
    </div>
    <Profile />
  </div>
);
