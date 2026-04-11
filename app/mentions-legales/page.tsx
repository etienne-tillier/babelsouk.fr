/* eslint-disable react/no-unescaped-entities */
export const metadata = {
  title: "Mentions Légales | BabelSouk",
  description: "Mentions légales du site BabelSouk",
};

export default function LegalPage() {
  return (
    <div className="bg-background min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-12">Mentions Légales</h1>
        
        <div className="prose prose-lg text-gray-700 bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-playfair font-bold text-secondary mb-4 mt-0">1. Éditeur du site</h2>
          <p>
            Le site BabelSouk (babelsouk.fr) est édité par :<br />
            <strong>BabelSouk Éditions</strong><br />
            Email : <a href="mailto:contact@babelsouk.fr" className="text-primary hover:underline">contact@babelsouk.fr</a>
          </p>

          <h2 className="text-2xl font-playfair font-bold text-secondary mb-4 mt-8">2. Hébergement</h2>
          <p>
            Ce site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723<br />
            privacy@vercel.com
          </p>

          <h2 className="text-2xl font-playfair font-bold text-secondary mb-4 mt-8">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support électronique ou papier quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>

          <h2 className="text-2xl font-playfair font-bold text-secondary mb-4 mt-8">4. Partenariats et Affiliation</h2>
          <p>
            BabelSouk.fr participe à des programmes d'affiliation. Certains liens présents sur le site sont des liens affiliés, ce qui signifie que nous pouvons percevoir une commission si vous effectuez un achat via ces liens, sans coût supplémentaire pour vous. Notre ligne éditoriale reste néanmoins indépendante.
          </p>
        </div>
      </div>
    </div>
  );
}
