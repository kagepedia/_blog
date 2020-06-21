import Head from '../../components/head';
import Nav from '../../components/nav';
import Form from '../../components/contact/form'
import '../../styles/contact/contact.scss'

export default () => (
  <div>
    <Head title="お問合せフォーム[入力画面]｜kagepediaのエンジニアブログ" />
    <Nav />
    <div className="hero">
      <h1>Welcome to Conatct Pages</h1>
    </div>
    <b>入力画面</b>
    <Form />
  </div>
);
