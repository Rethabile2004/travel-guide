"use client";

import { Share2, LinkIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function ShareButton() {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Share this page">
          <Share2 className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex gap-2">
          <Input value={shareUrl} readOnly />
          <Button onClick={copyToClipboard} size="icon" aria-label="Copy link">
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <LinkIcon className="h-4 w-4" />}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
