import React from 'react'
import './PiacoPage.css'

const PiacoPage: React.FC = () => {
  return (
    <div className="piaco-page">
      <div className="container">
        <div className="page-header">
          <div className="app-icon">🎹</div>
          <h1>Piaco</h1>
          <p className="app-subtitle">피아노 코드 퀴즈로 음감을 키워보세요!</p>
        </div>

        <section className="app-description">
          <div className="description-content">
            <h2>앱 소개</h2>
            <div className="description-text">
              <p>
                <strong>Piaco</strong>는 피아노 코드를 듣고 맞추는 음감 트레이닝 앱입니다.
              </p>
              <p>
                화면에 나타나는 피아노 코드를 보고, 실제로 피아노를 연주하면 앱이 자동으로 소리를 감지해서 정답 여부를 확인해드립니다.
              </p>
              
              <h3>✨ 주요 기능</h3>
              <ul className="feature-list">
                <li>
                  <span className="feature-icon">🎵</span>
                  <strong>실시간 음성 감지</strong> - 피아노 소리를 자동으로 인식하여 정답을 확인해요
                </li>
                <li>
                  <span className="feature-icon">🎼</span>
                  <strong>다양한 코드</strong> - 기본 메이저/마이너부터 다양한 코드를 연습할 수 있어요
                </li>
                <li>
                  <span className="feature-icon">📈</span>
                  <strong>실력 향상</strong> - 꾸준한 연습으로 음감과 코드 인식 능력을 키워보세요
                </li>
                <li>
                  <span className="feature-icon">🎯</span>
                  <strong>즉각적인 피드백</strong> - 연주하는 즉시 정답 여부를 확인할 수 있어요
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="app-screenshots">
          <h2>앱 스크린샷</h2>
          <div className="screenshot-placeholder">
            <p>📸 곧 업데이트될 예정입니다!</p>
          </div>
        </section>

        <section className="download-section">
          <div className="download-content">
              <h2>개발 중입니다</h2>
              <p>
                더 나은 음감 트레이닝 경험을 위해 열심히 개발 중입니다.
                <br />
                조금만 기다려주세요!
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

export default PiacoPage
