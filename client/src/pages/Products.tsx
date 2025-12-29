import { useProducts } from "@/hooks/use-products";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Loader2, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Products() {
  const { data: products, isLoading } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Derive categories
  const categories = products 
    ? Array.from(new Set(products.map(p => p.category)))
    : [];

  const filteredProducts = products?.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory ? p.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-primary py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Product Catalogue
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Browse our comprehensive range of commercial-grade stainless steel equipment.
          </p>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-8">
            <div className="bg-white p-6 rounded-sm border border-border shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-primary font-bold uppercase tracking-wider text-sm">
                <Filter className="w-4 h-4" /> Categories
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`w-full text-left px-3 py-2 text-sm rounded-sm transition-colors ${
                    activeCategory === null 
                      ? "bg-primary text-white font-medium" 
                      : "text-muted-foreground hover:bg-gray-100"
                  }`}
                >
                  All Products
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-sm transition-colors ${
                      activeCategory === category 
                        ? "bg-primary text-white font-medium" 
                        : "text-muted-foreground hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Promo Card */}
            <div className="bg-accent p-6 rounded-sm text-white text-center">
              <h3 className="font-display font-bold text-xl mb-2">Need Custom Work?</h3>
              <p className="text-sm opacity-90 mb-4">
                We fabricate custom stainless steel solutions to your exact specifications.
              </p>
              <Button variant="secondary" className="w-full bg-white text-accent hover:bg-gray-100 font-bold uppercase text-xs">
                Contact Sales
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search products..."
                className="pl-10 h-12 text-lg bg-white border-border"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {filteredProducts && filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-sm border border-dashed border-border">
                <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
                <Button 
                  variant="link" 
                  className="text-accent mt-2"
                  onClick={() => {setSearchTerm(""); setActiveCategory(null);}}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
