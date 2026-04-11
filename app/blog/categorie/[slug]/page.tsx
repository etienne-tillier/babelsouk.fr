import { getCategoryBySlug, getPostsByCategory } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import { notFound } from "next/navigation";

export const revalidate = 21600;

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const category = await getCategoryBySlug(slug);
  
  if (!category) {
    return notFound();
  }

  const posts = await getPostsByCategory(slug);
  const displayTitle = category.label;
  const displayDesc = category.description;

  return (
    <div className="bg-background min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent tracking-widest uppercase font-bold text-sm mb-4 block">Catégorie</span>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">
            {displayTitle}
          </h1>
          {displayDesc && (
            <p className="text-lg text-gray-600 font-light">
              {displayDesc}
            </p>
          )}
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
            <p className="text-gray-500 font-medium italic text-lg">Aucun article publié pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
