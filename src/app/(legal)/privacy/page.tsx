import type { Metadata } from "next";
import { LegalArticle } from "@/components/legal/legal-article";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Greenery Trekking WhatsApp CRM and related Meta / WhatsApp integrations.",
};

export default function PrivacyPage() {
  return (
    <LegalArticle title="Privacy Policy" updated="4 October 2026">
      <p>
        Greenery Trekking (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
        operates a WhatsApp Business CRM application (the &quot;Service&quot;)
        that helps businesses manage customer conversations, contacts,
        broadcasts, and related workflows through the Meta WhatsApp Cloud API.
        This Privacy Policy explains what information we collect, how we use
        it, and the choices you have.
      </p>

      <h2>1. Who this policy covers</h2>
      <p>
        This policy applies to account holders who sign up for the Service, team
        members invited to a workspace, and end customers whose WhatsApp
        messages are processed when a business connects its WhatsApp Business
        Account to the Service.
      </p>

      <h2>2. Information we collect</h2>
      <ul>
        <li>
          <strong>Account data:</strong> name, email address, password (stored
          via our authentication provider), and workspace membership details.
        </li>
        <li>
          <strong>WhatsApp / Meta configuration:</strong> Phone Number ID, WhatsApp
          Business Account ID, access tokens (encrypted at rest), webhook verify
          tokens, and registration status needed to send and receive messages.
        </li>
        <li>
          <strong>Message and CRM data:</strong> inbound and outbound WhatsApp
          messages, media attachments you choose to store, contacts, tags,
          notes, deal/pipeline records, templates, broadcasts, and automation
          logs created in the Service.
        </li>
        <li>
          <strong>Technical data:</strong> IP address, browser/device
          information, and basic usage logs needed to secure and operate the
          Service.
        </li>
      </ul>

      <h2>3. How we use information</h2>
      <ul>
        <li>Provide, maintain, and improve the Service.</li>
        <li>
          Authenticate users, manage workspaces, and enforce access controls.
        </li>
        <li>
          Send and receive WhatsApp messages on behalf of the connecting
          business through Meta&apos;s APIs.
        </li>
        <li>Detect abuse, debug failures, and keep the platform secure.</li>
        <li>
          Respond to support requests sent to{" "}
          <a href="mailto:greenerytrekking@gmail.com">
            greenerytrekking@gmail.com
          </a>
          .
        </li>
      </ul>

      <h2>4. Meta / WhatsApp data</h2>
      <p>
        When you connect WhatsApp, message content and related metadata are
        processed according to Meta&apos;s WhatsApp Business and Platform terms.
        We use that data only to operate features you enable in the Service
        (inbox, templates, broadcasts, automations, analytics). We do not sell
        personal data. We do not use WhatsApp message content to train
        unrelated public AI models.
      </p>

      <h2>5. Sharing of information</h2>
      <p>We share data only as needed to run the Service, including with:</p>
      <ul>
        <li>
          <strong>Meta / WhatsApp:</strong> to deliver and receive Business
          messages.
        </li>
        <li>
          <strong>Infrastructure providers:</strong> hosting, database, and
          storage vendors that process data under contract (for example our
          cloud host and database provider).
        </li>
        <li>
          <strong>Legal requirements:</strong> if required by law, regulation,
          or valid legal process.
        </li>
      </ul>

      <h2>6. Data retention</h2>
      <p>
        We retain account and CRM data for as long as your workspace is active
        and as needed to provide the Service. You may delete contacts,
        conversations, or your account data by using in-product controls or by
        contacting us. See our{" "}
        <a href="/data-deletion">Data Deletion</a> page for instructions.
      </p>

      <h2>7. Security</h2>
      <p>
        We use industry-standard safeguards including encryption in transit
        (HTTPS), encrypted storage of WhatsApp access tokens, authentication,
        and role-based access within workspaces. No method of transmission or
        storage is completely secure; please use strong passwords and limit
        access to trusted teammates.
      </p>

      <h2>8. Your rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct,
        export, or delete personal data we hold about you. Contact{" "}
        <a href="mailto:greenerytrekking@gmail.com">
          greenerytrekking@gmail.com
        </a>{" "}
        to make a request. End customers of a business using our Service should
        contact that business first, as they are the controller of their
        customer data.
      </p>

      <h2>9. Children</h2>
      <p>
        The Service is intended for business use and is not directed to
        children under 13 (or the minimum age required in your jurisdiction).
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last
        updated&quot; date at the top will change when we do. Continued use of
        the Service after an update constitutes acceptance of the revised
        policy.
      </p>

      <h2>11. Contact</h2>
      <p>
        Greenery Trekking
        <br />
        Email:{" "}
        <a href="mailto:greenerytrekking@gmail.com">
          greenerytrekking@gmail.com
        </a>
      </p>
    </LegalArticle>
  );
}
