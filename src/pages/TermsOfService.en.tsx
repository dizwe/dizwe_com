import React from 'react'
import './PolicyPage.css'

const TermsOfServiceEN: React.FC = () => {
  return (
    <div className="policy-page">
      <div className="container">
        <div className="language-selector">
          <a href="/terms-of-service" className="lang-btn">한국어</a>
          <a href="/terms-of-service/en" className="lang-btn active">English</a>
          <a href="/terms-of-service/ja" className="lang-btn">日本語</a>
        </div>
        
        <div className="policy-header">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last Updated: August 3, 2025</p>
        </div>
        
        <div className="policy-content">
          <section className="policy-section">
            <h2>Article 1 (Purpose)</h2>
            <p>
              These Terms and Conditions aim to stipulate the terms and procedures for using all services 
              provided by dizwe (hereinafter referred to as "Company"), the rights, obligations, and 
              responsibilities between the Company and members, and other necessary matters.
            </p>
          </section>

          <section className="policy-section">
            <h2>Article 2 (Definitions)</h2>
            <p>The definitions of terms used in these Terms are as follows:</p>
            <ul>
              <li>
                <strong>"Service"</strong>: Refers to all internet-related services provided by the Company
              </li>
              <li>
                <strong>"Member"</strong>: A person who has registered as a member by providing personal 
                information to the Service and can continuously receive information and use the Service
              </li>
              <li>
                <strong>"Non-member"</strong>: A person who uses the Service without registering as a member
              </li>
              <li>
                <strong>"Post"</strong>: Information consisting of text, documents, pictures, voice, links, 
                files, or combinations thereof posted by members while using the Service
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Article 3 (Specification, Explanation, and Amendment of Terms)</h2>
            <ol>
              <li>
                The Company shall post the contents of these Terms, company name, business address 
                (including addresses where consumer complaints can be handled), phone number, email address, 
                business registration number, and online sales registration number on the initial screen 
                of the Service or through a linked screen for easy access by users.
              </li>
              <li>
                The Company may amend these Terms within the scope that does not violate relevant laws 
                such as the Act on Consumer Protection in Electronic Commerce, the Act on Regulation of 
                Terms and Conditions, the Framework Act on Electronic Documents and Transactions, the 
                Electronic Financial Transactions Act, the Electronic Signature Act, the Act on Promotion 
                of Information and Communications Network Utilization and Information Protection, the 
                Door-to-Door Sales Act, and the Framework Act on Consumers.
              </li>
              <li>
                When the Company amends the Terms, it shall specify the effective date and reasons for 
                amendment and post them along with the current Terms according to the method in Paragraph 1 
                from 7 days before the effective date until the day before the effective date.
              </li>
            </ol>
          </section>

          <section className="policy-section">
            <h2>Article 4 (Provision and Modification of Services)</h2>
            <ol>
              <li>
                The Company performs the following tasks:
                <ul>
                  <li>Provision of mobile applications and web services</li>
                  <li>Provision of personalized content</li>
                  <li>Community services</li>
                  <li>Other tasks determined by the Company</li>
                </ul>
              </li>
              <li>
                If there are changes in the content or quality of services, the Company shall notify members of the reasons.
              </li>
              <li>
                The Company may change all or part of the services it provides according to operational 
                and technical needs for reasonable reasons.
              </li>
            </ol>
          </section>

          <section className="policy-section">
            <h2>Article 5 (Suspension of Services)</h2>
            <ol>
              <li>
                The Company may temporarily suspend the provision of services in case of maintenance, 
                replacement, and breakdown of information and communication facilities such as computers, 
                or interruption of communication.
              </li>
              <li>
                The Company shall compensate for damages suffered by members or third parties due to 
                temporary suspension of service provision for the reasons in Paragraph 1. However, this 
                does not apply if the Company proves lack of intent or negligence.
              </li>
              <li>
                If services cannot be provided due to business conversion, business abandonment, 
                integration between companies, etc., the Company shall notify members according to the 
                method specified in Article 8 and compensate consumers according to the conditions 
                originally presented by the Company.
              </li>
            </ol>
          </section>

          <section className="policy-section">
            <h2>Article 6 (Membership Registration)</h2>
            <ol>
              <li>
                Users apply for membership registration by filling in member information according to the 
                registration form set by the Company and expressing their intention to agree to these Terms.
              </li>
              <li>
                The Company shall register as members those users who applied for membership registration 
                as in Paragraph 1, except in the following cases:
                <ul>
                  <li>If the applicant has previously lost membership qualification under Article 7, Paragraph 3</li>
                  <li>If there are false statements, omissions, or errors in the registration</li>
                  <li>If registering as a member would cause significant technical difficulties for the Company</li>
                </ul>
              </li>
              <li>
                The time of establishment of the membership registration contract shall be when the Company's 
                approval reaches the member.
              </li>
            </ol>
          </section>

          <section className="policy-section">
            <h2>Article 7 (Member Withdrawal and Loss of Qualification)</h2>
            <ol>
              <li>
                Members may request withdrawal at any time, and the Company shall immediately process the withdrawal.
              </li>
              <li>
                If a member falls under any of the following reasons, the Company may restrict or suspend membership:
                <ul>
                  <li>Registering false information when applying for membership</li>
                  <li>Interfering with others' use of the Service or stealing their information, thus threatening e-commerce order</li>
                  <li>Using the Service to engage in acts prohibited by laws or these Terms or contrary to public order and morals</li>
                </ul>
              </li>
              <li>
                After the Company restricts or suspends membership qualification, if the same behavior is 
                repeated more than twice or the reason is not corrected within 30 days, the Company may 
                terminate membership.
              </li>
            </ol>
          </section>

          <section className="policy-section">
            <h2>Article 8 (Notice to Members)</h2>
            <ol>
              <li>
                When the Company notifies members, it may do so to the email address designated in advance 
                by agreement with the member.
              </li>
              <li>
                For notices to unspecified members, the Company may substitute individual notice by posting 
                on the Service notice board for more than one week.
              </li>
            </ol>
          </section>

          <section className="policy-section">
            <h2>Article 9 (Personal Information Protection)</h2>
            <ol>
              <li>
                The Company collects minimum personal information within the scope necessary for service provision 
                when collecting users' personal information.
              </li>
              <li>
                The Company does not collect information necessary for contract fulfillment in advance when 
                registering members. However, this does not apply when collecting minimum specific personal 
                information for identity verification before purchase contracts as required by relevant laws.
              </li>
              <li>
                When collecting and using users' personal information, the Company shall notify the user of 
                the purpose and obtain consent.
              </li>
              <li>
                The Company cannot use collected personal information for purposes other than intended, and 
                when new usage purposes arise or when providing to third parties, the Company shall notify 
                the user of the purpose at the usage/provision stage and obtain consent.
              </li>
            </ol>
          </section>

          <section className="policy-section">
            <h2>Article 10 (Company's Obligations)</h2>
            <ol>
              <li>
                The Company shall not engage in acts prohibited by laws and these Terms or contrary to public 
                order and morals, and shall do its best to provide goods and services continuously and stably 
                according to these Terms.
              </li>
              <li>
                The Company shall have a security system in place to protect users' personal information so 
                that users can safely use internet services.
              </li>
              <li>
                If opinions or complaints raised by members regarding service use are objectively recognized 
                as legitimate, the Company shall immediately process them through appropriate procedures.
              </li>
            </ol>
          </section>

          <section className="policy-section">
            <h2>Article 11 (Members' Obligations)</h2>
            <p>Members shall not engage in the following acts:</p>
            <ul>
              <li>Registering false information when applying or making changes</li>
              <li>Stealing others' information</li>
              <li>Changing information posted by the Company</li>
              <li>Transmitting or posting information other than that designated by the Company (such as computer programs)</li>
              <li>Infringing on intellectual property rights such as copyrights of the Company or third parties</li>
              <li>Acts that damage the reputation of or interfere with the business of the Company or third parties</li>
              <li>Disclosing or posting obscene or violent messages, images, sounds, or other information contrary to public order and morals on the Service</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Article 12 (Compensation for Damages and Disclaimer)</h2>
            <ol>
              <li>
                The Company shall not be liable for any damages suffered by members in connection with services 
                provided free of charge, except for damages caused by intent or gross negligence of the Company.
              </li>
              <li>
                The Company shall not be liable for loss of profits expected by members through use of the Service, 
                nor for damages resulting from data obtained through the Service.
              </li>
              <li>
                The Company shall not be liable for transactions conducted between members or between members 
                and third parties through the Service.
              </li>
            </ol>
          </section>

          <section className="policy-section">
            <h2>Article 13 (Dispute Resolution)</h2>
            <ol>
              <li>
                The Company establishes and operates a damage compensation processing organization to reflect 
                legitimate opinions or complaints raised by users and compensate for damages.
              </li>
              <li>
                The Company prioritizes processing complaints and opinions submitted by users. However, if 
                prompt processing is difficult, the Company shall immediately notify users of the reasons 
                and processing schedule.
              </li>
              <li>
                Disputes between the Company and users may follow mediation by the Electronic Commerce 
                Mediation Committee or Consumer Dispute Mediation Committee.
              </li>
            </ol>
          </section>

          <section className="policy-section">
            <h2>Article 14 (Jurisdiction and Governing Law)</h2>
            <ol>
              <li>
                Lawsuits regarding e-commerce disputes between the Company and users shall be under the 
                exclusive jurisdiction of the district court having jurisdiction over the user's address 
                at the time of filing, or residence if there is no address. However, if the user's address 
                or residence is unclear at the time of filing or if the user is a foreign resident, the 
                lawsuit shall be filed with the competent court under the Civil Procedure Act.
              </li>
              <li>
                Korean law shall apply to e-commerce lawsuits filed between the Company and users.
              </li>
            </ol>
          </section>

          <div className="policy-footer">
            <p>
              If you have any questions regarding the Terms of Service, please contact us at any time.
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

export default TermsOfServiceEN
