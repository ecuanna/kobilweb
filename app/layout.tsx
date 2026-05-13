import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KOBIL Ventures',
  description: 'Next.js implementation generated from the provided Figma design.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
