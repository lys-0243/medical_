'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Rendez-vous', href: '/appointment' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md fixed w-full z-50 top-0">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-blue-700">CGEK</span>
              <p className="text-sm text-gray-600">Clinique Gastro-Entérologique</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  pathname === item.href && 'text-blue-600 bg-blue-50'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Urgence
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium',
                    pathname === item.href && 'text-blue-600 bg-blue-50'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white ml-3 mt-2">
                <Phone className="w-4 h-4 mr-2" />
                Urgence
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}