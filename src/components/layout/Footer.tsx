export function Footer() {
  return (
    <footer className="py-6 px-4 md:px-8 border-t border-primary/20 mt-24">
      <div className="container mx-auto text-center text-muted-foreground text-sm space-y-2">
        <p>&copy; {new Date().getFullYear()} The Bombay Business Club. All rights reserved.</p>
        <p>
          The website was vibecoded by <a href="https://manojnayak.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">Manoj Nayak</a>.
        </p>
      </div>
    </footer>
  );
}
