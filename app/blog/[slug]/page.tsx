/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
import { MarkdownLink } from "@/components/MarkdownLink";
import { injectDofollowMarker } from "@/lib/dofollow";
import { getBlogPostBySlug } from "@/lib/blog";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 21600;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const post = await getBlogPostBySlug(slug);

  if (!post) return notFound();

  let displayH1 = post.h1;
  let displayBody = post.body_md;

  if (post.slug !== slug && post.translations) {
    for (const [_key, val] of Object.entries(post.translations)) {
      if ((val as any).slug === slug) {
        displayH1 = (val as any).h1 || displayH1;
        displayBody = (val as any).body_md || displayBody;
        break;
      }
    }
  }

  const bodyMd = injectDofollowMarker(displayBody || "");

  return (
    <article className="bg-background min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-6">
          <Link href="/blog" className="text-secondary hover:text-primary font-medium inline-flex items-center text-sm transition-colors uppercase tracking-widest">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Retour au journal
          </Link>
        </div>

        <header className="mb-12 text-center">
          {post.categories && post.categories.length > 0 && (
            <Link
              href={`/blog/categorie/${post.categories[0].slug}`}
              className="text-primary tracking-widest uppercase font-bold text-sm mb-4 block hover:underline"
            >
              {post.categories[0].label}
            </Link>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-secondary mb-8 leading-tight">
            {displayH1}
          </h1>

          <LanguageSwitcher post={post} currentSlug={slug} />
        </header>

        {post.cover?.file_url && (
          <div className="relative aspect-[21/9] mb-16 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={post.cover.file_url}
              alt={post.cover.alt || displayH1}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        )}

        <div className="prose prose-lg md:prose-xl mx-auto prose-p:leading-relaxed prose-headings:font-playfair prose-headings:font-bold prose-img:rounded-xl">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
            {bodyMd}
          </ReactMarkdown>
        </div>

        {post.author && (
          <div className="flex items-center gap-6 mt-16 pt-10 border-t border-gray-200 bg-white p-8 rounded-2xl shadow-sm">
            {post.author.avatar_url ? (
              <Image
                src={post.author.avatar_url}
                alt={post.author.name}
                width={80}
                height={80}
                className="rounded-full object-cover shrink-0 shadow-md"
              />
            ) : (
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md text-white font-playfair text-2xl font-bold">
                    {post.author.name.charAt(0)}
                </div>
            )}
            <div>
              <p className="font-playfair font-bold text-xl text-secondary mb-2">{post.author.name}</p>
              {post.author.bio && <p className="text-gray-600 leading-relaxed text-sm">{post.author.bio}</p>}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
