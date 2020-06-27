import styled from 'styled-components';
import Head from '../../components/head';
import Nav from '../../components/nav';

export default () => (
  <div>
    <Head title="お問合せフォーム｜kagepediaのエンジニアブログ" />
    <Nav />
    <Title>Conatct</Title>
  </div>
);

const Title = styled.h1`
  text-align: center;
`;
