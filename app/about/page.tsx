import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Users, 
  Award, 
  Heart, 
  Shield, 
  Target, 
  Calendar,
  Stethoscope,
  Building
} from 'lucide-react';

const values = [
  {
    title: 'Excellence médicale',
    description: 'Nous maintenons les plus hauts standards de soins médicaux avec une formation continue de notre équipe.',
    icon: Award,
    color: 'text-blue-600'
  },
  {
    title: 'Approche humaine',
    description: 'Chaque patient est unique. Nous offrons des soins personnalisés avec empathie et respect.',
    icon: Heart,
    color: 'text-red-500'
  },
  {
    title: 'Sécurité des patients',
    description: 'La sécurité et le bien-être de nos patients sont notre priorité absolue dans tous nos services.',
    icon: Shield,
    color: 'text-green-600'
  },
  {
    title: 'Innovation',
    description: 'Nous investissons dans les technologies médicales modernes pour offrir les meilleurs diagnostics.',
    icon: Target,
    color: 'text-purple-600'
  }
];

const team = [
  {
    name: 'Dr. Marie Kabila',
    role: 'Gastro-entérologue senior',
    experience: '15 ans d\'expérience',
    speciality: 'Endoscopie digestive'
  },
  {
    name: 'Dr. Jean Mukendi',
    role: 'Médecin généraliste',
    experience: '12 ans d\'expérience',
    speciality: 'Soins palliatifs'
  },
  {
    name: 'Dr. Sarah Lomami',
    role: 'Biologiste médical',
    experience: '10 ans d\'expérience',
    speciality: 'Analyses de laboratoire'
  }
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  À propos de la 
                  <span className="text-blue-600"> CGEK</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Depuis plus de 15 ans, la Clinique Gastro-Entérologique de Kinshasa 
                  s'engage à fournir des soins médicaux de qualité supérieure à la 
                  population kinoise et de la RDC.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                  <div className="text-gray-600">Patients soignés</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <div className="h-full flex flex-col justify-center items-center text-center space-y-6">
                  <Building className="w-20 h-20 text-white/80" />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Notre Mission</h3>
                    <p className="text-blue-100 text-lg">
                      Fournir des soins gastro-entérologiques d'excellence 
                      accessible à tous dans un environnement sécurisé et bienveillant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
            </div>
            
            <div className="prose max-w-none">
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Fondée en 2009, la <strong>Clinique Gastro-Entérologique de Kinshasa (CGEK)</strong> 
                  est née de la vision de médecins spécialisés soucieux de combler le manque de 
                  services gastro-entérologiques de qualité en République Démocratique du Congo.
                </p>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Située au Boulevard Lumumba dans la commune de Limete, notre clinique s'est 
                  rapidement imposée comme une référence en matière de soins digestifs, grâce à 
                  son équipe médicale expérimentée et ses équipements de pointe.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Aujourd'hui, la CGEK continue d'évoluer pour répondre aux besoins croissants 
                  de la population, en proposant une gamme élargie de services incluant les 
                  consultations spécialisées, les examens endoscopiques, les soins à domicile 
                  et l'accompagnement palliatif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre action quotidienne et notre engagement 
              envers nos patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className={`w-6 h-6 ${value.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {value.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des professionnels de santé dévoués et expérimentés à votre service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <p>{member.experience}</p>
                    <p className="text-sm"><strong>Spécialité:</strong> {member.speciality}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Rejoignez notre famille de patients
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Faites confiance à notre expertise pour prendre soin de votre santé digestive 
              avec l'attention que vous méritez.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/appointment">
                <Calendar className="w-5 h-5 mr-2" />
                Prendre rendez-vous
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}