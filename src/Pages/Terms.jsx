import React from 'react';
import { NavLink } from 'react-router';

const Terms = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-6 py-12 shadow-lg rounded-xl mt-10 mb-16">
        <h2 className="text-3xl font-bold text-center text-[var(--HEADING-TITLE-TEXT)] mb-8">
          Terms & Conditions
        </h2>

        <div className="space-y-6 text-[var(--TEXT-COLOR)] text-sm leading-relaxed">
          <section>
            <h3 className="text-lg font-semibold text-[var(--HEADING-TITLE-TEXT)] mb-2">
              1. Acceptance of Terms
            </h3>
            <p>
              By using TreePlants Store and our services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our platform.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[var(--HEADING-TITLE-TEXT)] mb-2">
              2. User Responsibilities
            </h3>
            <p>
              You are responsible for your activities on our website. Any misuse, illegal activity, or violation of intellectual property rights may result in suspension or termination of your access.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[var(--HEADING-TITLE-TEXT)] mb-2">
              3. Product Usage & Licensing
            </h3>
            <p>
              Plants and related content offered by TreePlants Store are for personal use only. Redistribution or unauthorized commercial use is prohibited.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[var(--HEADING-TITLE-TEXT)] mb-2">
              4. Content and Updates
            </h3>
            <p>
              We may update product information, features, or terms at any time. Continued use of our services after changes indicates your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[var(--HEADING-TITLE-TEXT)] mb-2">
              5. Privacy and Data
            </h3>
            <p>
              We respect your privacy. Data collected is used to improve your shopping experience and is protected under our{' '}
              <span className="text-green-600 underline cursor-pointer">
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              </span>.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[var(--HEADING-TITLE-TEXT)] mb-2">
              6. Termination
            </h3>
            <p>
              We reserve the right to suspend or terminate access for violations of these terms without prior notice.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[var(--HEADING-TITLE-TEXT)] mb-2">
              7. Contact
            </h3>
            <p>
              For any questions or concerns, please contact us at{' '}
              <a href="mailto:smnahidh040@gmail.com" className="text-green-600 underline">
                smnahidh040@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
