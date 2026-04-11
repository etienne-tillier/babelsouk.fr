/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export const metadata = {
  title: "À propos | BabelSouk",
  description: "Découvrez l'histoire de BabelSouk, notre mission et notre équipe de passionnés de mode alternative et d'artisanat du monde.",
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen py-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtbGgtaDR2NGg0em0waDR2NGg0di00aDR2LTRoNHY0aC00djRoNHY0aC00djRoLTR2LTRoLTR2LTRoNHY0aDR2LTRoLTR2LTRoLTR2NHptLTQgMHY0aC00djRINC4ydjRoLTR2LTRoNHYtNEgwdjRoNHY0aDR2LTRoNHYtNGg0di00aDR2NGh6bS00IDB2LTRoLTR2LTRoLTR2LTRoNHY0aDR2NGg0djR6TTQgMzhIMHY0aDR2LTR6bS00IDRWMjhIMHYxNGg0eiIgZmlsbD0iI2QxOWU1MiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9nPjwvc3ZnPg==')]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-secondary mb-6 relative inline-block">
            Notre Histoire
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-accent"></span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="prose prose-lg text-gray-700">
            <p className="lead font-playfair text-2xl text-secondary lg:text-3xl font-medium leading-normal mb-8">
              "La mode n'est pas qu'une question de vêtements, c'est le reflet de l'âme et des voyages qui nous construisent."
            </p>
            <p className="mb-6 leading-relaxed">
              BabelSouk est né d'une passion commune pour l'artisanat du monde et la mode alternative. En parcourant les marchés de Marrakech, les ruelles de Fès, ou les bazars d'Oman, nous avons découvert bien plus que des objets : des histoires tissées, martelées ou cousues main.
            </p>
            <p className="mb-6 leading-relaxed">
              Nous croyons que le style ne devrait pas être dicté par des uniformes standardisés. Chaque pièce que nous mettons en lumière sur ce site a été choisie pour sa singularité et sa capacité à apporter une touche "épicée" à un dressing occidental classique.
            </p>
            <p className="font-medium text-primary">
              Notre mission ? Vous ouvrir les portes d'un vestiaire cosmopolite et audacieux.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl border-4 border-white">
            <Image 
              src="/images/babelsouk-fr-about-team-diverse-stylists.jpeg"
              alt="Notre équipe de stylistes"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-12 items-center justify-between mt-20">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-playfair font-bold text-secondary mb-6">Notre démarche</h2>
            <p className="text-gray-600 mb-4">
              BabelSouk n'est pas une boutique en ligne classique. Nous sommes avant tout des curateurs, des dénicheurs de talents et de pièces d'exception. À travers nos guides, nous vous recommandons les meilleures trouvailles artisanales disponibles, souvent issues de petits créateurs ou d'ateliers familiaux.
            </p>
            <p className="text-gray-600">
              Chaque babouche, chaque flacon de parfum ou chaque bijou touareg présenté ici est le fruit d'une recherche minutieuse d'authenticité et de qualité.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-accent flex items-center justify-center text-accent text-3xl font-playfair italic">
              BS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
