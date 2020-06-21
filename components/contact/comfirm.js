const Comfirm = () => (
    <div className="contact contact--comfirm">
        <form method="post" action="/contact/thanks">
        <table>
            <tr>
                <th>お名前 <span className="required">必須</span></th>
                <td>田中　太郎</td>
            </tr>
            <tr>
                <th>フリガナ <span className="required">必須</span></th>
                <td>タナカ　タロウ</td>
            </tr>
            <tr>
                <th>メールアドレス <span className="required">必須</span></th>
                <td>tanaka@example.com</td>
            </tr>
            <tr>
                <th>電話番号</th>
                <td>090-0000-0000</td>
            </tr>
            <tr>
                <th>お問合せ内容 <span className="required">必須</span></th>
                <td>お問い合わせ内容</td>
            </tr>
        </table>
        <input type="submit" value="戻る" />
        <input type="submit" value="送信する" />
        </form>
    </div>
);

export default Comfirm;
