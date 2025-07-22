import { ArrowRight, CheckCircle, Zap, Brain, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import aiAutomationImg from "@/assets/ai-automation.jpg";
import webDevelopmentImg from "@/assets/web-development.jpg";
import dataAnalyticsImg from "@/assets/data-analytics.jpg";
import { Routes, Route, Link } from "react-router-dom";
import AIAutomation from "./AIAutomation";

const Services = () => {
  const services = [
    {
      title: "AI Automation",
      description: "Intelligent automation solutions that transform your business operations",
      features: [
        "Custom AI workflow automation",
        "Process optimization & efficiency",
        "24/7 intelligent monitoring",
        "Seamless integration with existing systems"
      ],
      price: "From $5K",
      imageSrc: aiAutomationImg,
      gradient: "teal" as const,
      link: "/services/ai-automation"
    },
    {
      title: "Web Application Development", 
      description: "Premium web applications built for scale and performance",
      features: [
        "Full-stack development",
        "Modern responsive design",
        "Cloud-native architecture",
        "Advanced security implementations",
        "Performance optimization",
        "Cross-platform compatibility"
      ],
      price: "From $8K",
      imageSrc: webDevelopmentImg,
      gradient: "neon" as const
    },
    {
      title: "Data Science & Analytics",
      description: "Transform raw data into actionable business insights",
      features: [
        "Advanced analytics dashboards",
        "Predictive modeling & ML",
        "Real-time data visualization",
        "Custom reporting solutions",
        "Business intelligence integration",
        "Data pipeline automation"
      ],
      price: "From $6K", 
      imageSrc: dataAnalyticsImg,
      gradient: "teal" as const
    }
  ];

  const processSteps = [
    {
      icon: Zap,
      title: "Discovery & Strategy",
      description: "We analyze your business needs and create a comprehensive strategy tailored to your goals."
    },
    {
      icon: Brain,
      title: "Design & Development",
      description: "Our expert team builds your solution using cutting-edge technologies and best practices."
    },
    {
      icon: BarChart3,
      title: "Launch & Optimize",
      description: "We deploy your solution and continuously optimize for maximum performance and ROI."
    }
  ];

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="relative bg-skin-beige dark:bg-gray-900 text-gray-800 dark:text-white pt-24 pb-16">
            
            <div className="max-w-6xl mx-auto px-8 pt-16">
              <div className="text-center">
                <h1 className="font-futura text-5xl md:text-6xl uppercase tracking-tight mb-6">
                  Our Services
                </h1>
                <p className="font-manrope text-xl text-gray-600 dark:text-white/80 max-w-3xl mx-auto">
                  Premium solutions designed to accelerate your business growth and digital transformation
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-24 px-8 bg-off-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="relative">
                    <ServiceCard {...service} />
                    {service.link && (
                      <Link
                        to={service.link}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#00bfa6] text-white font-bold px-4 py-2 rounded-lg shadow hover:bg-[#009e8a] transition"
                      >
                        Learn more →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-24 px-8 bg-background">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-manrope text-4xl font-bold text-foreground mb-4">
                  Our Process
                </h2>
                <p className="font-manrope text-lg text-muted-foreground">
                  A proven methodology that delivers results every time
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-neon text-white mb-6 group-hover:shadow-neon transition-all duration-300">
                      <step.icon className="w-10 h-10" />
                    </div>
                    <h3 className="font-manrope text-xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="font-manrope text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-24 px-8 bg-skin-beige dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="font-manrope text-4xl font-bold text-foreground mb-6">
                    Why Choose Finzarc?
                  </h2>
                  
                  <div className="space-y-4">
                    {[
                      "Industry-leading expertise with 100+ successful projects",
                      "Average delivery time under 3 weeks",
                      "Proven track record of $16M+ incremental revenue",
                      "24/7 support and ongoing optimization",
                      "Custom solutions tailored to your business",
                      "Transparent pricing with no hidden costs"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-0.5" />
                        <span className="font-manrope text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-luxury">
                  <h3 className="font-manrope text-2xl font-bold text-foreground mb-6">
                    Ready to Get Started?
                  </h3>
                  <p className="font-manrope text-muted-foreground mb-6">
                    Schedule a free consultation to discuss your project and discover how we can help transform your business.
                  </p>
                  
                  <Button className="w-full bg-gradient-neon text-white py-3 rounded-lg font-manrope font-medium hover:shadow-neon transition-all duration-300">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      } />
      <Route path="ai-automation" element={<AIAutomation />} />
    </Routes>
  );
};

export default Services;