# Brief de génération de site (niche-starter)

Ce fichier est auto-généré depuis Website Manager.
L'agent doit lire d'abord `AGENTS.md`, puis ce fichier.
⚠️ Ce fichier est la source de vérité du brief: ne pas l'écraser avec un template générique.

---

## 1) Infos projet

- `site_name`: babelsouk.fr
- `site_domain`: babelsouk.fr
- `site_url`: https://babelsouk.fr
- `default_locale`: fr-FR
- `site_id` (UUID Supabase): bc498e4d-0abf-4757-af2c-7e4634a0e6a5
- `tier` (`tier1` / `tier2`): tier2

## 2) Positionnement éditorial

- Thématique: Vetements
- Audience cible:
- Objectif business:
- Ton éditorial:
- Angles à privilégier:
- Angles interdits:

## 3) Arborescence souhaitée

- Pages de navigation (hors blog):
- Sections homepage attendues:
- CTA principal:
- CTA secondaire:

## 4) Contraintes SEO

- Requêtes principales:
- Entités importantes:
- Concurrents de référence:
- Règles de maillage interne spécifiques:
- URLs legacy à rediriger (si applicable):
  - babelsouk.fr/en/our-products/14-aker-fassi-a-red-berber-traditional-lipstick.html
  - www.babelsouk.fr/home/439-boucles-d-oreilles-himja.html
  - Si l'URL contient des caractères encodés (`%C3%A9`, etc.), la décoder d'abord puis slugifier proprement (ne jamais produire des slugs de type `c3a9`/`c3a8`).

## 5) Direction artistique

- Univers visuel:
- Inspirations:
- Couleurs souhaitées / évitées:
- Style typographique:
- Niveau d'animation:
- Niveau de sobriété (1-10):

## 6) Assets (R2 / médias)

- Bucket/source:
- Liste images hero:
- Liste images sections:
- Liste images guides/blog:
- Contraintes de ratio/poids:

## 7) Contraintes techniques

- Le code doit respecter strictement les règles de `AGENTS.md`.
- Ne pas modifier les fichiers Core interdits.
- Pas de `select("*")` ajouté.
- Pas de faux articles.
- Aucune page 404.
- Toute page additionnelle liée (outil, carte, simulateur, etc.) doit être implémentée et réellement remplie.
- Si une page n'existe pas, aucun lien ne doit pointer vers elle.
- Tout lien vers le même domaine doit être traité comme lien interne dofollow.
- Les redirections legacy doivent pointer vers des slugs décodés/normalisés (jamais vers des slugs encodés type `c3a9`).
- `npm run build` doit passer.

## 8) Données légales à injecter

- Mentions légales (éditeur):
- Contact public:
- DPO/contact RGPD:
- Hébergeur:

---

## 9) Données source Website Manager

### Brief éditorial brut

Ok l'idée du site c'est de faire un site spécialisé sur les accessoires comme les bas-bouches le maquillage donc tous les objets un petit peu insolite un petit peu que voilà qui sont pas beaucoup discutés mais en fait voilà les objets qui ont leur un style particulier qui ont leur propre je ne sais pas comment dire mais leur propre truc tu vois c'est pas très commun c'est des objets non commun des accessoires non commun des vêtements non commun qui permettent de rajouter une petite touche épicé à un style vestimentaire une petite touche particulière voilà c'est pour les voilà les personnes qui veulent rajouter qui veulent se trouver un style qui veulent rajouter quelque chose à leur propose sur le site des astuces de comment compléter un style comment se créer un style à travers ce genre de accessoires donc des sombreros des babouches des sacs particuliers donc ça peut être des voilà des babouches hommes babouches pour bébé maquillage marocain pourquoi pas rouge à lèvres vert des rouge à lèvres berbères des voilà c'est quand même pas mal les choses qui proviennent de l'étranger forcément des sandales des sacs en cuir des parfums voilà des parfums d'un autre pays des sacoches des lunettes fantaisie je ne sais pas d'où elles peuvent provenir mais voilà en gros des choses qui permettent de se différencier à travers des accessoires des objets comme ça

