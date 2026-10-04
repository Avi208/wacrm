import type { Metadata } from "next";
import { LegalArticle } from "@/components/legal/legal-article";

export const metadata: Metadata = {
  title: "Data Deletion Instructions",
  description:
    "How to request deletion of your Greenery Trekking and WhatsApp CRM data.",
};

export default function DataDeletionPage() {
  return (
    <LegalArticle
      title="Data Deletion Instructions"
      updated="4 October 2026"
    >
      <p>
        Meta requires apps that access user data to provide a way for users to
        request deletion of that data. This page explains how to delete data
        associated with Greenery Trekking and our WhatsApp CRM Service.
      </p>

      <h2>1. Delete data inside the product</h2>
      <p>If you can still sign in to your workspace:</p>
      <ul>
        <li>
          Delete contacts, conversations, broadcasts, templates, or other CRM
          records from the corresponding screens in the app.
        </li>
        <li>
          Disconnect WhatsApp under <strong>Settings → WhatsApp</strong> to
          remove stored access tokens and stop inbound/outbound processing for
          that number.
        </li>
        <li>
          Remove invited teammates you no longer want to have access.
        </li>
      </ul>

      <h2>2. Request full account / workspace deletion</h2>
      <p>
        To permanently delete your account, workspace, and associated stored
        data, email us from the address on your account:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:greenerytrekking@gmail.com?subject=Data%20deletion%20request">
            greenerytrekking@gmail.com
          </a>
        </li>
        <li>Subject: Data deletion request</li>
        <li>
          Include: your account email, workspace / business name, and whether
          you also want WhatsApp configuration and message history removed.
        </li>
      </ul>
      <p>
        We will confirm the request and delete or anonymize personal data we
        control within <strong>30 days</strong>, except where we must retain
        limited records for legal, security, or accounting reasons.
      </p>

      <h2>3. Meta / Facebook login data</h2>
      <p>
        If you connected a Meta app or Facebook account as part of setup, you
        can also remove our app from your Facebook settings:
      </p>
      <ul>
        <li>
          Facebook → Settings &amp; privacy → Settings → Apps and websites →
          remove Greenery Trekking / the related app.
        </li>
      </ul>
      <p>
        Removing the app in Facebook does not automatically wipe CRM records
        stored in our database — still send the email request above for a full
        deletion.
      </p>

      <h2>4. End customers (people who messaged a business)</h2>
      <p>
        If you messaged a business that uses our Service and want your chat
        history deleted, contact that business directly. They control customer
        WhatsApp data in their workspace. You may also contact us at the email
        above and we will help route the request to the business account holder
        when we can identify them.
      </p>

      <h2>5. Questions</h2>
      <p>
        Privacy questions:{" "}
        <a href="mailto:greenerytrekking@gmail.com">
          greenerytrekking@gmail.com
        </a>
        . See also our <a href="/privacy">Privacy Policy</a> and{" "}
        <a href="/terms">Terms of Service</a>.
      </p>
    </LegalArticle>
  );
}
