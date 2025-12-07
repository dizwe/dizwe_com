import React from 'react'
import './PolicyPage.css'

const PrivacyPolicyJA: React.FC = () => {
  return (
    <div className="policy-page">
      <div className="container">
        <div className="language-selector">
          <a href="/privacy-policy" className="lang-btn">한국어</a>
          <a href="/privacy-policy/en" className="lang-btn">English</a>
          <a href="/privacy-policy/ja" className="lang-btn active">日本語</a>
        </div>
        
        <div className="policy-header">
          <h1>プライバシーポリシー</h1>
          <p className="last-updated">最終更新日: 2025年8月3日</p>
        </div>
        
        <div className="policy-content">
          <section className="policy-section">
            <h2>1. 個人情報の収集および利用目的</h2>
            <p>
              dizwe（以下「当社」または「サービス」）は、以下の目的のために個人情報を処理します：
            </p>
            <ul>
              <li>サービス提供および契約の履行</li>
              <li>会員管理および本人確認</li>
              <li>お客様のお問い合わせおよび苦情処理</li>
              <li>サービス改善および新サービスの開発</li>
              <li>マーケティングおよび広告への活用</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. 収集する個人情報の項目</h2>
            <div className="info-table">
              <h3>必須収集情報</h3>
              <ul>
                <li>メールアドレス</li>
                <li>サービス利用記録</li>
                <li>アクセスログ、Cookie、接続IP情報</li>
              </ul>
              
              <h3>選択収集情報</h3>
              <ul>
              </ul>
            </div>
          </section>

          <section className="policy-section">
            <h2>3. 個人情報の処理および保有期間</h2>
            <p>
              当社は、法令による個人情報保有・利用期間または情報主体から個人情報を収集する際に
              同意を得た個人情報保有・利用期間内で個人情報を処理・保有します。
            </p>
            <ul>
              <li>会員退会時まで（ただし、関連法令により保存する必要がある場合は該当期間）</li>
              <li>不正利用防止のための情報：1年</li>
              <li>サービス利用記録：3ヶ月</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. 個人情報の第三者提供</h2>
            <p>
              当社は、情報主体の個人情報を原則的に外部に提供しません。
              ただし、以下の場合は例外とします：
            </p>
            <ul>
              <li>情報主体が事前に同意した場合</li>
              <li>法令の規定により、または捜査目的で法令に定められた手続きと方法に従って捜査機関の要求がある場合</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. 個人情報処理の委託</h2>
            <p>
              当社は、円滑な個人情報業務処理のために、以下のように個人情報処理業務を委託しています：
            </p>
            <div className="delegation-table">
              <table>
                <thead>
                  <tr>
                    <th>委託先</th>
                    <th>委託する業務の内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Google Cloud Platform</td>
                    <td>クラウドサーバーの運営および管理</td>
                  </tr>
                  <tr>
                    <td>Google Analytics</td>
                    <td>サービス利用統計および分析</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="policy-section">
            <h2>6. 情報主体の権利・義務および行使方法</h2>
            <p>
              情報主体は、当社に対していつでも以下の個人情報保護関連の権利を行使できます：
            </p>
            <ul>
              <li>個人情報処理現況通知要求</li>
              <li>個人情報処理停止要求</li>
              <li>個人情報修正・削除要求</li>
              <li>個人情報処理現況通知要求</li>
            </ul>
            <p>
              権利行使は、個人情報保護法施行令第41条第1項により、書面、電子メール、
              ファックス（FAX）などを通じて行うことができ、当社はこれに対して遅滞なく措置します。
            </p>
          </section>

          <section className="policy-section">
            <h2>7. 個人情報の安全性確保措置</h2>
            <p>
              当社は、個人情報保護法第29条に従い、以下のように安全性確保に必要な
              技術的/管理的および物理的措置を講じています：
            </p>
            <ul>
              <li>個人情報取扱担当者の最小化および教育</li>
              <li>個人情報へのアクセス制限</li>
              <li>個人情報を保存するデータベースシステムへのアクセス権限の付与、変更、抹消を通じた個人情報へのアクセス統制</li>
              <li>ハッキングやコンピュータウイルスなどによる個人情報漏洩および毀損を防ぐためのセキュリティプログラムの設置</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>8. 個人情報保護責任者</h2>
            <div className="contact-info">
              <p>
                当社は、個人情報処理に関する業務を総括して責任を負い、個人情報処理に関する
                情報主体の苦情処理および被害救済などのために、以下のように個人情報保護責任者を指定しています。
              </p>
              <div className="responsible-person">
                <h4>個人情報保護責任者</h4>
                <ul>
                  <li>メール: dizwe@dizwe.com</li>
                  <li>連絡先: お問い合わせフォームからご連絡ください</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>9. プライバシーポリシーの変更</h2>
            <p>
              本プライバシーポリシーは施行日から適用され、法令および方針による変更内容の
              追加、削除および訂正がある場合は、変更事項の施行7日前からお知らせを通じて告知します。
            </p>
          </section>

          <section className="policy-section">
            <h2>10. 個人情報の閲覧請求</h2>
            <p>
              情報主体は、個人情報保護法第35条による個人情報の閲覧請求を以下の部署に行うことができます。
              当社は、情報主体の個人情報閲覧請求が迅速に処理されるよう努めます。
            </p>
            <div className="contact-department">
              <h4>個人情報閲覧請求受付・処理部署</h4>
              <ul>
                <li>部署名: 開発チーム</li>
                <li>メール: dizwe@dizwe.com</li>
              </ul>
            </div>
          </section>

          <div className="policy-footer">
            <p>
              個人情報保護に関してご不明な点がございましたら、いつでもご連絡ください。
            </p>
            <div className="contact-buttons">
              <a href="mailto:dizwe@dizwe.com" className="contact-btn">
                📧 お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyJA
