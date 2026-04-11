/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  // Use translations if needed
  const displayTitle = post.translations?.fr?.h1 || post.h1;
  const displayDesc = post.translations?.fr?.meta_description || post.meta_description || "";
  
  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {post.cover?.file_url ? (
        <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
          <Image 
            src={post.cover.file_url} 
            alt={post.cover.alt || displayTitle}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-secondary opacity-10 flex items-center justify-center">
          <span className="text-secondary opacity-50 font-playfair font-bold">BabelSouk</span>
        </div>
      )}
      
      <div className="p-6">
        {post.categories && post.categories.length > 0 && (
          <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">
            {post.categories[0].label}
          </span>
        )}
        <h3 className="text-xl font-playfair font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {displayTitle}
        </h3>
        <p className="text-gray-600 line-clamp-3 mb-6 text-sm">
          {displayDesc}
        </p>
        
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-primary font-semibold text-sm hover:text-primary-hover group/link"
        >
          Lire l'article
          <svg className="w-4 h-4 ml-1 transform transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
