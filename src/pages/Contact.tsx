import { ArrowRight, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@finzarc.com",
      description: "Get in touch for project inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Global Remote Team",
      description: "Serving clients worldwide"
    },
    {
      icon: Calendar,
      title: "Response Time",
      content: "< 24 Hours",
      description: "Fast response guaranteed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-white pt-24 pb-16">
        
        <div className="max-w-6xl mx-auto px-8 pt-16">
          <div className="text-center">
            <h1 className="font-futura text-5xl md:text-6xl uppercase tracking-tight mb-6">
              Get In Touch
            </h1>
            <p className="font-manrope text-xl text-white/80 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss your project and explore how we can help you achieve exceptional results
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-8 bg-gradient-luxury">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center shadow-luxury hover:shadow-gold transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-neon text-white mb-4">
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="font-manrope text-lg font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="font-manrope text-foreground font-medium mb-1">
                  {info.content}
                </p>
                <p className="font-manrope text-sm text-muted-foreground">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="font-manrope text-3xl font-bold text-foreground mb-6">
                Start Your Project
              </h2>
              <p className="font-manrope text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a custom proposal.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-manrope text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input 
                      placeholder="John"
                      className="font-manrope"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-manrope text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="font-manrope"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-manrope text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email"
                    placeholder="john@company.com"
                    className="font-manrope"
                    required
                  />
                </div>

                <div>
                  <label className="block font-manrope text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input 
                    placeholder="Your Company Name"
                    className="font-manrope"
                  />
                </div>

                <div>
                  <label className="block font-manrope text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-3 py-2 border border-input rounded-md font-manrope bg-background text-foreground">
                    <option value="">Select a service</option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="web-development">Web Application Development</option>
                    <option value="data-analytics">Data Science & Analytics</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-manrope text-sm font-medium text-foreground mb-2">
                    Budget Range
                  </label>
                  <select className="w-full px-3 py-2 border border-input rounded-md font-manrope bg-background text-foreground">
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5K - $10K</option>
                    <option value="10k-25k">$10K - $25K</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k+">$50K+</option>
                  </select>
                </div>

                <div>
                  <label className="block font-manrope text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className="font-manrope min-h-[120px]"
                    required
                  />
                </div>

                <Button className="w-full bg-gradient-neon text-white py-3 rounded-lg font-manrope font-medium hover:shadow-neon transition-all duration-300">
                  Send Project Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="lg:pl-8">
              <h2 className="font-manrope text-3xl font-bold text-foreground mb-6">
                Why Choose Finzarc?
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-manrope text-xl font-semibold text-foreground mb-3">
                    Proven Track Record
                  </h3>
                  <p className="font-manrope text-muted-foreground">
                    With over $16M in incremental revenue generated for our clients and 100+ successful projects, we deliver results that matter.
                  </p>
                </div>

                <div>
                  <h3 className="font-manrope text-xl font-semibold text-foreground mb-3">
                    Fast Delivery
                  </h3>
                  <p className="font-manrope text-muted-foreground">
                    Our streamlined process ensures project delivery in under 3 weeks on average, without compromising on quality.
                  </p>
                </div>

                <div>
                  <h3 className="font-manrope text-xl font-semibold text-foreground mb-3">
                    Custom Solutions
                  </h3>
                  <p className="font-manrope text-muted-foreground">
                    Every project is tailored to your specific business needs, ensuring maximum ROI and long-term success.
                  </p>
                </div>

                <div>
                  <h3 className="font-manrope text-xl font-semibold text-foreground mb-3">
                    Ongoing Support
                  </h3>
                  <p className="font-manrope text-muted-foreground">
                    We provide continuous support and optimization to ensure your solutions evolve with your business.
                  </p>
                </div>
              </div>

              {/* Quote Box */}
              <div className="mt-12 p-6 bg-gradient-luxury rounded-xl border border-border">
                <blockquote className="font-manrope text-foreground italic mb-4">
                  "Finzarc transformed our business operations and helped us achieve a 300% increase in efficiency. Their expertise in AI automation is unmatched."
                </blockquote>
                <cite className="font-manrope text-sm text-muted-foreground">
                  — Sarah Johnson, CEO of TechFlow Industries
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-manrope text-3xl font-bold text-foreground mb-4">
            Prefer a Direct Conversation?
          </h2>
          <p className="font-manrope text-muted-foreground mb-6">
            Schedule a free 30-minute consultation to discuss your project in detail
          </p>
          
          <Button className="bg-primary text-white px-8 py-3 rounded-lg font-manrope font-medium hover:bg-primary/90 transition-all duration-300">
            Schedule Free Consultation
            <Calendar className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;