### Description générée

# BabelSouk.fr - Accessoires et Mode Alternative

## Concept

BabelSouk.fr est un site de contenu spécialisé dans les accessoires de mode atypiques et les pièces vestimentaires originales venues d'ailleurs. Le site se positionne comme un guide expert pour découvrir des accessoires uniques qui permettent d'affirmer son style personnel : babouches artisanales, bijoux berbères, parfums orientaux, sacs en cuir authentiques, maquillage coloré non-conventionnel, lunettes fantaisie et autres pièces rares.

## Objectif et Public

L'objectif principal est de créer une plateforme de contenus éditoriaux (guides, conseils, découvertes) monétisée via l'affiliation avec des boutiques spécialisées et des créateurs indépendants. Le site vise les passionnés de mode alternative, les personnes en quête d'authenticité vestimentaire, et tous ceux qui souhaitent se démarquer avec des pièces originales. BabelSouk.fr combine découverte culturelle et conseils style pour aider ses lecteurs à construire une garde-robe unique qui raconte une histoire.

### Prompt IA généré

Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de contenu.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
- **JAMAIS** copier-coller des couleurs d'exemples
- **TOUJOURS** créer une palette basée sur l'univers émotionnel de la thématique
- Suivre le workflow : ANALYSE → DESIGN SYSTEM → ARCHITECTURE → DÉVELOPPEMENT

## 0. Contexte du projet
- Nom du projet : BabelSouk.fr
- Domaine : babelsouk.fr
- Type de site : Money site de contenu éditorial
- Thématiques : Accessoires de mode atypiques, vêtements originaux, style alternatif
- Objectif business : Monétisation par affiliation et partenariats avec boutiques spécialisées
- Audience cible : Passionnés de mode alternative, personnes en quête d'authenticité vestimentaire, créateurs de style personnel

## 1. Identité visuelle & Design System (PHASE CRITIQUE)

⚠️ **À FAIRE EN PREMIER, AVANT TOUT CODE**

### Univers visuel à créer
- **5 adjectifs** décrivant l'ambiance du site : authentique, cosmopolite, artisanal, épicé, mystérieux
- **Références visuelles mentales** : souks orientaux, marchés aux épices, textiles berbères, céramiques artisanales, lanternes dorées, cuir patiné, hénédé, terres cuites
- **Émotions à évoquer** chez le visiteur : curiosité, envie de voyage, fierté d'être unique, confiance en son style, sentiment d'appartenance à une communauté de connaisseurs

### Palette de couleurs
⚠️ **NE PAS proposer de codes HEX directement**

À partir de l'univers visuel ci-dessus, l'agent développeur devra :
1. Identifier les couleurs naturellement associées aux marchés orientaux et à l'artisanat traditionnel
2. Créer une palette UNIQUE avec :
   - Couleur principale (primary) : inspirée des terres chaudes (terracotta/ocre)
   - Couleur secondaire (secondary) : rappelant les textiles indigo ou les céramiques bleues
   - Couleur d'accent (accent) : évoquant l'or des bijoux berbères ou le cuivre
   - Couleur de fond (background) : tons sable/crème chaleureux
   - Variante hover : version plus saturée de la couleur principale
3. Assurer un contraste suffisant pour l'accessibilité

### Typographie
- Proposer une Google Font adaptée à l'univers mystérieux et artisanal :
  - Pour les titres : Playfair Display ou Crimson Text (élégance avec caractère)
  - Pour le corps : Source Sans Pro ou Open Sans (lisibilité moderne)
  - Alternative exotique : Amiri pour les accents (inspiration calligraphique)

## 2. SEO & métadonnées
- **Titre SEO principal** pour la home : "BabelSouk - Accessoires Mode Atypiques & Style Authentique"
- **Méta-description principale** pour la home : "Découvrez des accessoires de mode uniques : babouches, bijoux berbères, parfums orientaux. Guides et conseils pour créer votre style authentique."
- **Open Graph title** : "BabelSouk | Mode Alternative & Accessoires Authentiques"

