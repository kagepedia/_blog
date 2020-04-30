const md = require('markdown-it')({
  html: true,
  lineNumbers: true
})
.use(require('markdown-it-highlightjs'))
.use(require('markdown-it-katex'))

const Post = ({ title, publishDate, discription, body }) => (
    <div className="container">
        <div className="text">
          <h2>{title}</h2>
          <h4>{publishDate}</h4>
          <p>{discription}</p><br />
          <div dangerouslySetInnerHTML={{__html: md.render(body)}} />
        </div>

    <style jsx>{`
    .container {
      height: 453px;
      margin-bottom: 10px;
    }
    .text {
      margin-top: -160px;
      padding: 24px;
      position: absolute;
    }
    h2 {
      color: red;
      font-size: 24px;
      margin-bottom: 0;
    }
    h4 {
      color: red;
      font-size: 16px;
      font-weight: 500;
      margin-top: 8px;
    }
    `}</style>
  </div>
);

export default Post;
