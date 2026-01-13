import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Terms and Conditions</h1>
        <p className="text-muted-foreground mt-2">Effective Date: January 13, 2026</p>
      </header>

      <section className="space-y-6 text-muted-foreground">
        <p>
          Please read these terms and conditions carefully before using Our Service.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Conditions of Use</h2>
        <p>
          We will provide their services to you, which are subject to the conditions stated in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions.
        </p>

        <h3 className="text-xl font-semibold text-foreground">Privacy Policy</h3>
        <p>
          Before you continue using our website we advise you to read our <Link href="/privacy" className="underline hover:text-primary">privacy policy</Link> regarding our user data collection. It will help you better understand our practices.
        </p>

        <h3 className="text-xl font-semibold text-foreground">User Accounts</h3>
        <p>
          As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account.
        </p>

        <h3 className="text-xl font-semibold text-foreground">Reviews, Comments, and Content</h3>
        <p>
          Visitors may post content as long as it is not obscene, illegal, defamatory, threatening, infringing of intellectual property rights, invasive of privacy or injurious in any other way to third parties. We reserve all rights (but not the obligation) to remove and/or edit such content. When you post your content, you grant TravelGuide non-exclusive, royalty-free and irrevocable right to use, reproduce, publish, modify such content throughout the world in any media.
        </p>

        <h3 className="text-xl font-semibold text-foreground">Limitation of Liability</h3>
        <p>
          TravelGuide is not liable for any damages that may occur to you as a result of your misuse of our website. This includes reliance on travel guides or third-party links to attractions.
        </p>
      </section>
    </main>
  );
}
