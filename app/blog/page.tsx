import { getPublishedBlogPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export const revalidate = 21600;

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <div className="bg-background min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6">
            Le Journal <span className="text-primary italic">BabelSouk</span>
          </h1>
          <p className="text-xl text-gray-600 font-light">
            Découvrez nos derniers guides, astuces et sélections pour sublimer votre style atypique.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
            <p className="text-gray-500 font-medium italic text-lg">Aucun article publié pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
