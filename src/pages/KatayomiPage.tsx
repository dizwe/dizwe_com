import React from 'react'
import './product.css'
import AppIcon from '../components/AppIcon'

const KatayomiPage: React.FC = () => {
  return (
    <div className="product-page tint-red">
      <div className="container">
        <div className="page-header">
          <div className="app-icon"><AppIcon app="katayomi" size={38} /></div>
          <h1>Katayomi</h1>
          <p className="app-subtitle">가타카나, 아는 단어인데 왜 안 읽히지?</p>
        </div>

        <section className="app-description">
          <div className="description-content">
            <h2>앱 소개</h2>
            <div className="description-text">
              <p>
                <strong>Katayomi</strong>는 가타카나를 '외우는' 앱이 아니라, 눈에 '익히는' 앱입니다.
              </p>
              <p>
                히라가나는 술술 읽는데 가타카나만 나오면 멈칫하시나요? カメラ(camera), コーヒー(coffee)처럼
                이미 영어로 아는 외래어를 매일 자주 보면서, 가타카나를 하나하나 뜯어보지 않고
                '통째로 빠르게' 읽는 감각을 만드는 게 Katayomi의 목표예요.
                글자를 처음 배우는 앱이 아니라, <strong>읽는 속도를 자동화</strong>하는 훈련 앱입니다.
              </p>

              <h3>✨ 주요 기능</h3>
              <ul className="feature-list">
                <li>
                  <span className="feature-icon">🃏</span>
                  <strong>오늘의 단어</strong> - 매일 새 외래어 카드를 뒤집으며 표기·읽기·뜻을 한 번에 확인해요
                </li>
                <li>
                  <span className="feature-icon">⚡</span>
                  <strong>속도 훈련 퀴즈</strong> - "5초 안에 읽기" 게이지로 반응 속도를 재고, 얼마나 빨라졌는지 눈으로 확인해요
                </li>
                <li>
                  <span className="feature-icon">🎚️</span>
                  <strong>난이도 선택</strong> - 쉬움·보통·어려움. 특수음·장음이 섞인 긴 단어까지 단계별로 도전하세요
                </li>
                <li>
                  <span className="feature-icon">💡</span>
                  <strong>시간 초과 힌트</strong> - 오래 막히면 헷갈리는 글자부터 하나씩 살짝 알려줘요
                </li>
                <li>
                  <span className="feature-icon">🔁</span>
                  <strong>취약 단어 복습</strong> - 틀렸거나 느렸던 단어를 모아 다시 풀며 약점을 없애요
                </li>
                <li>
                  <span className="feature-icon">🔲</span>
                  <strong>홈 화면 위젯</strong> - 앱을 켜지 않아도 홈 화면에서 오늘의 단어를 뒤집으며 익혀요
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="app-screenshots">
          <h2>앱 스크린샷</h2>
          <div className="screenshot-grid">
            <div className="screenshot-item">
              <img src="/katayomi/katayomi_1.png" alt="Katayomi 앱 스크린샷 1" />
            </div>
            <div className="screenshot-item">
              <img src="/katayomi/katayomi_2.png" alt="Katayomi 앱 스크린샷 2" />
            </div>
            <div className="screenshot-item">
              <img src="/katayomi/katayomi_3.png" alt="Katayomi 앱 스크린샷 3" />
            </div>
          </div>
        </section>

        <section className="download-section">
          <div className="download-content">
            <h2>개발 중입니다</h2>
            <p>
              가타카나 읽기를 자동화하는 훈련 경험을 위해 열심히 개발 중입니다.
              <br />
              곧 App Store와 Google Play에서 만나요!
            </p>
            <div className="development-status">
              <span className="status-badge in-progress">개발 중</span>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-content">
            <h2>문의 및 피드백</h2>
            <p>
              앱에 대한 문의사항이나 개선 아이디어가 있으시다면
              <br />
              언제든지 이메일로 연락해주세요!
            </p>
            <div className="contact-info">
              <a href="mailto:dizwe@dizwe.com" className="contact-email">
                📧 dizwe@dizwe.com
              </a>
            </div>
            <p className="contact-note">
              여러분의 소중한 의견을 기다리고 있습니다. 🙏
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default KatayomiPage
