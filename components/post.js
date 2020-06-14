import Link from 'next/link';
const Post = ({ title, publishDate, slug }) => (
    <div className="container">
      <Link href="/post/[slug]" as={`/post/${slug}`}>
        <div className="text">
          <h2>{title}</h2>
          <h4>{publishDate}</h4>
        </div>
      </Link>
  </div>
);

export default Post;
