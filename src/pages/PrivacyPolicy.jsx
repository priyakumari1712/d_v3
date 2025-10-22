import React, { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import '../components/Legal/Legal.css'

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="legal-container">
        <div className="legal-hero">
          <div className="legal-hero__content">
            <h1 className="legal-hero__title">Privacy Policy</h1>
            <p className="legal-hero__subtitle">Last Updated: October 21, 2025</p>
          </div>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to DSQUARED. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our 
              website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
            <ul>
              <li><strong>Identity Data:</strong> First name, last name, username or similar identifier</li>
              <li><strong>Contact Data:</strong> Email address, telephone numbers, billing address, delivery address</li>
              <li><strong>Transaction Data:</strong> Details about payments to and from you, and other details of products and services you have purchased from us</li>
              <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, products and services</li>
              <li><strong>Marketing Data:</strong> Your preferences in receiving marketing from us and your communication preferences</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul>
              <li>To register you as a new customer and create your account</li>
              <li>To process and deliver your order, including managing payments and collecting money owed to us</li>
              <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy</li>
              <li>To enable you to participate in promotions or warranty registration</li>
              <li>To administer and protect our business and website (including troubleshooting, data analysis, testing, system maintenance)</li>
              <li>To deliver relevant website content and advertisements to you and measure the effectiveness of the advertising we serve</li>
              <li>To use data analytics to improve our website, products/services, marketing, customer relationships and experiences</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally 
              lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your 
              personal data to those employees, agents, contractors and other third parties who have a business need to know. 
              They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
            <p>
              We have put in place procedures to deal with any suspected personal data breach and will notify you and any 
              applicable regulator of a breach where we are legally required to do so.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
              including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the 
              appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal 
              data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for 
              which we process your personal data and whether we can achieve those purposes through other means, and the 
              applicable legal requirements.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Your Legal Rights</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data:</p>
            <ul>
              <li><strong>Request access</strong> to your personal data</li>
              <li><strong>Request correction</strong> of your personal data</li>
              <li><strong>Request erasure</strong> of your personal data</li>
              <li><strong>Object to processing</strong> of your personal data</li>
              <li><strong>Request restriction</strong> of processing your personal data</li>
              <li><strong>Request transfer</strong> of your personal data</li>
              <li><strong>Right to withdraw consent</strong> at any time</li>
            </ul>
            <p>
              If you wish to exercise any of the rights set out above, please contact us at privacy@dsquared.com
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you 
              with a good experience when you browse our website and also allows us to improve our site. A cookie is a 
              small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree.
            </p>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. 
              If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Third-Party Links</h2>
            <p>
              This website may include links to third-party websites, plug-ins and applications. Clicking on those links or 
              enabling those connections may allow third parties to collect or share data about you. We do not control these 
              third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage 
              you to read the privacy policy of every website you visit.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Children's Privacy</h2>
            <p>
              Our website and services are not directed to children under the age of 18. We do not knowingly collect personal 
              information from children under 18. If you are a parent or guardian and believe we have collected information 
              about a child, please contact us immediately.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy 
              policy on this page and updating the "Last Updated" date at the top of this privacy policy. You are advised to 
              review this privacy policy periodically for any changes.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> privacy@dsquared.com</li>
              <li><strong>Phone:</strong> +1 (555) 123-4567</li>
              <li><strong>Address:</strong> DSQUARED Headquarters, 123 Protection Avenue, Detailing City, DC 12345</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy

