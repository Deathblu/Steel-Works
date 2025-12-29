import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur shadow-sm border-b border-border/40">
      {/* Top Bar for Contact Info */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3 w-3" /> +1 (555) 123-4567
            </span>
            <span className="flex items-center gap-2 hidden sm:flex">
              <Mail className="h-3 w-3" /> sales@steelcraft.com
            </span>
          </div>
          <span className="uppercase tracking-wider opacity-80">Premium Industrial Equipment</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-primary text-white p-2 rounded-sm group-hover:bg-accent transition-colors duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="w-6 h-6"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <span className="font-display text-2xl font-bold tracking-tight text-primary">STEELCRAFT</span>
              <span className="hidden sm:block text-[10px] text-muted-foreground font-sans tracking-[0.2em] uppercase leading-none">
                Industrial Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent uppercase tracking-wide ${
                  location === link.href ? "text-accent font-semibold" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white font-bold tracking-wide uppercase text-xs px-6">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent transition-colors p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border/40 absolute w-full shadow-xl animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`block px-3 py-4 text-base font-bold uppercase tracking-wider border-b border-border/30 ${
                    location === link.href ? "text-accent bg-accent/5" : "text-foreground hover:bg-muted/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white uppercase font-bold">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
