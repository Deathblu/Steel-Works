import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const mutation = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-primary py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to upgrade your facility? Get in touch for quotes, custom fabrication requests, or general inquiries.
          </p>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-6 border-b pb-4">
                Get In Touch
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of engineers and sales specialists is ready to assist you. Whether you need a single prep table or a full commercial kitchen fit-out, we're here to help.
              </p>
            </div>

            <div className="grid gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Factory & Showroom</h3>
                  <p className="text-muted-foreground">
                    123 Industrial Ave, Sector 4<br />
                    Steel City, PA 15201
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Phone Support</h3>
                  <p className="text-muted-foreground mb-1">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-400">Mon-Fri, 8am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Email</h3>
                  <p className="text-muted-foreground">sales@steelcraft.com</p>
                  <p className="text-muted-foreground">support@steelcraft.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-gray-200 rounded-sm border border-border flex items-center justify-center relative overflow-hidden group">
               {/* industrial map overhead view */}
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                 alt="Map Location" 
                 className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 transition-all duration-700"
               />
               <Button variant="secondary" className="relative z-10 shadow-lg">
                 Get Directions
               </Button>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white p-8 md:p-10 rounded-sm shadow-xl border border-border/50">
            <h2 className="text-2xl font-display font-bold text-primary mb-2">
              Send an Inquiry
            </h2>
            <p className="text-muted-foreground mb-8 text-sm">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold tracking-wider text-gray-500">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-gray-50 h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold tracking-wider text-gray-500">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="john@company.com" className="bg-gray-50 h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold tracking-wider text-gray-500">
                        Message / Project Details
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your requirements..." 
                          className="bg-gray-50 min-h-[150px] resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider text-sm shadow-lg shadow-accent/25"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
