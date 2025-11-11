import { AnimatedDiv } from '@/components/ui/AnimatedDiv';

export default function TermsAndConditionsPage() {
  return (
    <AnimatedDiv>
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-wider">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-foreground/80 font-serif">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        <article className="text-xl md:text-2xl text-foreground/90 font-serif leading-relaxed space-y-6">
          <p>Please read these Terms and Conditions ("Terms") carefully before using this website and pre-ordering "The Bombay Business Club" (the "Service") operated by Manoj Nayak ("us", "we", or "our").</p>
          
          <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>

          <h2 className="text-3xl font-headline text-primary pt-6">1. Pre-Orders</h2>
          <p>By placing a pre-order for "The Bombay Business Club", you are agreeing to purchase the product which includes one (1) digital copy and one (1) personally signed physical copy of the book. You will be charged at the time of placing the pre-order. The digital copy is available for immediate download, while the physical copy will be shipped upon the book's official release. Release and shipping dates are estimates and subject to change.</p>

          <h2 className="text-3xl font-headline text-primary pt-6">2. Intellectual Property</h2>
          <p>The book, website, and all its original content, features, and functionality are and will remain the exclusive property of Manoj Nayak. The content is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Manoj Nayak. The digital copy provided is for personal use only and may not be redistributed, shared, or resold.</p>

          <h2 className="text-3xl font-headline text-primary pt-6">3. Links to Other Websites</h2>
          <p>Our Service may contain links to third-party websites or services that are not owned or controlled by us, such as our payment processor (Razorpay) and content delivery partners. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused by or in connection with the use of any such content, goods, or services available on or through any such websites or services.</p>

          <h2 className="text-3xl font-headline text-primary pt-6">4. Limitation of Liability</h2>
          <p>In no event shall Manoj Nayak, nor his directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

          <h2 className="text-3xl font-headline text-primary pt-6">5. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
          
          <h2 className="text-3xl font-headline text-primary pt-6">6. Changes</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms and Conditions on this page.</p>

          <h2 className="text-3xl font-headline text-primary pt-6">Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at manoj@thebbc.shop.</p>
        </article>
      </div>
    </AnimatedDiv>
  );
}
