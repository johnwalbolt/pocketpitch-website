import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Pocket Pitch",
  description:
    "Terms of Service for Pocket Pitch, the vocal toolkit app for singers.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-20 pt-32">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Pocket Pitch Terms of Service
        </h1>
        <p className="mb-12 text-sm text-muted">Last Updated: December 20, 2025</p>

        <div className="space-y-10 text-foreground">
          <Section title="1. Acceptance of Terms">
            <p>
              By using PocketPitch, you agree to these Terms of Service. If you
              don&apos;t agree, please don&apos;t use the app.
            </p>
          </Section>

          <Section title="2. The App">
            <p>
              PocketPitch provides vocal training tools including a tuner, piano,
              and vocal warmup exercises.
            </p>
          </Section>

          <Section title="3. Free vs. Premium">
            <ul className="list-disc space-y-1 pl-5">
              <li>Free: Access to tuner, piano, and pitch pipe with ads</li>
              <li>
                Premium Subscription: Ad removal and access to all vocal warmup
                exercises
              </li>
              <li>Monthly: $0.99/month</li>
              <li>Annual: $8.99/year</li>
            </ul>
          </Section>

          <Section title="4. Subscription Terms">
            <ul className="list-disc space-y-1 pl-5">
              <li>Subscriptions auto-renew until canceled</li>
              <li>
                Cancel anytime in iOS Settings &gt; Apple ID &gt; Subscriptions
              </li>
              <li>
                Payment charged to iTunes Account at purchase confirmation
              </li>
              <li>No refunds for partial subscription periods</li>
              <li>
                Access continues until end of current billing period after
                cancellation
              </li>
            </ul>
          </Section>

          <Section title="5. Account & Usage">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                You&apos;re responsible for your device and account security
              </li>
              <li>
                Don&apos;t misuse the app or attempt to hack/reverse engineer it
              </li>
              <li>We may terminate accounts that violate these terms</li>
            </ul>
          </Section>

          <Section title="6. Health Disclaimer">
            <p>
              PocketPitch is for educational purposes. Consult a vocal coach or
              medical professional before starting any vocal training program.
              We&apos;re not responsible for any vocal strain or injury.
            </p>
          </Section>

          <Section title="7. Changes to Service">
            <p>
              We may modify features, content, or pricing with advance notice.
              Continued use means you accept the changes.
            </p>
          </Section>

          <Section title="8. Intellectual Property">
            <p>
              All content, designs, and features are owned by PocketPitch.
              Don&apos;t copy, modify, or distribute our content.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              PocketPitch is provided &quot;as is&quot; without warranties.
              We&apos;re not liable for damages from using the app.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              For questions or support:{" "}
              <a
                href="mailto:johnpocketpitch@yahoo.com"
                className="text-primary underline hover:text-primary-dark"
              >
                johnpocketpitch@yahoo.com
              </a>
            </p>
          </Section>

          <Section title="11. Changes to Terms">
            <p>
              We may update these terms. Check this page periodically for
              changes.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-semibold text-foreground">{title}</h2>
      <div className="leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}
