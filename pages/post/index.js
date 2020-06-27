import { useEffect, useState } from 'react'
import styled from 'styled-components';
import Head from '../../components/head';
import Nav from '../../components/nav';
import Post from '../../components/post'
import { formatDate } from '../../utils/date'
import { noImage } from '../../utils/image'

const client = require('contentful').createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
})

export default () => {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  // style
  const Wrapper = styled.div`
    margin: 2% 24%;
  `;

  const Title = styled.h1`
    text-align: center;
  `;

  return (
    <div>
      <Head title="記事一覧｜kagepediaのエンジニアブログ" />
      <Nav />
      <Wrapper>
        <Title>Post</Title>
        {posts.length > 0
          ? posts.map(p => (
              <Post
                img_url={noImage(p).url}
                img_alt={noImage(p).title}
                title={p.fields.title}
                publishDate={formatDate(p.fields.publishDate)}
                discription={p.fields.discription}
                slug={p.fields.slug}
                key={p.fields.slug}
              />
            ))
          : null}
      </Wrapper>
    </div>
  );
}
