import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Stethoscope, Microscope, Users, Shield, Chrome as Home, Heart, Headphones, Calendar, Clock, Phone } from 'lucide-react';

const services = [
  {
    title: 'Consultations spécialisées',
    description: 'Consultation en gastro-entérologie avec nos médecins spécialistes expérimentés pour le diagnostic et le traitement des pathologies digestives.',
    icon: Stethoscope,
    color: 'text-blue-600',
    features: [
      'Consultation gastro-entérologique',
      'Diagnostic des troubles digestifs',
      'Traitement des maladies du foie',
      'Suivi des pathologies chroniques'
    ],
    price: 'À partir de 50$',
    duration: '30-45 minutes'
  },
  {
    title: 'Examens endoscopiques',
    description: 'Endoscopie digestive haute et basse avec équipements de dernière génération pour un diagnostic précis et des interventions thérapeutiques.',
    icon: Microscope,
    color: 'text-green-600',
    features: [
      'Fibroscopie œso-gastro-duodénale',
      'Coloscopie complète',
      'Rectoscopie',
      'Biopsies si nécessaires'
    ],
    price: 'À partir de 150$',
    duration: '20-40 minutes'
  },
  {
    title: 'Consultation générale',
    description: 'Consultation médicale générale pour tous vos besoins de santé avec orientation spécialisée si nécessaire.',
    icon: Users,
    color: 'text-purple-600',
    features: [
      'Examen médical complet',
      'Diagnostic général',
      'Orientation spécialisée',
      'Suivi médical régulier'
    ],
    price: 'À partir de 30$',
    duration: '20-30 minutes'
  },
  {
    title: 'Laboratoire',
    description: 'Analyses de laboratoire complètes avec résultats rapides et fiables pour le diagnostic et le suivi des pathologies.',
    icon: Shield,
    color: 'text-red-600',
    features: [
      'Analyses biochimiques',
      'Hématologie complète',
      'Marqueurs tumoraux',
      'Sérologies diverses'
    ],
    price: 'Variable selon analyses',
    duration: 'Résultats sous 24-48h'
  },
  {
    title: 'Médecine à domicile',
    description: 'Soins médicaux à domicile pour votre confort et sécurité, particulièrement adaptés aux patients à mobilité réduite.',
    icon: Home,
    color: 'text-orange-600',
    features: [
      'Consultations à domicile',
      'Soins infirmiers',
      'Prélèvements sanguins',
      'Suivi post-hospitalisation'
    ],
    price: 'À partir de 80$',
    duration: 'Selon besoins'
  },
  {
    title: 'Soins palliatifs',
    description: 'Accompagnement et soins de confort pour améliorer la qualité de vie des patients en phase avancée de maladie.',
    icon: Heart,
    color: 'text-pink-600',
    features: [
      'Gestion de la douleur',
      'Support psychologique',
      'Accompagnement familial',
      'Soins de confort'
    ],
    price: 'Selon programme',
    duration: 'Suivi continu'
  },
  {
    title: 'Centre d\'écoute',
    description: 'Service d\'écoute et de soutien psychologique pour accompagner patients et familles dans les moments difficiles.',
    icon: Headphones,
    color: 'text-teal-600',
    features: [
      'Écoute psychologique',
      'Soutien aux familles',
      'Conseil en santé mentale',
      'Orientation spécialisée'
    ],
    price: 'Service gratuit',
    duration: 'Selon besoin'
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos Services
            <span className="text-blue-600"> Médicaux</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Une gamme complète de services médicaux spécialisés pour répondre à tous 
            vos besoins de santé digestive avec excellence et humanité.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/appointment">
                <Calendar className="w-5 h-5 mr-2" />
                Prendre rendez-vous
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-red-500 text-red-600 hover:bg-red-50">
              <Link href="tel:+243999981735">
                <Phone className="w-5 h-5 mr-2" />
                Urgence
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors flex-shrink-0">
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 mb-4">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Services inclus :</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Price and Duration */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <div className="flex items-center text-gray-500 mb-1">
                        <span className="text-sm">Prix :</span>
                      </div>
                      <div className="font-semibold text-blue-600">{service.price}</div>
                    </div>
                    <div>
                      <div className="flex items-center text-gray-500 mb-1">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">Durée :</span>
                      </div>
                      <div className="font-medium text-gray-900">{service.duration}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-red-50 border-y border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service d'Urgence 24/7</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              En cas d'urgence médicale, notre équipe est disponible 24 heures sur 24, 
              7 jours sur 7 pour vous fournir les soins nécessaires.
            </p>
            <Button asChild size="lg" className="bg-red-500 hover:bg-red-600">
              <Link href="tel:+243999981735">
                <Phone className="w-5 h-5 mr-2" />
                Appeler maintenant : +243 999 981 735
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
              Besoin d'une consultation ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Nos spécialistes sont là pour vous accompagner. Prenez rendez-vous 
              dès aujourd'hui pour bénéficier de nos services de qualité.
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