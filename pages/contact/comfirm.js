import Head from '../../components/head';
import Nav from '../../components/nav';
import Comfirm from '../../components/contact/comfirm'
import '../../styles/contact/contact.scss'

export default () => (
  <div>
    <Head title="お問合せフォーム[確認画面]｜kagepediaのエンジニアブログ" />
    <Nav />
    <div className="hero">
      <h1>Welcome to Conatct Pages</h1>
    </div>
    <b>確認画面</b>
    <Comfirm />
  </div>
);
