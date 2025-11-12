import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'The Bombay Business Club',
  description: 'Behind Bombay’s glittering elite lies a business built on buried secrets.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap" rel="stylesheet" />
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <Script id="firebase-analytics" strategy="afterInteractive">
          {`
            // Import the functions you need from the SDKs you need
            import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
            import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries

            // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            const firebaseConfig = {
              apiKey: "AIzaSyBEumt4pBAUM52NB8eff5lObx2ABJF_IOA",
              authDomain: "studio-6153032827-bcb85.firebaseapp.com",
              projectId: "studio-6153032827-bcb85",
              storageBucket: "studio-6153032827-bcb85.firebasestorage.app",
              messagingSenderId: "690261451295",
              appId: "1:690261451295:web:f11bc06145ff5e65146b2a",
              measurementId: "G-KLXGV1RN65"
            };

            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);
          `}
        </Script>
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
