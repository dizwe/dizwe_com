import React from 'react'
import './PolicyPage.css'

const PrivacyPolicyEN: React.FC = () => {
  return (
    <div className="policy-page">
      <div className="container">
        <div className="language-selector">
          <a href="/privacy-policy" className="lang-btn">한국어</a>
          <a href="/privacy-policy/en" className="lang-btn active">English</a>
          <a href="/privacy-policy/ja" className="lang-btn">日本語</a>
        </div>
        
        <div className="policy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: August 3, 2025</p>
        </div>
        
        <div className="policy-content">
          <section className="policy-section">
            <h2>1. Purpose of Collecting and Using Personal Information</h2>
            <p>
              dizwe ("Company" or "Service") processes personal information for the following purposes:
            </p>
            <ul>
              <li>Provision of services and fulfillment of contracts</li>
              <li>Member management and identity verification</li>
              <li>Handling customer inquiries and complaints</li>
              <li>Service improvement and development of new services</li>
              <li>Utilization for marketing and advertising</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. Items of Personal Information Collected</h2>
            <div className="info-table">
              <h3>Required Information</h3>
              <ul>
                <li>Email address</li>
                <li>Service usage records</li>
                <li>Access logs, cookies, IP information</li>
              </ul>
              
              <h3>Optional Information</h3>
              <ul>
              </ul>
            </div>
          </section>

          <section className="policy-section">
            <h2>3. Processing and Retention Period of Personal Information</h2>
            <p>
              The Company processes and retains personal information within the retention and usage period 
              prescribed by law or the period consented to by the data subject at the time of collection.
            </p>
            <ul>
              <li>Until membership withdrawal (except when retention is required by relevant laws)</li>
              <li>Information for preventing fraudulent use: 1 year</li>
              <li>Service usage records: 3 months</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Provision of Personal Information to Third Parties</h2>
            <p>
              The Company does not provide personal information of data subjects to external parties in principle. 
              However, the following cases are exceptions:
            </p>
            <ul>
              <li>When the data subject has given prior consent</li>
              <li>When required by law or requested by investigative agencies according to legally prescribed procedures and methods</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. Consignment of Personal Information Processing</h2>
            <p>
              The Company outsources personal information processing tasks as follows for smooth processing:
            </p>
            <div className="delegation-table">
              <table>
                <thead>
                  <tr>
                    <th>Consignee</th>
                    <th>Consigned Tasks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Google Cloud Platform</td>
                    <td>Cloud server operation and management</td>
                  </tr>
                  <tr>
                    <td>Google Analytics</td>
                    <td>Service usage statistics and analysis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="policy-section">
            <h2>6. Rights and Obligations of Data Subjects and How to Exercise Them</h2>
            <p>
              Data subjects may exercise the following personal information protection rights at any time:
            </p>
            <ul>
              <li>Request for notification of personal information processing status</li>
              <li>Request for suspension of personal information processing</li>
              <li>Request for correction or deletion of personal information</li>
              <li>Request for notification of personal information processing status</li>
            </ul>
            <p>
              Rights may be exercised in writing, via email, or fax according to Article 41(1) of the 
              Enforcement Decree of the Personal Information Protection Act, and the Company will take action without delay.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Measures to Ensure Safety of Personal Information</h2>
            <p>
              The Company takes the following technical, administrative, and physical measures necessary 
              to ensure safety in accordance with Article 29 of the Personal Information Protection Act:
            </p>
            <ul>
              <li>Minimization of personal information handling staff and training</li>
              <li>Restriction of access to personal information</li>
              <li>Access control to personal information through granting, changing, and revoking access rights to database systems storing personal information</li>
              <li>Installation of security programs to prevent leakage and damage of personal information by hacking or computer viruses</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>8. Personal Information Protection Officer</h2>
            <div className="contact-info">
              <p>
                The Company designates a Personal Information Protection Officer as follows to oversee personal 
                information processing and handle complaints and remedies related to personal information processing:
              </p>
              <div className="responsible-person">
                <h4>Personal Information Protection Officer</h4>
                <ul>
                  <li>Email: dizwe@dizwe.com</li>
                  <li>Contact: Please contact through inquiry form</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>9. Changes to Privacy Policy</h2>
            <p>
              This Privacy Policy is effective from the enforcement date, and if there are additions, deletions, 
              or corrections to changes in accordance with laws and policies, notice will be given through 
              announcements from 7 days before the effective date.
            </p>
          </section>

          <section className="policy-section">
            <h2>10. Request for Access to Personal Information</h2>
            <p>
              Data subjects may request access to personal information in accordance with Article 35 of the 
              Personal Information Protection Act to the department below. The Company will strive to process 
              requests for access to personal information promptly.
            </p>
            <div className="contact-department">
              <h4>Department for Receiving and Processing Access Requests</h4>
              <ul>
                <li>Department: Development Team</li>
                <li>Email: dizwe@dizwe.com</li>
              </ul>
            </div>
          </section>

          <div className="policy-footer">
            <p>
              If you have any questions regarding privacy protection, please contact us at any time.
            </p>
            <div className="contact-buttons">
              <a href="mailto:dizwe@dizwe.com" className="contact-btn">
                📧 Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyEN
