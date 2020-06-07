// markdown-it-plugin
const md = require('markdown-it')({
  breaks: true,
  html: true,
  linkify: true,
  typography: true,
})
.use(require('markdown-it-emoji'))
.use(require('markdown-it-sup'))
.use(require('markdown-it-sub'))
.use(require('markdown-it-ins'))
.use(require('markdown-it-mark'))
.use(require('markdown-it-footnote'))
.use(require('markdown-it-deflist'))
.use(require('markdown-it-abbr'))
.use(require('markdown-it-container'), "info")
.use(require('markdown-it-container'), "success")
.use(require('markdown-it-container'), "warning")
.use(require('markdown-it-container'), "danger")
.use(require('markdown-it-highlightjs'))
.use(require('markdown-it-katex'))
// markdown-it-plugin

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
