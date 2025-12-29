import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { type Product } from "@shared/schema";

interface HeroCarouselProps {
  products: Product[];
}

export function HeroCarousel({ products }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  if (!products.length) return null;

  return (
    <div className="relative overflow-hidden bg-primary">
      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {products.map((product) => (
            <div className="flex-[0_0_100%] min-w-0 relative" key={product.id}>
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={product.imageUrl || `https://placehold.co/1920x800?text=${encodeURIComponent(product.name)}`}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
                <div className="max-w-2xl animate-in slide-in-from-left-10 fade-in duration-700">
                  <div className="inline-block px-3 py-1 mb-6 border border-accent/50 rounded-full bg-accent/10 backdrop-blur-sm">
                    <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">
                      Featured Product
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-[0.9] mb-6 drop-shadow-lg">
                    {product.name}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed font-light">
                    {product.description.slice(0, 150)}...
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/products">
                      <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider px-8 h-12 rounded-sm shadow-lg shadow-accent/20">
                        View Catalogue
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary font-bold uppercase tracking-wider px-8 h-12 rounded-sm backdrop-blur-sm">
                        Request Quote <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-accent" : "bg-white/30 hover:bg-white/50"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
