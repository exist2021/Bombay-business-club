import { AnimatedDiv } from '@/components/ui/AnimatedDiv';

export default function PrivacyPolicyPage() {
  return (
    <AnimatedDiv>
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-wider">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-foreground/80 font-serif">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        <article className="text-xl md:text-2xl text-foreground/90 font-serif leading-relaxed space-y-6">
          <p>We respect your privacy and are committed to protecting it. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and pre-order "The Bombay Business Club".</p>
          
          <h2 className="text-3xl font-headline text-primary pt-6">Information We Collect</h2>
          <p>When you place a pre-order, we collect personal information required to process your payment and deliver your order. This includes:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your shipping address (for physical copies)</li>
            <li>Payment information (processed securely by our payment partner, Razorpay)</li>
          </ul>
          <p>We do not store your full credit card information on our servers. All payment transactions are processed through Razorpay, which has its own privacy policy and security measures.</p>

          <h2 className="text-3xl font-headline text-primary pt-6">How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>To process and fulfill your pre-order.</li>
            <li>To send you the digital version of the book.</li>
            <li>To ship the signed physical copy to your address.</li>
            <li>To communicate with you about your order, including confirmations and shipping updates.</li>
            <li>To send you occasional updates about the book and related news, if you opt-in.</li>
          </ul>

          <h2 className="text-3xl font-headline text-primary pt-6">Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.</p>

          <h2 className="text-3xl font-headline text-primary pt-6">Third-Party Disclosure</h2>
          <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you (like our payment processor and shipping partners), so long as those parties agree to keep this information confidential.</p>

          <h2 className="text-3xl font-headline text-primary pt-6">Your Consent</h2>
          <p>By using our site and placing a pre-order, you consent to our website's privacy policy.</p>

          <h2 className="text-3xl font-headline text-primary pt-6">Contact Us</h2>
          <p>If you have any questions regarding this privacy policy, you may contact us using the information below:</p>
          <p>Manoj Nayak<br />manoj@thebbc.shop</p>
        </article>
      </div>
    </AnimatedDiv>
  );
}
