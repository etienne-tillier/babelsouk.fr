export const siteConfig = {
  name: "BabelSouk",
  description: "Découvrez des accessoires de mode uniques : babouches, bijoux berbères, parfums orientaux. Guides et conseils pour créer votre style authentique.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://babelsouk.fr",
  domain: "babelsouk.fr",
  mainNav: [
    { title: "Accueil", href: "/" },
    { title: "Blog", href: "/blog" },
    { title: "À propos", href: "/a-propos" },
    { title: "Contact", href: "/contact" },
  ],
  footerNav: [
    { title: "Mentions Légales", href: "/mentions-legales" },
    { title: "Politique de confidentialité", href: "/politique-confidentialite" },
  ],
};
