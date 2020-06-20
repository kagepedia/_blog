const Profile = () => (
    <section>
        <div className="profile--basic">
            <h2>Profile</h2>
            <img src="/static/profile.JPG" alt="プロフィール画像" />
            <h3>Soichiro Kage</h3>
            <p>WEB制作会社でプログラマーをやっている24歳です。<br />
            当ブログでは、自分が技術を通して得た知見を主に発信していきます。<br />
            趣味は、旅行・写真・ゲームです。
            </p>
        </div>
        <div className="profile--skills">
            <h2>Skills</h2>
            <ul>
                <li>
                    <span></span>
                    <p>Javascript</p>
                </li>
            </ul>
        </div>
    </section>
);

export default Profile;
