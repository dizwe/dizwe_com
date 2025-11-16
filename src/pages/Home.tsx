import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="main-title">
              일상에서 만나는 작은 아이디어,
              <br />
              <span className="highlight">뚝딱뚝딱</span> 앱으로 만들어요! 🔨✨
            </h1>
            <p className="subtitle">
              평범한 일상 속에서 발견한 "이런 게 있으면 좋겠다"는 작은 아이디어들을
              <br />
              실제로 사용할 수 있는 앱으로 만드는 개발자입니다.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>프로젝트 보기</button>
            </div>
          </div>
          <div className="hero-illustration">
            <div className="illustration-placeholder">
              🧑‍💻
              <div className="floating-icons">
                <span className="icon">💡</span>
                <span className="icon">📱</span>
                <span className="icon">⚡</span>
                <span className="icon">🎨</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>About dizwe</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>💭 아이디어부터 앱까지</h3>
              <p>
                "밥먹고 십분 걷는 습관 어떻게 만들까?" 같은
                일상의 작은 아이디어들이 앱의 시작점이 됩니다.
              </p>
              
              <h3>🛠️ 빠르고 심플하게</h3>
              <p>
                복잡한 기능보다는 정말 필요한 핵심 기능에 집중해서
                누구나 쉽게 사용할 수 있는 앱을 만듭니다.
              </p>
              
              <h3>🎯 사용자 중심으로</h3>
              <p>
                실제로 사용하는 사람들의 피드백을 듣고,
                계속해서 더 나은 경험을 만들어갑니다.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">🌱</div>
                <div className="stat-label">시작하는 개발자</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">아이디어 탐지 모드</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2>dizwe는 열심히 개발중!</h2>
          <div className="project-intro">
            <p>
              작은 것부터 차근차근, 의미 있는 앱을 만들어보려고 합니다.
            </p>
          </div>
          <div className="project-grid">
            <Link to="/walkten" className="project-card-link">
              <div className="project-card featured">
                <div className="project-icon">🚶‍♂️</div>
                <h3>밥먹고십분걷기</h3>
                <p>
                  식후에 십분 걷는 습관을 만들기 위한 앱입니다.
                  <br />
                  간단한 목표 설정과 알림 기능으로
                  <br />
                  건강한 일상을 만들어가요.
                </p>
                <div className="project-tags">
                  <span className="tag">Flutter</span>
                  <span className="tag">건강</span>
                </div>
              </div>
            </Link>
            
            <Link to="/piaco" className="project-card-link">
              <div className="project-card">
                <div className="project-icon">🎹</div>
                <h3>Piaco</h3>
                <p>
                  피아노 코드 퀴즈 앱입니다.
                  <br />
                  코드를 보고 연주하면 자동으로 소리를 감지해
                  <br />
                  정답을 확인해드려요!
                </p>
                <div className="project-tags">
                  <span className="tag">Flutter</span>
                  <span className="tag">음악</span>
                </div>
              </div>
            </Link>
            
            <div className="project-card coming-soon">
              <div className="project-icon">💡</div>
              <h3>다음 아이디어</h3>
              <p>
                매일 새로운 아이디어들이 떠오르고 있어요. 
                <br />
                어떤 앱을 다음에 만들지 고민 중입니다!
              </p>
              <div className="project-status">
                <span className="status-badge thinking">구상중</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <h2>함께 만들어요! 🤝</h2>
            <p>
              좋은 아이디어가 있거나, 함께 프로젝트를 진행하고 싶으시다면
              <br />
              언제든지 이메일로 연락해주세요!
            </p>
            <div className="contact-methods">
              <a href="mailto:dizwe@dizwe.com" className="contact-btn">
                📧 dizwe@dizwe.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
