import Link from 'next/link';
const Post = ({ img_url, img_alt, title, publishDate, discription, slug }) => (
  <Link href="/post/[slug]" as={`/post/${slug}`}>
    <a>
    <div className="container">
      <img className="thumbnail" src={img_url} alt={img_alt} />
      <div className="text">
        <h2 className="ttl">{title}</h2>
        <h4 className="date">{publishDate}</h4>
        <p className="explain">{discription}</p>
      </div>
    </div>
    </a>
  </Link>
);

export default Post;
