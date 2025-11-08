import { AnimatedDiv } from '@/components/ui/AnimatedDiv';

export default function RefundPolicyPage() {
  return (
    <AnimatedDiv>
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-wider">
            Refund & Cancellation Policy
          </h1>
          <p className="mt-4 text-lg text-foreground/80 font-serif">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        <article className="text-lg text-foreground/90 font-serif leading-relaxed space-y-6">
          <p>Thank you for pre-ordering "The Bombay Business Club". We appreciate your support. Please read our policy on refunds and cancellations carefully.</p>
          
          <h2 className="text-3xl font-headline text-primary pt-6">Digital Product</h2>
          <p>As the pre-order includes an immediate digital version of the work-in-progress book, all sales are final. We do not offer refunds or cancellations for the digital product once the order is complete and the digital file has been made available to you.</p>

          <h2 className="text-3xl font-headline text-primary pt-6">Physical Product</h2>
          <p>The physical copy of the book is a special, personally signed edition that is prepared based on pre-orders.</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Cancellation:</strong> You may cancel your pre-order for a full refund within 48 hours of placing the order. After this period, cancellations are not possible as the order is processed for fulfillment.</li>
            <li><strong>Refunds for Damaged Items:</strong> If your signed physical copy arrives damaged, please contact us within 7 days of receipt with photographic evidence of the damage. We will be happy to send a replacement copy at no additional charge. We do not offer refunds for cosmetic damage or other issues that do not affect the readability of the book.</li>
          </ul>

          <h2 className="text-3xl font-headline text-primary pt-6">How to Request a Cancellation or Report Damage</h2>
          <p>To cancel your order within the 48-hour window or to report a damaged item, please email us at manoj@thebbc.shop with your order number and a clear description of your request.</p>

          <h2 className="text-3xl font-headline text-primary pt-6">Contact Us</h2>
          <p>If you have any questions about our Refund & Cancellation Policy, please contact us:</p>
          <p>Manoj Nayak<br />manoj@thebbc.shop</p>
        </article>
      </div>
    </AnimatedDiv>
  );
}
