export function Footer() {
  return (
    <footer className="py-6 px-4 md:px-8 border-t border-border/40 mt-12 bg-secondary/50">
      <div className="container mx-auto text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} The Bombay Business Club. All rights reserved.</p>
        <p className="mt-2">A novel by an aspiring author.</p>
      </div>
    </footer>
  );
}
