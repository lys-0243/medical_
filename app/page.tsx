import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Users, Clock, Shield, Phone, Calendar, Heart, Microscope, Chrome as Home, Headphones } from 'lucide-react';

const services = [
  {
    title: 'Consultations spécialisées',
    description: 'Consultation en gastro-entérologie avec nos médecins spécialistes expérimentés.',
    icon: Stethoscope,
    color: 'text-blue-600'
  },
  {
    title: 'Examens endoscopiques',
    description: 'Endoscopie digestive haute et basse avec équipements de dernière génération.',
    icon: Microscope,
    color: 'text-green-600'
  },
  {
    title: 'Consultation générale',
    description: 'Consultation médicale générale pour tous vos besoins de santé.',
    icon: Users,
    color: 'text-purple-600'
  },
  {
    title: 'Laboratoire',
    description: 'Analyses de laboratoire complètes avec résultats rapides et fiables.',
    icon: Shield,
    color: 'text-red-600'
  },
  {
    title: 'Médecine à domicile',
    description: 'Soins médicaux à domicile pour votre confort et sécurité.',
    icon: Home,
    color: 'text-orange-600'
  },
  {
    title: 'Soins palliatifs',
    description: 'Accompagnement et soins de confort pour améliorer la qualité de vie.',
    icon: Heart,
    color: 'text-pink-600'
  }
];

const features = [
  {
    title: 'Équipe expérimentée',
    description: 'Médecins spécialistes qualifiés et personnel soignant dévoué.',
    icon: Users
  },
  {
    title: 'Disponibilité 24/7',
    description: 'Service d\'urgence disponible 24h/24 et 7j/7 pour vos besoins urgents.',
    icon: Clock
  },
  {
    title: 'Équipements modernes',
    description: 'Technologies médicales de pointe pour des diagnostics précis.',
    icon: Shield
  }
];

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                  Votre santé digestive,
                  <span className="text-blue-600"> notre priorité</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Centre médical spécialisé en gastro-entérologie offrant des soins 
                  de qualité avec une équipe médicale expérimentée à Kinshasa.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/appointment">
                    <Calendar className="w-5 h-5 mr-2" />
                    Prendre rendez-vous
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-red-500 text-red-600 hover:bg-red-50">
                  <Link href="tel:+243999981735">
                    <Phone className="w-5 h-5 mr-2" />
                    Urgence: +243 999 981 735
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-gray-600">Patients soignés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Service d'urgence</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-center items-center text-center space-y-6">
                  <Stethoscope className="w-24 h-24 text-white/80" />
                  <h3 className="text-2xl font-bold">CGEK</h3>
                  <p className="text-blue-100">
                    Clinique Gastro-Entérologique de Kinshasa
                  </p>
                  <div className="flex items-center space-x-2 text-blue-200">
                    <Shield className="w-5 h-5" />
                    <span>Soins certifiés</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir CGEK ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous combinons expertise médicale, technologies modernes et approche humaine 
              pour vous offrir les meilleurs soins possibles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services médicaux spécialisés pour répondre 
              à tous vos besoins de santé digestive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link href="/services">
                Voir tous nos services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Prêt à prendre soin de votre santé ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour planifier votre consultation 
              avec nos spécialistes expérimentés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/appointment">
                  <Calendar className="w-5 h-5 mr-2" />
                  Prendre rendez-vous
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}