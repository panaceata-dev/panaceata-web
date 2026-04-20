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
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  authors: [{ name: "Panaceata Inc" }],
  creator: "Panaceata Inc",
  publisher: "Panaceata Inc",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://panaceata.com",
    siteName: "Panaceata Inc",
    title: "Panaceata Inc | Custom Software Development & Cloud Solutions",
    description:
      "Global custom software development company specializing in application modernization, cloud migration, data engineering, and managed cloud operations.",
    images: [
      {
        url: "https://panaceata.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Panaceata Inc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panaceata Inc | Custom Software Development & Cloud Solutions",
    description:
      "Global custom software development company specializing in application modernization, cloud migration, data engineering, and managed cloud operations.",
    images: ["https://panaceata.com/og-image.png"],
  },
  alternates: {
    canonical: "https://panaceata.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Panaceata Inc",
              url: "https://panaceata.com",
              logo: "https://panaceata.com/logo.png",
              description:
                "Global custom software development company specializing in application modernization, cloud migration, data engineering, and managed cloud operations.",
              sameAs: [
                "https://www.linkedin.com/company/panaceata",
                "https://twitter.com/panaceata",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+1-XXX-XXX-XXXX",
                email: "contact@panaceata.com",
              },
            }),
          }}
        />
      </head>
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
