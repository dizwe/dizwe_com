import React from 'react'
import './DateYomiPage.css'

const DateYomiPage: React.FC = () => {
  return (
    <div className="dateyomi-page">
      <div className="container">
        <div className="page-header">
          <div className="app-icon">📅</div>
          <h1>DateYomi</h1>
          <p className="app-subtitle">오늘의 날짜, 일본어로는 뭐였더라?</p>
        </div>

        <section className="app-description">
          <div className="description-content">
            <h2>앱 소개</h2>
            <div className="description-text">
              <p>
                <strong>DateYomi</strong>는 일본어 날짜·요일·시간 읽기를 자연스럽게 익히는 학습 앱입니다.
              </p>
              <p>
                "ごがつ... ふつか?" 일본어 공부를 시작할 때 가장 헷갈리는 날짜 읽기, 이제 억지로 외우지 마세요.
                매일 아침 알림으로 오늘의 날짜를 일본어로 배달해 드립니다. 공부 앱은 부담스럽지만,
                하루 한 번 날짜 확인은 누구나 합니다. DateYomi는 일상 속에 자연스럽게 스며들어
                복잡한 일본어 날짜 규칙을 '감각적'으로 익히게 돕습니다.
              </p>

              <h3>✨ 주요 기능</h3>
              <ul className="feature-list">
                <li>
                  <span className="feature-icon">🔔</span>
                  <strong>데일리 알림</strong> - 설정한 시간에 오늘의 날짜와 요일을 일본어로 알려드려요. 알림만 확인해도 공부가 됩니다
                </li>
                <li>
                  <span className="feature-icon">👆</span>
                  <strong>직관적인 날짜 이동</strong> - 스와이프 한 번으로 어제·오늘·내일·다음 주까지! 이동하는 날짜에 맞춰 읽는 방법을 확인할 수 있어요
                </li>
                <li>
                  <span className="feature-icon">💡</span>
                  <strong>한 줄 팁</strong> - "2일은 불규칙 읽기: ふつか"처럼 꼭 필요한 핵심 규칙만 짧고 굵게 설명해 드려요
                </li>
                <li>
                  <span className="feature-icon">📝</span>
                  <strong>데일리 퀴즈</strong> - 10문제 내외의 가벼운 퀴즈로 날짜 읽는 법을 내 것으로 만드세요
                </li>
                <li>
                  <span className="feature-icon">🔲</span>
                  <strong>홈 화면 위젯</strong> - 앱을 켜지 않아도 홈 화면에서 바로 일본어 날짜를 확인하세요 (미니멀/라지/시간 모드 지원)
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="app-screenshots">
          <h2>앱 스크린샷</h2>
          <div className="screenshot-grid">
            <div className="screenshot-item">
              <img src="/dateyomi/dateyomi_1.png" alt="DateYomi 앱 스크린샷 1" />
            </div>
            <div className="screenshot-item">
              <img src="/dateyomi/dateyomi_2.png" alt="DateYomi 앱 스크린샷 2" />
            </div>
            <div className="screenshot-item">
              <img src="/dateyomi/dateyomi_3.png" alt="DateYomi 앱 스크린샷 3" />
            </div>
          </div>
        </section>

        <section className="download-section">
          <div className="download-content">
            <h2>개발 중입니다</h2>
            <p>
              더 자연스러운 일본어 날짜 학습 경험을 위해 열심히 개발 중입니다.
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

export default DateYomiPage
