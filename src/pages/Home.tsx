import React from 'react'
import { Link } from 'react-router-dom'
import { apps } from '../data/apps'
import AppIcon from '../components/AppIcon'
import './Home.css'

const stickers = apps.filter((a) => a.sticker)

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="riso-stamp hero-kicker">Since 2025 · 뚝딱뚝딱 스튜디오</span>
            <h1 className="main-title">
              일상의 작은 아이디어를 <em>진짜 쓰는 앱</em>으로 만들어요
            </h1>
            <p className="subtitle">
              “이런 게 있으면 좋겠다” 싶은 평범한 순간의 생각들.
              꼭 필요한 핵심 기능만 담아, 실제로 사용할 수 있는 앱으로 하나씩 만듭니다.
            </p>
            <button
              className="riso-btn"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              만든 앱 보기
            </button>
          </div>

          <div className="hero-stickers" aria-hidden="true">
            {stickers.map((app, i) => (
              <div key={app.key} className={`hero-sticker sk-${i + 1} tint-${app.tint}`}>
                <span className="sk-mark">
                  <AppIcon app={app.key} size={18} />
                </span>
                <span className="sk-body">
                  {app.name}
                  <small>{app.blurb}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="section-head">
            <h2>어떻게 만드나요</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <div className="about-point">
                <h3>아이디어부터 앱까지</h3>
                <p>
                  “밥먹고 십분 걷는 습관 어떻게 만들까?” 같은
                  일상의 작은 아이디어들이 앱의 시작점이 됩니다.
                </p>
              </div>
              <div className="about-point">
                <h3>빠르고 심플하게</h3>
                <p>
                  복잡한 기능보다는 정말 필요한 핵심 기능에 집중해서
                  누구나 쉽게 사용할 수 있는 앱을 만듭니다.
                </p>
              </div>
              <div className="about-point">
                <h3>사용자 중심으로</h3>
                <p>
                  실제로 사용하는 사람들의 피드백을 듣고,
                  계속해서 더 나은 경험을 만들어갑니다.
                </p>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat riso-card tint-red">
                <div className="stat-number">{apps.length}</div>
                <div className="stat-label">만든 앱</div>
              </div>
              <div className="stat riso-card tint-blue">
                <div className="stat-number">∞</div>
                <div className="stat-label">구상 중인 아이디어</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <div className="section-head">
            <h2>작업대 위의 앱들</h2>
            <p className="section-sub">작은 것부터 차근차근, 의미 있는 앱을 만들어보려고 합니다.</p>
          </div>
          <div className="project-board">
            {apps.map((app) => (
              <Link
                key={app.key}
                to={app.route}
                className={`project-card riso-card tint-${app.tint}`}
              >
                <span className="pin" />
                <span className="project-mark">
                  <AppIcon app={app.key} size={24} />
                </span>
                <h3>{app.name}</h3>
                <p>{app.blurb}</p>
                <div className="project-foot">
                  <span className="tag">{app.tag}</span>
                  {app.status === 'in-progress' && <span className="tag ghost">개발 중</span>}
                </div>
              </Link>
            ))}

            <div className="project-card riso-card tint-muted soon">
              <span className="pin" />
              <span className="project-mark">
                <AppIcon app="next" size={24} />
              </span>
              <h3>다음 아이디어</h3>
              <p>매일 새로운 아이디어가 떠오르고 있어요. 어떤 앱을 다음에 만들지 고민 중입니다.</p>
              <div className="project-foot">
                <span className="tag ghost">구상중</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container contact-content">
          <h2>함께 만들어요</h2>
          <p>
            좋은 아이디어가 있거나, 함께 프로젝트를 진행하고 싶으시다면
            <br />
            언제든지 이메일로 연락해주세요.
          </p>
          <a href="mailto:dizwe@dizwe.com" className="riso-btn home-contact-btn">
            dizwe@dizwe.com
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
