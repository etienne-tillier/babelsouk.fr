import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] pt-16 pb-8 border-t border-gray-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-playfair text-3xl font-bold text-white">BabelSouk</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              Découvrez des accessoires uniques et affirmez votre style avec notre sélection de mode atypique inspirée des confins du monde.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-xl text-white mb-6 font-semibold">Navigation</h3>
            <ul className="space-y-4">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-xl text-white mb-6 font-semibold">Légal</h3>
            <ul className="space-y-4">
              {siteConfig.footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} {siteConfig.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
