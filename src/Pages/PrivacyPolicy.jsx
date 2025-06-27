import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-6 py-12  shadow-lg rounded-xl mt-10 mb-16">
        <h2 className="text-3xl font-bold text-center text-[var(--HEADING-TITLE-TEXT)] mb-8">
          Privacy Policy
        </h2>

        <div className="space-y-6 text-[var(--TEXT-COLOR)] text-sm leading-relaxed">
          <section>
            <h3 className="text-lg font-semibold text-[var(--HEADING-TITLE-TEXT)] mb-2">
              1. Information We Collect
            </h3>
            <p>
              We collect basic customer data such as name, email address, shipping details, and purchase history to improve your shopping experience and provide personalized plant recommendations.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[var(--HEADING-TITLE-TEXT)] mb-2">
              2. How We Use Your Information
            </h3>
            <p>
              Your information helps us process orders, manage deliveries, respond to customer support requests, analyze shopping trends, and communicate important updates about your orders or our services.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[var(--HEADING-TITLE-TEXT)] mb-2">
              3. Cookies & Tracking
            </h3>
            <p>
              We may use cookies and similar tracking technologies to improve site functionality, remember your preferences, and provide personalized offers. You can control cookie settings in your browser.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[var(--HEADING-TITLE-TEXT)] mb-2">
              4. Data Security
            </h3>
            <p>
              We use industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure during your shopping experience.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[var(--HEADING-TITLE-TEXT)] mb-2">
              5. Third-Party Services
            </h3>
            <p>
              We may partner with trusted third-party services (such as payment gateways and delivery providers) that may access your data to fulfill orders. We are not responsible for their privacy policies.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[var(--HEADING-TITLE-TEXT)] mb-2">
              6. Your Rights
            </h3>
            <p>
              You have the right to access, update, or request deletion of your personal data. For any inquiries, please contact us at{' '}
              <a href="mailto:smnahidh040@gmail.com" className="text-green-600 underline">smnahidh040@gmail.com</a>.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[var(--HEADING-TITLE-TEXT)] mb-2">
              7. Updates to This Policy
            </h3>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page and notified via email or our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