## 3. Rôle du template
- Le projet part d'un template Next.js existant
- Fichiers à mettre à jour :
  - `config/site.ts` (name: "BabelSouk", description, domain: "babelsouk.fr", navigation)
  - `app/globals.css` (créer la palette terre/indigo/cuivre selon méthodologie section 1)
  - contenus de démo dans `content/data/*` et MDX
  - configuration blog Supabase (`SITE_DOMAIN=babelsouk.fr`, routes `/avis/*`, etc.)

## 4. Contenu & structure à mettre en place
- Types de contenus à garder : blog, guides d'achat, découvertes produits, conseils style
- **Sections obligatoires sur la page d'accueil** (`/`) :
  - Hero ("Créez votre style avec des accessoires authentiques", sous-titre évoquant l'art du voyage et la mode, CTA "Découvrir les Tendances")
  - Section "Nos Découvertes" (mise en avant d'accessoires coup de cœur avec images)
  - Section "Conseils Style" (guides pour intégrer des pièces atypiques dans sa garde-robe)
  - Section "Inspiration Voyage" (accessoires par origine géographique)
  - Mise en avant d'articles clés du blog
  - Bloc de confiance ("Sélection d'experts en mode alternative")
- Sections importantes : `/guides-style`, `/accessoires/*`, `/origines/*`, `/conseils`
- Clusters thématiques : Babouches & Chaussures, Bijoux & Parures, Parfums & Cosmétiques, Maroquinerie, Textiles & Foulards

## 5. Images pré-générées - À TÉLÉCHARGER ET INTÉGRER

Les images suivantes ont été pré-générées et sont disponibles sur le bucket R2. Tu DOIS les télécharger et les intégrer :

- **Hero principal** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/babelsouk-fr-home-hero-market-authentic.jpeg
- **Section découvertes** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/babelsouk-fr-home-decouvertes-accessories-display.jpeg
- **Conseils style** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/babelsouk-fr-home-conseils-style-mixing.jpeg
- **Babouches collection** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/babelsouk-fr-home-babouches-collection-colorful.jpeg
- **Bijoux berbères** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/babelsouk-fr-home-bijoux-berberes-authentic.jpeg
- **Parfums orientaux** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/babelsouk-fr-home-parfums-bottles-oriental.jpeg
- **À propos équipe** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/babelsouk-fr-about-team-diverse-stylists.jpeg
- **Contact boutique** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/babelsouk-fr-contact-boutique-atmosphere-warm.jpeg

## 6. Consignes éditoriales
- Ton à respecter : Expert passionné mais accessible, évoque le voyage et la découverte, évite le snobisme
- Types d'articles attendus : guides d'achat par type d'accessoire, conseils pour mixer les styles, découvertes de créateurs, histoire des techniques artisanales
- Contraintes à éviter : exotisme caricatural, appropriation culturelle, promesses de transformation radicale

## 7. Checklist technique
- Configuration `.env` (clés Supabase, SITE_DOMAIN=babelsouk.fr, BLOG_API_SECRET)
- Mise à jour `config/site.ts`
- **Création de la palette terre/indigo/cuivre UNIQUE** dans `app/globals.css` selon méthodologie
- Logos (`/public/logo.svg` évoquant le souk, `/app/icon.svg`)
- Intégration blog Supabase (filtrage par domaine babelsouk.fr)
- Télécharger et intégrer les 8 images pré-générées depuis le bucket R2
- Vérifier `npm run lint` et `npm run build`
- Configuration déploiement

## 8. Anti-patterns à éviter
❌ Commencer à coder avant d'avoir créé le design system
❌ Copier-coller des couleurs d'un exemple existant
❌ Utiliser les mêmes polices que d'autres sites
❌ Créer un design "générique"
❌ Tomber dans les clichés orientalisants
❌ Laisser des placeholders de couleurs dans le code final
