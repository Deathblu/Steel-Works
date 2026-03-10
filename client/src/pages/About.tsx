import { useEffect } from "react";
import { Users, Award, Zap } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us - STEELCRAFT";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
            About STEELCRAFT
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Crafting premium stainless steel kitchen equipment for professional kitchens and commercial establishments since 1995.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                Our Story
              </h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Founded in 1995, STEELCRAFT has been a trusted name in industrial kitchen equipment manufacturing. What started as a small workshop with a passion for quality has grown into a leading supplier of stainless steel kitchen solutions.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                We believe that great kitchens are built on quality equipment, precision engineering, and exceptional customer service. Every product we create reflects our commitment to excellence and durability.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Today, we serve hundreds of restaurants, catering companies, and institutional kitchens across the region, providing them with equipment they can rely on every single day.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8 border border-border">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Expert Team</h3>
                    <p className="text-foreground/70">Experienced engineers and craftspeople dedicated to quality manufacturing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Premium Quality</h3>
                    <p className="text-foreground/70">ISO certified manufacturing processes and rigorous quality control standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Innovation</h3>
                    <p className="text-foreground/70">Continuous improvement and adoption of latest manufacturing technologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-foreground">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Quality First</h3>
              <p className="text-foreground/70">
                Every piece of equipment undergoes rigorous testing to ensure it meets our high standards and exceeds customer expectations.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Reliability</h3>
              <p className="text-foreground/70">
                Our equipment is built to last. We stand behind every product with comprehensive warranties and professional support.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Partnership</h3>
              <p className="text-foreground/70">
                We see our customers as partners. Your success is our success, and we're committed to supporting you long-term.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
