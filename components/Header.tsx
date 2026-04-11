import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass-effect border-b border-opacity-10 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-playfair text-3xl font-bold text-primary group-hover:text-primary-hover transition-colors">
                BabelSouk
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.mainNav.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="text-foreground hover:text-primary font-medium tracking-wide transition-colors uppercase text-sm"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center md:hidden">
            <button className="text-foreground hover:text-primary p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
