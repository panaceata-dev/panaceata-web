import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import RevealProvider from "@/components/RevealProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Panaceata Inc | Custom Software Development & Cloud Solutions",
  description:
    "Panaceata Inc is a global custom software development company specializing in application modernization, cloud migration, data engineering, outsource development, and managed cloud operations.",
  keywords:
    "custom software development, cloud migration services, application modernization, data engineering, business intelligence, outsource development, managed cloud operations, digital transformation",
  icons: {
    icon: "/image.png",
  },
  openGraph: {
    type: "website",
    title: "Panaceata Inc | Custom Software Development & Cloud Solutions",
    description:
      "Global custom software development company specializing in application modernization, cloud migration, data engineering, and managed cloud operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T6ZJGF3T');`,
                }}
      />
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />
      <body className="min-h-screen flex flex-col antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T6ZJGF3T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <RevealProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </RevealProvider>
      </body>
    </html>
  );
}
