import type { Metadata } from "next";
import { LegalArticle } from "@/components/legal/legal-article";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Greenery Trekking WhatsApp CRM.",
};

export default function TermsPage() {
  return (
    <LegalArticle title="Terms of Service" updated="4 October 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern access to and use of
        the Greenery Trekking WhatsApp CRM application and related services
        (the &quot;Service&quot;). By creating an account or using the Service,
        you agree to these Terms.
      </p>

      <h2>1. The Service</h2>
      <p>
        The Service provides tools for businesses to manage WhatsApp
        conversations, contacts, templates, broadcasts, pipelines, and
        automations using Meta&apos;s WhatsApp Cloud API. Features may change
        over time as we improve the product.
      </p>

      <h2>2. Eligibility and accounts</h2>
      <ul>
        <li>You must be able to form a binding contract to use the Service.</li>
        <li>
          You are responsible for the accuracy of account information and for
          keeping login credentials secure.
        </li>
        <li>
          You are responsible for activity that occurs under your workspace,
          including actions by invited teammates.
        </li>
      </ul>

      <h2>3. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          Violate Meta WhatsApp Business, Commerce, or Platform policies, or
          applicable law (including spam, phishing, or unsolicited messaging
          rules).
        </li>
        <li>
          Attempt to bypass security, rate limits, or access another
          customer&apos;s data.
        </li>
        <li>
          Use the Service to send unlawful, harmful, or deceptive content.
        </li>
        <li>
          Reverse engineer or resell the Service except as expressly permitted
          in writing.
        </li>
      </ul>

      <h2>4. WhatsApp / Meta requirements</h2>
      <p>
        Connecting a WhatsApp Business Account requires compliance with
        Meta&apos;s terms, including template approval, opt-in / messaging
        windows, and business verification where required. You are solely
        responsible for content you send and for obtaining any required
        customer consent.
      </p>

      <h2>5. Your data</h2>
      <p>
        You retain ownership of content and customer data you upload or
        transmit through the Service. You grant us a limited license to host,
        process, and display that data solely to provide the Service. Our{" "}
        <a href="/privacy">Privacy Policy</a> describes how we handle personal
        data.
      </p>

      <h2>6. Third-party services</h2>
      <p>
        The Service depends on third parties such as Meta/WhatsApp, hosting,
        and database providers. Their availability and policies are outside our
        control. Outages or policy changes at those providers may affect the
        Service.
      </p>

      <h2>7. Disclaimer</h2>
      <p>
        The Service is provided &quot;as is&quot; and &quot;as available&quot;
        without warranties of any kind, whether express or implied, including
        merchantability, fitness for a particular purpose, and
        non-infringement, to the maximum extent permitted by law.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Greenery Trekking will not be
        liable for indirect, incidental, special, consequential, or punitive
        damages, or for lost profits, revenue, or data, arising from your use
        of the Service. Our aggregate liability for any claim relating to the
        Service will not exceed the amounts you paid us for the Service in the
        three months before the claim (or INR 0 if the Service is provided
        free of charge).
      </p>

      <h2>9. Suspension and termination</h2>
      <p>
        We may suspend or terminate access if you violate these Terms, Meta
        policies, or if needed to protect the Service or other users. You may
        stop using the Service at any time and may request deletion of your
        data as described on the{" "}
        <a href="/data-deletion">Data Deletion</a> page.
      </p>

      <h2>10. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use after
        changes become effective constitutes acceptance of the updated Terms.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a href="mailto:greenerytrekking@gmail.com">
          greenerytrekking@gmail.com
        </a>
      </p>
    </LegalArticle>
  );
}
