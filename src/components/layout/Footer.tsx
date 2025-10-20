export function Footer() {
  return (
    <footer className="py-6 px-4 md:px-8 border-t border-primary/20 mt-24">
      <div className="container mx-auto text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} The Obsidian Scroll. All rights reserved.</p>
      </div>
    </footer>
  );
}
