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

import styled from 'styled-components';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';


const Post = ({ img_url, img_alt, title, publishDate, discription, body }) => (
    <Wrapper>
      <ThumbnailImage><img src={img_url} alt={img_alt} /></ThumbnailImage>
      <Title>{title}</Title>
      <CalenderIcon><ScheduleOutlinedIcon fontSize="default"/></CalenderIcon>
      <Date>{publishDate}</Date>
      <Discription>{discription}</Discription>
      <Article dangerouslySetInnerHTML={{__html: md.render(body)}} />
    </Wrapper>
);

const Wrapper = styled.div`
`;

const ThumbnailImage = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
`;

const CalenderIcon = styled.div`
  margin: 0 0 0 47%;
  float: left;
`;

const Date = styled.h4`
  margin-left: 48.5%;
`;

const Discription = styled.p`
  text-align: center;
`;

const Article = styled.div`
  margin: 2% 24%;
  code {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
  }
  pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    code {
        padding: 0;
        font-size: inherit;
        color: inherit;
        white-space: pre-wrap;
        background-color: transparent;
        border-radius: 0;
    }
  }
  dd {
    margin: 0;
  }
  img {
    width: 20%;
  }
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eeeeee;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    th, td {
        padding: 10px 0;
        text-align: center;
    }
    tr:nth-child(even){
        background: #d9d9d9;
    }
  }
`;

export default Post;
