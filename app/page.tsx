/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export const revalidate = 21600; // 6h

export default async function Home() {
  const posts = await getPublishedBlogPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/babelsouk-fr-home-hero-market-authentic.jpeg"
            alt="Marché aux accessoires authentiques"
            fill
            priority
            className="object-cover opacity-60 mix-blend-overlay"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50" />
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
              Créez votre style avec des <span className="text-accent italic">accessoires authentiques</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-light">
              L'art du voyage et la mode se rencontrent. Découvrez notre sélection d'objets rares, de babouches, bijoux berbères et autres merveilles pour une garde-robe qui raconte une histoire.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/blog" className="btn-primary text-lg px-10 py-4 font-semibold uppercase tracking-widest">
                Découvrir les Tendances
              </Link>
              <Link href="/a-propos" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-lg px-10 py-4 font-semibold uppercase tracking-widest">
                Notre Histoire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NOS DECOUVERTES */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">Nos Découvertes</h2>
            <p className="text-lg text-gray-600">
              Des pièces atypiques sélectionnées pour leur singularité et leur capacité à transformer n'importe quelle tenue classique en un statement de mode assumé.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/babelsouk-fr-home-decouvertes-accessories-display.jpeg"
                alt="Display d'accessoires atypiques"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-8 lg:pl-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-playfair font-bold text-secondary mb-3">Maroquinerie d'Ailleurs</h3>
                <p className="text-gray-600">Sacs en cuir repoussé, sacoches en cuir brut patiné par le soleil... Chaque pièce est unique et s'embellit avec le temps.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-playfair font-bold text-secondary mb-3">Maquillage & Fragrances</h3>
                <p className="text-gray-600">Rouge à lèvres berbère (Aker Fassi), eaux parfumées d'Orient, poudres minérales... Des secrets de beauté ancestraux pour un look magnétique.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-playfair font-bold text-secondary mb-3">Lunettes & Bijoux Fantaisie</h3>
                <p className="text-gray-600">Osez l'extravagance avec des montures inédites et des parures qui ne passent pas inaperçues.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSEILS STYLE */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white">Conseils Style</h2>
              <p className="text-xl text-primary-hover mb-8 opacity-90 leading-relaxed text-yellow-100">
                L'art de maîtriser la mode alternative consiste à équilibrer les pièces fortes avec des basiques neutres.
              </p>
              <ul className="space-y-6 mb-10">
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center font-bold mr-4 shrink-0">1</span>
                  <p className="text-lg">Un seul accessoire fort suffit. Laissez une paire de babouches brodées être la star d'un ensemble jean-t-shirt blanc.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center font-bold mr-4 shrink-0">2</span>
                  <p className="text-lg">Mixez les matières. Le cuir brut d'un sac touareg contraste magnifiquement avec la fluidité d'une robe en soie.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center font-bold mr-4 shrink-0">3</span>
                  <p className="text-lg">Osez l'accumulation contrôlée de bijoux berbères sur des poignets ou un décolleté autrement très sobre.</p>
                </li>
              </ul>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image 
                src="/images/babelsouk-fr-home-conseils-style-mixing.jpeg"
                alt="Mix & Match de styles"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INSPIRATION VOYAGE */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">Inspiration Voyage</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Partez à la découverte des trésors artisanaux par origine géographique.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl isolate aspect-[3/4]">
              <Image src="/images/babelsouk-fr-home-babouches-collection-colorful.jpeg" alt="Collection de babouches" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-playfair font-bold text-white mb-2">Artisanat du Cuir</h3>
                <p className="text-gray-300">Marrakech & Fès</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl isolate aspect-[3/4]">
              <Image src="/images/babelsouk-fr-home-bijoux-berberes-authentic.jpeg" alt="Bijoux Berbères" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-playfair font-bold text-white mb-2">Parures Touaregs</h3>
                <p className="text-gray-300">Désert du Sahara</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl isolate aspect-[3/4]">
              <Image src="/images/babelsouk-fr-home-parfums-bottles-oriental.jpeg" alt="Parfums Orientaux" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-playfair font-bold text-white mb-2">Essences d'Orient</h3>
                <p className="text-gray-300">Oman & Dubaï</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-4">Journal de Style</h2>
              <p className="text-lg text-gray-600">Dernières tendances et carnets de voyage.</p>
            </div>
            {recentPosts.length > 0 && (
              <Link href="/blog" className="hidden md:inline-flex text-primary font-bold hover:underline items-center uppercase tracking-widest text-sm">
                Tout lire
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            )}
          </div>
          
          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-gray-500 font-medium italic">Aucun article publié pour le moment.</p>
            </div>
          )}
          
          {recentPosts.length > 0 && (
            <div className="mt-12 text-center md:hidden">
              <Link href="/blog" className="btn-outline">
                Voir tous nos articles
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* TRUST BLOCK */}
      <section className="py-20 bg-[#F4F1EA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-white mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          </div>
          <h2 className="text-3xl font-playfair font-bold text-secondary mb-6">La Sélection Expert en Mode Alternative</h2>
          <p className="text-xl text-gray-700 leading-relaxed font-light">
            BabelSouk.fr décrypte les tendances, évalue l'authenticité de l'artisanat et sélectionne pour vous des accessoires de mode uniques. Nos conseils sont indépendants et ont pour seul but de vous aider à parfaire votre style atypique.
          </p>
        </div>
      </section>
    </>
  );
}
