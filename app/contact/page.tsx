/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export const metadata = {
  title: "Contact | BabelSouk",
  description: "Contactez l'équipe BabelSouk. Nous serons ravis d'échanger avec vous sur la mode alternative et l'artisanat du monde.",
};

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen py-20 relative">
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-primary/5 rounded-bl-[200px] -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-[400px] bg-accent/10 rounded-tr-[200px] -z-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-secondary mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Une question sur un créateur ? Une proposition de partenariat ? Une pièce atypique à nous faire découvrir ? Nous sommes à votre écoute !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 item-center mt-12">
          
          {/* Info Contact */}
          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl flex flex-col justify-center border border-gray-100">
            <h2 className="text-3xl font-playfair font-bold text-secondary mb-10">Laissez-nous un message</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-4 rounded-xl text-primary mr-6 shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-secondary mb-2 uppercase tracking-wider text-sm">Par Email</h3>
                  <a href="mailto:contact@babelsouk.fr" className="text-xl md:text-2xl font-serif text-primary hover:text-primary-hover transition-colors font-semibold">
                    contact@babelsouk.fr
                  </a>
                  <p className="text-gray-500 mt-2 text-sm italic">Nous répondons généralement sous 48h ouvrées.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent/10 p-4 rounded-xl text-accent mr-6 shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-secondary mb-2 uppercase tracking-wider text-sm">Nos bureaux</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Paris, France<br />
                    (Uniquement sur rendez-vous)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 hidden md:block">
              <p className="text-gray-400 text-sm italic">Note : BabelSouk est un site éditorial. Pour toute question de SAV concernant une commande passée chez l'un de nos marchands partenaires, merci de contacter directement leur propre service client.</p>
            </div>
          </div>

          {/* Visual Area */}
          <div className="relative aspect-[3/4] md:aspect-auto md:h-full rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/babelsouk-fr-contact-boutique-atmosphere-warm.jpeg"
              alt="Boutique à l'atmosphère chaleureuse et orientale"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="font-playfair text-2xl font-bold mb-2">Bienvenue dans l'univers BabelSouk</h3>
              <p className="opacity-90">Construisons ensemble votre style unique.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
