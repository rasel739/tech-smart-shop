import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/layout/navbar/navbar';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Tech Smart Shop - Buy Smart Devices Online',
    template: '%s | Tech Smart Shop',
  },
  description:
    'Buy latest smartphones, laptops and tech accessories at Tech Smart Shop. Fast delivery across Bangladesh.',
  keywords: ['Smartphones Bangladesh', 'Laptops BD', 'Tech Store Online', 'Buy Gadgets BD'],
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: 'Tech Smart Shop',
    description: 'Best tech store in Bangladesh',
    url: 'https://yourdomain.com',
    siteName: 'Tech Smart Shop',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className='flex min-h-screen flex-col'>
          <div className='container mx-auto flex-1  '>
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
