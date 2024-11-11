import "./globals.css";
import { Metadata } from 'next';

export const metadata = {
  title: 'Brandon Muro | Desarrollador de Software',
  description: 'Portfolio de Mario Brandon Muro Ramos, desarrollador de software y innovador social',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.jpg" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}