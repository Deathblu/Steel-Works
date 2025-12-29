import { Link } from "wouter";
import { ArrowRight, Star } from "lucide-react";
import { type Product } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white border border-border rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden h-full">
      <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
        <img
          src={product.imageUrl || `https://placehold.co/600x400?text=${encodeURIComponent(product.name)}`}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.isFeatured && (
          <Badge className="absolute top-3 left-3 bg-accent text-white hover:bg-accent border-none shadow-md uppercase tracking-wider text-[10px] font-bold px-2 py-1">
            <Star className="w-3 h-3 mr-1 fill-current" /> Featured
          </Badge>
        )}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
          {product.category}
        </div>
        <h3 className="text-xl font-display font-bold text-primary mb-3 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
          {product.description}
        </p>
        
        <Link href={`/products`}>
          <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-colors border-primary/20">
            View Details
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
