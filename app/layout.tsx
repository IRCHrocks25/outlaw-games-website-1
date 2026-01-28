import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { SubdomainWrapper } from "@/components/subdomain-wrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Outlaw",
  description: "Outlaw Games",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/outlaw-20lime-20green-20logo-20.png",
        type: "image/png",
      },
    ],
    apple: "/images/outlaw-20lime-20green-20logo-20.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R9XJT8C3BW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R9XJT8C3BW');
          `}
        </Script>
        {children}
        <SubdomainWrapper />
        <Analytics />
      </body>
    </html>
  );
}
