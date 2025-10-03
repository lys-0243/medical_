import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CGEK - Clinique Gastro-Entérologique de Kinshasa',
  description: 'Centre médical spécialisé en gastro-entérologie à Kinshasa. Consultations, examens endoscopiques, soins à domicile et plus.',
  keywords: 'gastro-entérologie, clinique, Kinshasa, médecine, consultations, endoscopie',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}