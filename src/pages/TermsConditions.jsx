import React, { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import '../components/Legal/Legal.css'

function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="legal-container">
        <div className="legal-hero">
          <div className="legal-hero__content">
            <h1 className="legal-hero__title">Terms & Conditions</h1>
            <p className="legal-hero__subtitle">Last Updated: October 21, 2025</p>
          </div>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using the DSQUARED website and purchasing our products, you agree to be bound by these 
              Terms and Conditions. If you disagree with any part of these terms, you may not access our website or use our services.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Products and Services</h2>
            <p>
              DSQUARED offers premium car detailing, protection, and performance products including:
            </p>
            <ul>
              <li><strong>Prepare:</strong> Professional-grade cleaning, decontamination, polishing, and surface preparation products</li>
              <li><strong>Protect:</strong> Advanced ceramic coatings including C.QUARTZ and D.QUARTZ formulations</li>
              <li><strong>PPF:</strong> Paint protection film solutions, installation software, and related accessories</li>
              <li><strong>Maintain:</strong> Maintenance products for washing, sealing, and coating rejuvenation</li>
              <li><strong>Accessories:</strong> Professional-grade microfibers, polishing pads, brushes, and branded merchandise</li>
            </ul>
            <p>
              All product descriptions, specifications, and images are provided for informational purposes. We reserve the 
              right to modify product formulations and specifications without prior notice to improve performance and quality.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Pricing and Payment</h2>
            <p>
              All prices are listed in US Dollars (USD) and are subject to change without notice. We reserve the right to 
              modify prices at any time. The price charged will be the price displayed at the time of order placement.
            </p>
            <p>
              Payment is required at the time of purchase. We accept major credit cards, debit cards, and other payment 
              methods as displayed on our website. All transactions are processed securely through encrypted payment gateways.
            </p>
            <p>
              You are responsible for paying all applicable taxes, duties, and customs fees associated with your purchase.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Orders and Order Acceptance</h2>
            <p>
              Your order constitutes an offer to purchase products from DSQUARED. All orders are subject to acceptance by us. 
              We may, at our sole discretion, refuse or cancel any order for any reason, including:
            </p>
            <ul>
              <li>Product unavailability</li>
              <li>Errors in product or pricing information</li>
              <li>Suspected fraudulent transactions</li>
              <li>Credit or payment issues</li>
            </ul>
            <p>
              Once your order is accepted, you will receive an order confirmation email. This confirmation does not signify 
              acceptance of your order, but confirms we have received it.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Shipping and Delivery</h2>
            <p>
              We ship to addresses within the United States and internationally to select countries. Shipping costs and 
              estimated delivery times will be displayed during checkout.
            </p>
            <p>
              Delivery times are estimates and not guaranteed. DSQUARED is not responsible for delays caused by shipping 
              carriers, customs, or circumstances beyond our control.
            </p>
            <p>
              Risk of loss and title for products pass to you upon delivery to the shipping carrier. You are responsible 
              for filing any claims with the carrier for damaged or lost shipments.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Returns and Refunds</h2>
            <p>
              We want you to be completely satisfied with your purchase. If you are not satisfied, you may return unopened 
              products within 30 days of delivery for a refund or exchange.
            </p>
            <p><strong>Return Policy Guidelines:</strong></p>
            <ul>
              <li>Products must be unused, unopened, and in original packaging</li>
              <li>Return shipping costs are the responsibility of the customer unless the product is defective</li>
              <li>Refunds will be issued to the original payment method within 5-10 business days of receiving the return</li>
              <li>Custom orders and opened products are not eligible for return</li>
            </ul>
            <p>
              To initiate a return, please contact our customer service team at support@dsquared.com with your order number 
              and reason for return.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Product Warranty</h2>
            <p>
              DSQUARED stands behind the quality of our products. Certain products come with specific warranty coverage:
            </p>
            <ul>
              <li><strong>Ceramic Coatings:</strong> Performance warranty when applied by certified installers (terms vary by product)</li>
              <li><strong>PPF Products:</strong> Limited warranty against defects in materials and workmanship</li>
              <li><strong>Other Products:</strong> 90-day limited warranty against manufacturing defects</li>
            </ul>
            <p>
              Warranty coverage is void if products are not used according to instructions, are mixed with non-DSQUARED products, 
              or are applied incorrectly. To register your warranty or make a claim, please visit our support page.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Professional Installation</h2>
            <p>
              Many DSQUARED products require professional installation for optimal results and warranty coverage. We recommend 
              using certified DSQUARED installers for:
            </p>
            <ul>
              <li>All ceramic coating applications</li>
              <li>Paint protection film installation</li>
              <li>Multi-stage paint correction and preparation</li>
            </ul>
            <p>
              Use our "Find a Distributor" tool to locate certified professionals in your area. DSQUARED is not responsible 
              for installation errors or misapplication of products by non-certified installers or DIY users.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, DSQUARED shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
              or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul>
              <li>Your use or inability to use our products or services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from our website</li>
              <li>Any bugs, viruses, or similar items that may be transmitted to or through our website</li>
              <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted</li>
            </ul>
            <p>
              In no event shall DSQUARED's total liability to you for all damages exceed the amount paid by you for the product 
              or service in question.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, videos, and software, 
              is the property of DSQUARED and is protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content 
              from our website without our express written permission.
            </p>
            <p>
              DSQUARED®, C.QUARTZ®, D.QUARTZ®, and other marks are registered trademarks of DSQUARED. Unauthorized use of 
              these trademarks is strictly prohibited.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. User Accounts</h2>
            <p>
              To access certain features of our website, you may be required to create an account. You are responsible for:
            </p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
            </ul>
            <p>
              We reserve the right to terminate accounts, refuse service, or cancel orders at our discretion.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Prohibited Uses</h2>
            <p>You agree not to use our website or services to:</p>
            <ul>
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful code or malware</li>
              <li>Engage in fraudulent activities</li>
              <li>Harvest or collect user information without consent</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Resell products without authorized distributor status</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>13. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the United States, 
              without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the 
              courts located in [Your Jurisdiction].
            </p>
          </section>

          <section className="legal-section">
            <h2>14. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately 
              upon posting to the website. Your continued use of the website after changes are posted constitutes acceptance 
              of the modified terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>15. Severability</h2>
            <p>
              If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision shall 
              be limited or eliminated to the minimum extent necessary so that these terms shall otherwise remain in full 
              force and effect.
            </p>
          </section>

          <section className="legal-section">
            <h2>16. Contact Information</h2>
            <p>For questions regarding these Terms and Conditions, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> legal@dsquared.com</li>
              <li><strong>Phone:</strong> +1 (555) 123-4567</li>
              <li><strong>Address:</strong> DSQUARED Headquarters, 123 Protection Avenue, Detailing City, DC 12345</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>17. Entire Agreement</h2>
            <p>
              These Terms and Conditions, together with our Privacy Policy and any other legal notices published by us on 
              the website, constitute the entire agreement between you and DSQUARED concerning your use of the website and 
              purchase of products.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TermsConditions

