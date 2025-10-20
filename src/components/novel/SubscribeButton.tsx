"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export function SubscribeButton() {
  return (
    <Button asChild variant="default">
      <Link href="https://manojnayakcom.substack.com/" target="_blank" rel="noopener noreferrer">
        <Mail className="mr-2 h-4 w-4" />
        Subscribe
      </Link>
    </Button>
  );
}
