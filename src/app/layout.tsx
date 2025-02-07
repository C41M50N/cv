import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Head } from "@/components/head";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Charles Buffington's CV",
  description: '...'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en" 
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        GeistSans.variable,
				GeistMono.variable
      )}
    >
      <Head metadata={metadata} />
      <Analytics />
      <body>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
