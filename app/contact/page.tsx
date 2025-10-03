import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  Navigation,
  Building
} from 'lucide-react';

const contactInfo = [
  {
    title: 'Adresse',
    icon: MapPin,
    color: 'text-blue-600',
    details: [
      'Boulevard Lumumba, N°05',
      'Q/ Immo-Congo, C/ Limete',
      'Kinshasa, République Démocratique du Congo'
    ],
    action: null
  },
  {
    title: 'Téléphone',
    icon: Phone,
    color: 'text-green-600',
    details: ['+243 999 981 735'],
    action: {
      text: 'Appeler maintenant',
      href: 'tel:+243999981735'
    }
  },
  {
    title: 'Email',
    icon: Mail,
    color: 'text-purple-600',
    details: ['contact@cgek.cd', 'info@cgek.cd'],
    action: {
      text: 'Envoyer un email',
      href: 'mailto:contact@cgek.cd'
    }
  },
  {
    title: 'Horaires d\'ouverture',
    icon: Clock,
    color: 'text-orange-600',
    details: [
      'Lundi - Vendredi : 7h00 - 18h00',
      'Samedi : 8h00 - 14h00',
      'Dimanche : Urgences uniquement'
    ],
    action: null
  }
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nous
              <span className="text-blue-600"> Contacter</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans vos besoins de santé.
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
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                  
                  {info.action && (
                    <Button asChild variant="outline" size="sm" className="mt-4">
                      <Link href={info.action.href}>
                        {info.action.text}
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Notre Localisation
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  La CGEK est stratégiquement située au Boulevard Lumumba dans la commune 
                  de Limete, facilement accessible depuis tous les quartiers de Kinshasa.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Adresse complète</h3>
                    <p className="text-gray-600">
                      Boulevard Lumumba, N°05<br />
                      Quartier Immo-Congo<br />
                      Commune de Limete<br />
                      Kinshasa, République Démocratique du Congo
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Navigation className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Point de repère</h3>
                    <p className="text-gray-600">
                      Station de service Sonaydro (1ère rue)<br />
                      En face de l'église Cité Bethel<br />
                      Proche du marché Limete
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">
                    Comment nous trouver ?
                  </h3>
                  <ul className="text-blue-800 space-y-2 text-sm">
                    <li>• Depuis le centre-ville : Prendre le Boulevard Lumumba direction Limete</li>
                    <li>• Transport en commun : Arrêt "Immo-Congo" ou "Station Sonaydro"</li>
                    <li>• En taxi/voiture : Parking disponible devant la clinique</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Google Maps Embed */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">Carte Google Maps</p>
                    <p className="text-sm">
                      Boulevard Lumumba, Limete<br />
                      Kinshasa, RDC
                    </p>
                  </div>
                </div>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-700 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Urgences 24/7
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-600 mb-4">
                    En cas d'urgence médicale, n'hésitez pas à nous contacter 
                    à tout moment.
                  </p>
                  <Button asChild className="bg-red-500 hover:bg-red-600 w-full">
                    <Link href="tel:+243999981735">
                      <Phone className="w-4 h-4 mr-2" />
                      Appeler : +243 999 981 735
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Une question ? Besoin d'aide ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Notre équipe est là pour vous renseigner et vous accompagner 
              dans toutes vos démarches de santé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/appointment">
                  <Calendar className="w-5 h-5 mr-2" />
                  Prendre rendez-vous
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="tel:+243999981735">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}