import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { COMPANY } from '@/lib/data';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const emylis = localFont({
  src: './fonts/Emylis.otf',
  variable: '--font-emylis',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `Elemental Floral By TKM Designs — Houston Floral Design`,
  description:
    'Elemental Floral By TKM Designs is a full-service Houston florist and floral studio in Houston, TX — specializing in wedding florals, event rentals, and corporate celebrations.',
  keywords:
    'floral design Houston, wedding florist Houston, event florals Houston, Elemental Floral By TKM Designs, Tawnya Morse florist',
  openGraph: {
    title: `Elemental Floral By TKM Designs — Houston Floral Design`,
    description:
      'Art floral design and event rentals for weddings, galas, and celebrations across Greater Houston.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${emylis.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
