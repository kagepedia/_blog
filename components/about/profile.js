import styled from 'styled-components';

const Profile = () => (
    <Wrapper>
        <div className="profile--basic">
            <h2>Profile</h2>
            <ProfileImage src="/static/profile.JPG" alt="プロフィール画像" />
            <h3>Soichiro Kage</h3>
            <p>WEB制作会社でプログラマーをやっている24歳です。<br />
            当ブログでは、自分が技術を通して得た知見を主に発信していきます。<br />
            趣味は、旅行・写真・ゲームです。
            </p>
        </div>
    </Wrapper>
);

const Wrapper = styled.section`
  text-align: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  border: 3px solid green;
`;

export default Profile;
