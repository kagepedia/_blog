import Link from 'next/link';
import styled from 'styled-components';
import { media } from '../utils/style'
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';

const Post = ({ img_url, img_alt, title, publishDate, discription, slug }) => (
  <StyledLink href={"/post/" + slug}>
    <Wrapper>
      <ThumbnailImage src={img_url} alt={img_alt} />
      <PostDetail>
        <CalenderIcon><ScheduleOutlinedIcon className="calender" fontSize="default"/></CalenderIcon>
        <Date>{publishDate}</Date>
        <Title>{title}</Title>
        <Discription>{discription}</Discription>
      </PostDetail>
    </Wrapper>
  </StyledLink>
);

const StyledLink = styled.a`
  text-decoration: none;
  color: #000000;
`;

const Wrapper = styled.div`
  border: solid 2px #000000;
  margin-bottom: 15px;
  cursor: pointer;
  height: auto;
  display: flex;
  :hover {
    background-color: #d3d3d3;
  }
  ${media.desktop`
    color: red;
  `}
  ${media.tablet`
    color: blue;
  `}
  ${media.phone`
    color: green;
  `}
`;

const PostDetail = styled.div`
  width: 100%;
  height: auto;
`;

const ThumbnailImage = styled.img`
  width: 30%;
  height: auto;
  object-fit: cover;
`;

const CalenderIcon = styled.div`
  float: left;
  margin-left: 4px;
`;

const Date = styled.h4`
  margin: 2px 10px 0px 35px;
`;

const Title = styled.h2`
  margin: 10px 0 0 10px;
`;

const Discription = styled.p`
  margin: 10px 0 0 10px;
  white-space:pre-wrap;
  color: #808080;
`;

export default Post;
