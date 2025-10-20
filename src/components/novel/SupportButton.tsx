'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HandHeart, QrCode, CreditCard } from "lucide-react";

export function SupportButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <HandHeart className="mr-2 h-4 w-4" />
          Support the Author
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary">Support the Novel</DialogTitle>
          <DialogDescription>
            If you enjoy "The Bombay Business Club", please consider supporting the author. Your contribution helps in creating more chapters.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button asChild size="lg" variant="outline">
            <a href="https://paypal.me/your-username" target="_blank" rel="noopener noreferrer">
              <CreditCard className="mr-2 h-5 w-5 text-blue-500" />
              Support with PayPal
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="upi://pay?pa=your-upi-id@okhdfcbank&pn=AuthorName" target="_blank" rel="noopener noreferrer">
              <QrCode className="mr-2 h-5 w-5 text-green-500" />
              Support with UPI
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
