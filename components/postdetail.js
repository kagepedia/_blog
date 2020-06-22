// markdown-it-plugin
const md = require('markdown-it')({
  // breaks: true,
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

import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';


const Post = ({ img_url, img_alt, title, publishDate, discription, body }) => (
    <div className="ctf">
      <div className="thumbnail"><img src={img_url} alt={img_alt} /></div>
      <h2 className="title">{title}</h2>
      <ScheduleOutlinedIcon className="calender" fontSize="default"/>
      <h4 className="date">{publishDate}</h4>
      <p  className="description">{discription}</p><br />
      <div className="article" dangerouslySetInnerHTML={{__html: md.render(body)}} />
    </div>
);

export default Post;
