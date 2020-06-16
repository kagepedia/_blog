import Link from 'next/link';
const Post = ({ img_url, img_alt, title, publishDate, slug }) => (
  <Link href="/post/[slug]" as={`/post/${slug}`}>
    <div className="container">
      <div className="thumbnail">
        <img src={img_url} alt={img_alt} />
      </div>
      <div className="text">
        <h2>{title}</h2>
        <h4>{publishDate}</h4>
      </div>
    </div>
  </Link>
);

export default Post;
