import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-700 font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">CGEK</h3>
                <p className="text-blue-200">Clinique Gastro-Entérologique de Kinshasa</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4 max-w-md">
              Votre santé digestive est notre priorité. Nous offrons des soins spécialisés 
              de qualité avec une équipe médicale expérimentée et des équipements modernes.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-blue-100 hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/services" className="text-blue-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/appointment" className="text-blue-100 hover:text-white transition-colors">Prendre RDV</Link></li>
              <li><Link href="/contact" className="text-blue-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div className="text-blue-100 text-sm">
                  <p>Boulevard Lumumba, N°05</p>
                  <p>Q/ Immo-Congo, C/ Limete</p>
                  <p>Kinshasa, RDC</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-300" />
                <span className="text-blue-100">+243 999 981 735</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-300" />
                <span className="text-blue-100 text-sm">Lun-Ven: 7h-18h, Sam: 8h-14h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2024 CGEK - Clinique Gastro-Entérologique de Kinshasa. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}