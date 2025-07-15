import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  imageSrc: string;
  gradient: "teal" | "neon";
}

export function ServiceCard({ title, description, features, price, imageSrc, gradient }: ServiceCardProps) {
  const gradientClass = gradient === "teal" 
    ? "from-teal-500 to-teal-600" 
    : "from-neon-pink to-neon-purple";

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card shadow-luxury hover:shadow-neon transition-all duration-500">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[500px]">
        <div className="space-y-4">
          <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${gradientClass} text-white text-sm font-manrope font-medium`}>
            {title}
          </div>
          
          <h3 className="text-2xl font-manrope font-semibold text-white">
            {description}
          </h3>
          
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-white/80 font-manrope text-sm flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/60 mr-3" />
                {feature}
              </li>
            ))}
          </ul>
          
          <div className="flex items-center justify-between pt-4">
            <span className="text-3xl font-manrope font-bold text-white">
              {price}
            </span>
            
            <Button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300 font-manrope">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}