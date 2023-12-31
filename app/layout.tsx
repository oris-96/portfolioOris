/** @format */

import 'normalize.css';
import Head from 'next/head';
import { Amita, Roboto_Mono, Montserrat } from 'next/font/google';

import './globals.css';
import { Navbar } from '.';
import { Footer } from '.';

export const metadata = {
  title: `Ibrahim's portfolio`,
  description: `Personal Portfolio`,
};

const amita = Amita({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-amita',
});

const roboto_mono = Roboto_Mono({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${amita.variable} ${roboto_mono.variable} ${montserrat.variable}`}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <div className=" overflow-hidden ">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
