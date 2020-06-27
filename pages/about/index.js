import styled from 'styled-components';
import Head from '../../components/head';
import Nav from '../../components/nav';
import Profile from '../../components/about/profile'

export default () => (
  <div>
    <Head title="このブログについて｜kagepediaのエンジニアブログ" />
    <Nav />
    <Title>About</Title>
    <Profile />
  </div>
);

const Title = styled.h1`
  text-align: center;
`;