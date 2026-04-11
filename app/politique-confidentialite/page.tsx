/* eslint-disable react/no-unescaped-entities */
export const metadata = {
  title: "Politique de confidentialité | BabelSouk",
  description: "Politique de confidentialité et gestion des données personnelles du site BabelSouk",
};

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-12">Politique de confidentialité</h1>
        
        <div className="prose prose-lg text-gray-700 bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-playfair font-bold text-secondary mb-4 mt-0">1. Collecte des données personnelles</h2>
          <p>
            De manière générale, vous n'êtes pas tenu de nous communiquer vos données personnelles lorsque vous visitez notre site Internet BabelSouk.fr.
          </p>
          <p>
            Cependant, ce principe comporte certaines exceptions. Pour certains services proposés par notre site, vous pouvez être amenés à nous communiquer certaines données telles que : votre nom, votre fonction, le nom de votre entreprise, votre adresse électronique, et votre numéro de téléphone. C'est le cas lorsque vous remplissez le formulaire qui vous est proposé en ligne, dans la rubrique "contact".
          </p>

          <h2 className="text-2xl font-playfair font-bold text-secondary mb-4 mt-8">2. Utilisation des données</h2>
          <p>
            Les informations recueillies ont pour finalité :
          </p>
          <ul>
            <li>Le traitement de vos demandes formulées via le site.</li>
            <li>L'amélioration de la navigation sur le site (statistiques de visites anonymes).</li>
          </ul>

          <h2 className="text-2xl font-playfair font-bold text-secondary mb-4 mt-8">3. Cookies</h2>
          <p>
            Le site BabelSouk.fr peut-être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookies est une information déposée sur votre disque dur par le serveur du site que vous visitez.
          </p>
          <p>
            Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations.
          </p>

          <h2 className="text-2xl font-playfair font-bold text-secondary mb-4 mt-8">4. Vos droits</h2>
          <p>
            Conformément à la loi "informatique et libertés", vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier ou supprimer en contactant : <a href="mailto:contact@babelsouk.fr" className="text-primary hover:underline">contact@babelsouk.fr</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
