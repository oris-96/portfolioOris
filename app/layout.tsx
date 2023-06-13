/** @format */

import 'normalize.css';

import './globals.css';
import { Navbar } from '.';

export const metadata = {
  title: `Ibrahim's portfolio`,
  description: `Personal Portfolio`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
