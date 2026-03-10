import { useEffect } from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function CompanyInfo() {
  useEffect(() => {
    document.title = "Company Info - STEELCRAFT";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
            Company Information
          </h1>
          <p className="text-lg text-white/90">
            Everything you need to know about STEELCRAFT
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-8 text-foreground">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-foreground/70">
                      1234 Industrial Boulevard<br />
                      Manufacturing District<br />
                      Metro City, ST 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-foreground/70">+1 (555) 123-4567</p>
                    <p className="text-sm text-foreground/60">Monday - Friday, 9AM - 5PM EST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-foreground/70">sales@steelcraft.com</p>
                    <p className="text-sm text-foreground/60">support@steelcraft.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Website</h3>
                    <p className="text-foreground/70">www.steelcraft.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Details */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-8 text-foreground">
                Company Details
              </h2>
              <div className="space-y-4">
                <div className="bg-muted dark:bg-slate-900 rounded-lg p-4 border border-border">
                  <h3 className="font-semibold text-foreground mb-1">Founded</h3>
                  <p className="text-foreground/70">1995</p>
                </div>
                <div className="bg-muted dark:bg-slate-900 rounded-lg p-4 border border-border">
                  <h3 className="font-semibold text-foreground mb-1">Company Name</h3>
                  <p className="text-foreground/70">STEELCRAFT Manufacturing Inc.</p>
                </div>
                <div className="bg-muted dark:bg-slate-900 rounded-lg p-4 border border-border">
                  <h3 className="font-semibold text-foreground mb-1">Business Type</h3>
                  <p className="text-foreground/70">Industrial Kitchen Equipment Manufacturing</p>
                </div>
                <div className="bg-muted dark:bg-slate-900 rounded-lg p-4 border border-border">
                  <h3 className="font-semibold text-foreground mb-1">Service Areas</h3>
                  <p className="text-foreground/70">Regional and nationwide restaurant equipment supply</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Standards */}
          <div className="bg-muted dark:bg-slate-900 rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-display font-bold mb-6 text-foreground">
              Certifications & Standards
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Quality Certifications</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>✓ ISO 9001:2015 Certified</li>
                  <li>✓ ISO 14001:2015 (Environmental Management)</li>
                  <li>✓ NSF International Certified</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Industry Standards</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>✓ FDA Compliant Materials</li>
                  <li>✓ Food Service Equipment Standards</li>
                  <li>✓ Commercial Grade Manufacturing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
