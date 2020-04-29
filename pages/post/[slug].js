import { useRouter } from 'next/router'
import Head from '../../components/head';
import Nav from '../../components/nav';
import PostDetail from '../../components/postdetail'

const client = require('contentful').createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
})

// functions
export async function getStaticPaths() {
  const entries = await client.getEntries()  
  const paths = entries.items.map(post => `/post/${post.fields.slug}`)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const slug = params.slug
  const entries = await client.getEntries({
    'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
    'fields.slug': slug,
  })
  const post = entries.items[0]
  return { props: { post } }
}

// render
function Detail({ post }) {
  const router = useRouter()
  if(router.isFallback){
    return <div>Loading...</div>
  }
  return (
    <div>
      <Head title="Home" />
      <Nav />
      <div className="hero">
        <h1 className="title">Welcome to Post Detail Pages</h1>
        {post ?
          <PostDetail
            title={post.fields.title}
            publishDate={post.fields.publishDate}
            discription={post.fields.discription}
            body={post.fields.body}
            key={post.fields.slug}
            />
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
}

export default Detail
