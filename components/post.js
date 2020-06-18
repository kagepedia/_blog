import Link from 'next/link';
const Post = ({ img_url, img_alt, title, publishDate, discription, slug }) => (
  <Link href="/post/[slug]" as={`/post/${slug}`}>
    <div className="container">
      <div className="thumbnail">
        <img src={img_url} alt={img_alt} />
      </div>
      <div className="text">
        <h4 className="date">{publishDate}</h4>
        <h2 className="ttl">{title}</h2>
        <p className="explain">{discription}</p>
      </div>
    </div>
  </Link>
);

export default Post;
