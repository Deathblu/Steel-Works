import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Award, Zap, MapPin, Phone, Mail, Globe } from "lucide-react";

export default function AboutCompany() {
  useEffect(() => {
    document.title = "About Us - STEELCRAFT";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <Navbar />

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

      {/* Main Content */}
      <div className="flex-grow">
        {/* Company Story */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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

            {/* Core Values */}
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-foreground">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-muted dark:bg-slate-900 rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Quality First</h3>
                <p className="text-foreground/70">
                  Every piece of equipment undergoes rigorous testing to ensure it meets our high standards and exceeds customer expectations.
                </p>
              </div>
              <div className="bg-muted dark:bg-slate-900 rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Reliability</h3>
                <p className="text-foreground/70">
                  Our equipment is built to last. We stand behind every product with comprehensive warranties and professional support.
                </p>
              </div>
              <div className="bg-muted dark:bg-slate-900 rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Partnership</h3>
                <p className="text-foreground/70">
                  We see our customers as partners. Your success is our success, and we're committed to supporting you long-term.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information Section */}
        <section className="py-16 md:py-24 bg-muted dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-foreground">
              Company Information
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-8 text-foreground">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg border border-border">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-foreground/70">
                        1234 Industrial Boulevard<br />
                        Manufacturing District<br />
                        Metro City, ST 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg border border-border">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-foreground/70">+1 (555) 123-4567</p>
                      <p className="text-sm text-foreground/60">Monday - Friday, 9AM - 5PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg border border-border">
                    <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-foreground/70">sales@steelcraft.com</p>
                      <p className="text-sm text-foreground/60">support@steelcraft.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg border border-border">
                    <Globe className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Website</h4>
                      <p className="text-foreground/70">www.steelcraft.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Details */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-8 text-foreground">
                  Company Details
                </h3>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-border">
                    <h4 className="font-semibold text-foreground mb-1">Founded</h4>
                    <p className="text-foreground/70">1995</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-border">
                    <h4 className="font-semibold text-foreground mb-1">Company Name</h4>
                    <p className="text-foreground/70">STEELCRAFT Manufacturing Inc.</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-border">
                    <h4 className="font-semibold text-foreground mb-1">Business Type</h4>
                    <p className="text-foreground/70">Industrial Kitchen Equipment Manufacturing</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-border">
                    <h4 className="font-semibold text-foreground mb-1">Service Areas</h4>
                    <p className="text-foreground/70">Regional and nationwide restaurant equipment supply</p>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mt-8 bg-white dark:bg-slate-800 rounded-lg p-6 border border-border">
                  <h4 className="font-semibold text-foreground mb-4">Certifications & Standards</h4>
                  <div className="space-y-2 text-foreground/70">
                    <p>✓ ISO 9001:2015 Certified</p>
                    <p>✓ ISO 14001:2015 (Environmental Management)</p>
                    <p>✓ NSF International Certified</p>
                    <p>✓ FDA Compliant Materials</p>
                    <p>✓ Food Service Equipment Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
