import { useProducts } from "@/hooks/use-products";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Factory, Truck, ShieldCheck } from "lucide-react";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { data: products, isLoading } = useProducts();
  
  // Filter for featured products, or take first 4 if none featured
  const featuredProducts = products?.filter(p => p.isFeatured) || [];
  const displayProducts = featuredProducts.length > 0 
    ? featuredProducts 
    : products?.slice(0, 4) || [];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <HeroCarousel products={displayProducts} />

      {/* Value Props */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group p-8 rounded-lg hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Factory className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Factory Direct</h3>
              <p className="text-muted-foreground leading-relaxed">
                Eliminate the middleman. Get premium industrial grade equipment directly from our manufacturing floor to your facility.
              </p>
            </div>
            <div className="text-center group p-8 rounded-lg hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Lifetime Warranty</h3>
              <p className="text-muted-foreground leading-relaxed">
                We stand behind our steel. Every weld, every joint, and every surface is guaranteed to last for the life of your kitchen.
              </p>
            </div>
            <div className="text-center group p-8 rounded-lg hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Rapid Logistics</h3>
              <p className="text-muted-foreground leading-relaxed">
                With distribution centers across the country, we ensure your equipment arrives safely and on schedule, ready for installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Signature Collection
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore our best-selling stainless steel solutions designed for high-performance environments.
              </p>
            </div>
            <Link href="/products">
              <Button variant="ghost" className="hidden md:flex text-accent hover:text-accent/80 hover:bg-accent/5 font-semibold mt-4 md:mt-0">
                View All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/products">
              <Button className="w-full bg-primary text-white">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About / CTA Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-white/5 -skew-x-12 -translate-x-1/2" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 mb-6 border border-accent/50 rounded-full bg-accent/10">
                <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">
                  Since 1985
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Forged in Innovation.<br />Built for Endurance.
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                SteelCraft began with a simple mission: to build kitchen equipment that never fails. Three decades later, our Pittsburgh facility produces the world's finest commercial steel workstations, sinks, and cabinetry.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['304-Grade Stainless Steel', 'NSF Certified Designs', 'Custom Fabrication Available'].map((item) => (
                  <li key={item} className="flex items-center text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent mr-3" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold uppercase tracking-wider px-8 h-14 rounded-sm">
                  Start Your Project
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              {/* Decorative Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* industrial factory worker welding */}
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600" 
                  alt="Welding Steel" 
                  className="rounded-lg object-cover h-64 w-full opacity-90 shadow-2xl translate-y-8"
                />
                {/* commercial kitchen clean steel */}
                <img 
                  src="https://pixabay.com/get/g0fc4f6125ea6ff3bd9e11fd58db44df3a7df2d4d9b046078ad38643b274bbf6555e971e70d9c7e107dafe9569fad1cd8a5347d047b8e730f9c63c0d89ce3542e_1280.jpg" 
                  alt="Commercial Kitchen" 
                  className="rounded-lg object-cover h-64 w-full opacity-90 shadow-2xl -translate-y-8"
                />
              </div>
              
              {/* Stats Card Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent p-6 rounded-lg shadow-xl text-center min-w-[200px]">
                <div className="text-4xl font-display font-bold text-white mb-1">5000+</div>
                <div className="text-white/80 text-sm font-medium uppercase tracking-wider">Kitchens Fitted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
