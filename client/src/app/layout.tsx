import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <main className="flex min-h-screen items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
