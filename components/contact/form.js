const Form = () => (
    <div className="contact contact--form">
        <form method="post" action="/contact/comfirm">
        <table>
            <tbody>
                <tr>
                    <th>お名前 <span className="required">必須</span></th>
                    <td><input name="name" type="text" placeholder="田中　太郎" /></td>
                </tr>
                <tr>
                    <th>フリガナ <span className="required">必須</span></th>
                    <td><input name="ruby" type="text" placeholder="タナカ　タロウ" /></td>
                </tr>
                <tr>
                    <th>メールアドレス <span className="required">必須</span></th>
                    <td><input name="mail" type="email" placeholder="tanaka@example.com" /></td>
                </tr>
                <tr>
                    <th>電話番号</th>
                    <td><input name="tel" type="tel" placeholder="090-0000-0000" /></td>
                </tr>
                <tr>
                    <th>お問合せ内容 <span className="required">必須</span></th>
                    <td><textarea name="contents" type="text" placeholder="お問い合わせ内容" /></td>
                </tr>
            </tbody>
        </table>
        <input type="submit" value="送信する" />
        </form>
    </div>
);

export default Form;
