import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getFooterData } from "@/sanity/queries/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const baskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Infinity Global Solutions — Legal, Property & Business Services in Thailand",
    template: "%s | Infinity Global Solutions",
  },
  description:
    "Integrated legal, property, and business advisory services in Koh Phangan, Thailand. Supporting foreign investors, property buyers, and entrepreneurs.",
  metadataBase: new URL("https://igs-thailand.com"),
  openGraph: {
    siteName: "Infinity Global Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footerData = await getFooterData().catch(() => null);

  return (
    <html lang="en" className={`${inter.variable} ${baskerville.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer data={footerData} />
      </body>
    </html>
  );
}
