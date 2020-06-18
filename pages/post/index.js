import { useEffect, useState } from 'react'
import Head from '../../components/head';
import Nav from '../../components/nav';
import Post from '../../components/post'
import '../../styles/post/post.scss'
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

  return (
    <div>
      <Head title="記事一覧｜kagepediaのエンジニアブログ" />
      <Nav />
      <div className="hero">
        <h1 className="title">Welcome to Post Pages</h1>
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
      </div>
    </div>
  );
}
