import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground mt-2">Last updated: January 13, 2026</p>
      </header>

      <section className="space-y-6 text-muted-foreground">
        <p>
          This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>
        
        <h2 className="text-2xl font-semibold text-foreground">Interpretation and Definitions</h2>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the following conditions.
        </p>

        <h3 className="text-xl font-semibold text-foreground">Collecting and Using Your Personal Data</h3>
        <p>
          While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Email address (via Clerk authentication)</li>
          <li>Usage Data</li>
          <li>Payment information (handled securely via Stripe)</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground">Use of Your Personal Data</h3>
        <p>
          The Company may use Personal Data for the following purposes:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>To provide and maintain our Service, including monitoring the usage of our Service.</li>
          <li>To manage Your Account: to manage Your registration as a user of the Service.</li>
          <li>For the performance of a contract: for the purchase of premium guides and experiences via Stripe.</li>
          <li>To contact You for updates or informational communications related to the functionalities.</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground">Security of Your Personal Data</h3>
        <p>
          The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. We use Supabase and Prisma to store your data securely.
        </p>

        <p>
          If you have any questions about this Privacy Policy, You can contact us:
        </p>
        <ul className="list-disc pl-5">
          <li>By email: <Link href="/contact" className="underline hover:text-primary">contact us</Link></li>
        </ul>
      </section>
    </main>
  );
}
