import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">dizwe</span>
            </div>
            <p className="footer-description">
              일상의 작은 아이디어를 실제 앱으로 만드는 개발자
            </p>
          </div>
          
          <div className="footer-section">
            <h4>서비스</h4>
            <ul className="footer-links">
              <li><Link to="/">홈</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>법적 고지</h4>
            <ul className="footer-links">
              <li><Link to="/privacy-policy">개인정보처리방침</Link></li>
              <li><Link to="/terms-of-service">서비스약관</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>연락처</h4>
            <div className="contact-info">
              <p>📧 dizwe@dizwe.com</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 dizwe. All rights reserved.</p>
          <p>Made with ❤️ and lots of ☕</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
