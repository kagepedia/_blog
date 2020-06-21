import Head from '../../components/head';
import Nav from '../../components/nav';
import Thanks from '../../components/contact/thanks'
import '../../styles/contact/contact.scss'

export default () => (
  <div>
    <Head title="お問合せフォーム[完了画面]｜kagepediaのエンジニアブログ" />
    <Nav />
    <div className="hero">
      <h1>Welcome to Conatct Pages</h1>
    </div>
    <b>完了画面</b>
    <Thanks />
  </div>
);
