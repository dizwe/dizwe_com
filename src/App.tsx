import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import PrivacyPolicyEN from './pages/PrivacyPolicy.en'
import PrivacyPolicyJA from './pages/PrivacyPolicy.ja'
import TermsOfService from './pages/TermsOfService'
import TermsOfServiceEN from './pages/TermsOfService.en'
import TermsOfServiceJA from './pages/TermsOfService.ja'
import WalktenPage from './pages/WalktenPage'
import PiacoPage from './pages/PiacoPage'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/walkten" element={<WalktenPage />} />
            <Route path="/piaco" element={<PiacoPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy-policy/en" element={<PrivacyPolicyEN />} />
            <Route path="/privacy-policy/ja" element={<PrivacyPolicyJA />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/terms-of-service/en" element={<TermsOfServiceEN />} />
            <Route path="/terms-of-service/ja" element={<TermsOfServiceJA />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
