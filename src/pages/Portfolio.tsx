import { ExternalLink, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarContextual } from "@/components/NavbarContextual";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform Optimization",
      category: "AI Automation",
      description: "Implemented intelligent inventory management and personalized recommendation system",
      results: [
        "300% increase in conversion rates",
        "45% reduction in cart abandonment",
        "$2.3M additional revenue in 6 months"
      ],
      tech: ["Machine Learning", "Python", "React", "AWS"],
      gradient: "from-teal-500 to-teal-600"
    },
    {
      title: "Healthcare Analytics Dashboard",
      category: "Data Science",
      description: "Real-time patient monitoring and predictive analytics for a major hospital network",
      results: [
        "40% faster diagnosis times",
        "25% reduction in readmission rates",
        "Improved patient outcomes"
      ],
      tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
      gradient: "from-neon-pink to-neon-purple"
    },
    {
      title: "FinTech Trading Platform",
      category: "Web Development",
      description: "High-frequency trading platform with real-time market data and advanced analytics",
      results: [
        "99.9% uptime achieved",
        "Sub-millisecond trade execution",
        "$5M+ daily trading volume"
      ],
      tech: ["Node.js", "React", "WebSocket", "Redis"],
      gradient: "from-accent-gold to-yellow-500"
    },
    {
      title: "Marketing Automation Suite",
      category: "AI Automation",
      description: "Multi-channel marketing automation with AI-powered personalization",
      results: [
        "250% increase in lead quality",
        "60% reduction in marketing costs",
        "8x ROI improvement"
      ],
      tech: ["AI/ML", "Node.js", "Vue.js", "MongoDB"],
      gradient: "from-teal-500 to-teal-600"
    },
    {
      title: "Supply Chain Analytics",
      category: "Data Science",
      description: "Predictive analytics for supply chain optimization and demand forecasting",
      results: [
        "30% reduction in inventory costs",
        "95% forecast accuracy",
        "Optimized logistics routes"
      ],
      tech: ["Python", "Pandas", "D3.js", "AWS"],
      gradient: "from-neon-pink to-neon-purple"
    },
    {
      title: "Real Estate Platform",
      category: "Web Development",
      description: "Comprehensive property management and investment analysis platform",
      results: [
        "10,000+ active users",
        "500% increase in property views",
        "Streamlined operations"
      ],
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      gradient: "from-accent-gold to-yellow-500"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "$16M+", label: "Revenue Generated" },
    { icon: Users, value: "100+", label: "Projects Completed" },
    { icon: Zap, value: "< 3 Weeks", label: "Average Delivery" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-white pt-24 pb-16">
        <NavbarContextual variant="dark" />
        
        <div className="max-w-6xl mx-auto px-8 pt-16">
          <div className="text-center">
            <h1 className="font-futura text-5xl md:text-6xl uppercase tracking-tight mb-6">
              Our Portfolio
            </h1>
            <p className="font-manrope text-xl text-white/80 max-w-3xl mx-auto">
              Showcasing exceptional results across industries with our premium solutions
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 bg-gradient-luxury">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-neon text-white mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="font-manrope text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </h3>
                <p className="font-manrope text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="font-manrope text-lg text-muted-foreground">
              Real results for real businesses across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-card rounded-2xl p-8 shadow-luxury hover:shadow-neon transition-all duration-500">
                {/* Category Badge */}
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-manrope font-medium mb-6`}>
                  {project.category}
                </div>

                {/* Project Title */}
                <h3 className="font-manrope text-xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-manrope text-muted-foreground mb-6">
                  {project.description}
                </p>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-manrope text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="font-manrope text-sm text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal mr-3 mt-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-manrope text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted rounded-full text-xs font-manrope text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <Button
                  variant="ghost"
                  className="w-full justify-between font-manrope text-foreground hover:bg-muted group-hover:text-teal transition-all duration-300"
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-manrope text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="font-manrope text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join our portfolio of successful clients and transform your business with our premium solutions
          </p>
          
          <Button className="bg-gradient-neon text-white px-8 py-3 rounded-lg font-manrope font-medium hover:shadow-neon transition-all duration-300">
            Start Your Project
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;