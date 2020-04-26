import { useEffect, useState } from 'react'
import Head from '../../components/head';
import Nav from '../../components/nav';
import Post from '../../components/post'

const client = require('contentful').createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
})

function HomePage() {
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
}

export default () => (  
  <div>
    <Head title="Home" />
    <Nav />
    <div className="hero">
      <h1 className="title">Welcome to Post Pages</h1>
      {posts.length > 0
        ? posts.map(p => (
            <Post
              title={p.fields.title}
              publishDate={p.fields.publishDate}
              key={p.fields.title}
              url={p.fields.url}
              slug={p.fields.slug}
            />
          ))
        : null}
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        padding-bottom: 12px;
        line-height: 1.15;
        font-size: 37px;
      }
      .title {
        text-align: center;
      }
    `}</style>
  </div>
);
