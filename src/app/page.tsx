
import { AnimatedDiv } from '@/components/ui/AnimatedDiv';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { bookCover } from '@/lib/chapters';
import Image from 'next/image';
import Link from 'next/link';
import { Book, Feather, IndianRupee, DollarSign, QrCode } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Home() {
  return (
    <AnimatedDiv>
      <div className="container mx-auto px-4 py-8 md:py-16">
        
        {/* Hero Section */}
        <header className="flex flex-col items-center text-center py-12 md:py-20 relative">
          <div 
            className="absolute inset-0 bg-radial-gradient--t opacity-30" 
            style={{
              background: 'radial-gradient(ellipse at top, hsl(var(--primary) / 0.15), transparent 60%)'
            }}
          />
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-wider">
            The Bombay Business Club
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-foreground/80 font-serif">
            Behind Bombay’s glittering elite lies a business built on buried secrets.
          </p>
          
          <div className="mt-12 w-full max-w-2xl aspect-video relative bg-card/50 border-2 border-primary/50 rounded-lg shadow-[0_0_20px_hsl(var(--primary)/0.3)] overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/1128958261"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className='absolute top-0 left-0 w-full h-full'
              title="The Bombay Business Club - Book Trailer"
            ></iframe>
          </div>
          
          <Button size="lg" className="mt-12 bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]" asChild>
            <Link href="https://2532618660820.gumroad.com/l/zsgti" target="_blank">Download for free</Link>
          </Button>
        </header>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        {/* Synopsis Section */}
        <section id="synopsis" className="max-w-4xl mx-auto scroll-mt-20">
          <h2 className="text-4xl font-headline text-primary mb-8 text-center">Synopsis</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="w-64 h-96 mx-auto md:mx-0 relative bg-card/50 border-2 border-primary/50 rounded-lg shadow-[0_0_20px_hsl(var(--primary)/0.3)] flex items-center justify-center overflow-hidden">
                <Image 
                  src={bookCover.imageUrl}
                  alt={bookCover.description}
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={bookCover.imageHint}
                />
              </div>
            </div>
            <div className="md:w-2/3 space-y-6 text-lg text-foreground/90 font-serif leading-relaxed text-left">
              <p>Born into one of Bombay’s most elite families, Anya Chandra can bend thoughts and read the hidden corners of the human mind. At fifteen, her father—a second generation Bombay Elite — ordered her first betrayal. Two decades later, she is his most valuable secret, shaping fates from the shadows of South Bombay’s wealth and corruption. But power has left her hollow, and obedience has become a prison. As Anya begins to question the empire built on her gift, she must choose between blood and freedom—between the family that owns her and the self she’s never dared to claim.</p>
            </div>
          </div>
        </section>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        {/* Pre-order Section */}
        <section id="pre-order" className="max-w-3xl mx-auto text-center scroll-mt-20 bg-card/30 border border-primary/20 rounded-lg p-8 md:p-12 shadow-[0_0_25px_hsl(var(--primary)/0.2)]">
          <h2 className="text-4xl font-headline text-primary mb-6">Pre-order Your Copy</h2>
          <div className="text-lg text-foreground/90 font-serif leading-relaxed space-y-6">
            <p>Be one of the first to own "The Bombay Business Club". Your pre-order includes:</p>
            <ul className="text-left max-w-md mx-auto space-y-3 list-inside">
              <li className="flex items-start gap-3">
                <Book className="w-5 h-5 mt-1 text-primary/80 shrink-0"/>
                <span>A personally signed physical copy of the book, delivered to your doorstep.</span>
              </li>
              <li className="flex items-start gap-3">
                <Feather className="w-5 h-5 mt-1 text-primary/80 shrink-0"/>
                <span>An immediate digital version to start reading right away.</span>
              </li>
            </ul>
            <p>Secure your special edition and support the novel's journey.</p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]" asChild>
              <Link href="gpay://upi/pay?pa=9892334681@ybl&pn=Manoj%20Nayak&am=99&cu=INR&tn=Bombay%20Business%20Club%20Pre-order" target="_blank">
                <IndianRupee />
                Pre-order (₹99)
              </Link>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-primary/10 text-primary hover:bg-primary/20 rounded-md">
                  <QrCode />
                  Scan QR to Pay
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-card border-primary/30">
                <DialogHeader>
                  <DialogTitle className="text-primary font-headline text-2xl">Scan to Pay (₹99)</DialogTitle>
                  <DialogDescription>
                    Use any UPI app to scan the QR code and complete your payment.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center justify-center p-4">
                  <Image src="https://i.postimg.cc/nLwhm5vf/63a04444-3acc-40e0-afb2-a40f9b5f0c22.jpg" alt="UPI QR Code" width={250} height={250} className="rounded-lg border-2 border-primary/50"/>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="mt-4">
            <Button size="lg" className="w-full sm:w-auto bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]" asChild>
              <Link href="https://www.paypal.com/paypalme/manojrnayak/5USD" target="_blank">
                <DollarSign />
                Pre-order ($5)
              </Link>
            </Button>
          </div>
        </section>

        <Separator className="my-12 md:my-20 bg-primary/20" />


        {/* Author Section */}
        <section id="author" className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 scroll-mt-20">
          <Image 
            src="https://i.postimg.cc/ZR93sssq/IMG-4571.jpg" 
            alt="Author Portrait" 
            width={200}
            height={200}
            className="rounded-full border-4 border-primary/30 shadow-lg"
            data-ai-hint="author portrait"
          />
          <div className='text-center md:text-left'>
            <h2 className="text-4xl font-headline text-primary mb-4">About the Author</h2>
            <p className="text-lg text-foreground/90 font-serif leading-relaxed">
              <a href="https://manojnayak.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">Manoj Nayak</a> is a writer, digital creator, and storyteller exploring the intersections of technology, philosophy, and human connection. His writing portfolio spans long-form essays, newsletters, and short stories that blend reflection with real-world observation. Through his website manojnayak.com and platforms like Substack, he builds what he calls “vibe-coded” narratives—bridging creativity and consciousness. Previously a community builder and entrepreneur, Manoj now focuses on personal knowledge management, experimental apps, and essay-driven media. His recent works, such as “Sadhu Laxmandas,” draw from his nomadic travels across India, combining introspection, humor, and wisdom to illuminate the search for meaning.
            </p>
          </div>
        </section>

        <Separator className="my-12 md:my-20 bg-primary/20" />

        {/* Read a Chapter Section */}
        <section id="read-chapter" className="max-w-2xl mx-auto text-center scroll-mt-20">
          <h2 className="text-4xl font-headline text-primary mb-8">Read Free Chapters</h2>
          <p className="text-lg text-foreground/90 font-serif leading-relaxed mb-8">
            Be among the first to delve into the mysteries of The Bombay Business Club. Read the first eight chapters for free.
          </p>
          <Button size="lg" className="bg-primary/90 text-primary-foreground hover:bg-primary rounded-md shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]" asChild>
            <Link href="/chapters">Read Free Chapters</Link>
          </Button>
        </section>
      </div>
    </AnimatedDiv>
  );
}

    