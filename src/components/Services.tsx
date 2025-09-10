import { Button } from "@/components/ui/button";
import { 
  Search, 
  MousePointer, 
  Share2, 
  Code, 
  Video,
  TrendingUp,
  Palette,
  BarChart
} from "lucide-react";
import servicesIllustration from "@/assets/services-illustration.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { elementRef: servicesGridRef, isVisible: servicesVisible } = useScrollAnimation({
    threshold: 0.1
  });
  const { elementRef: ctaSectionRef, isVisible: ctaVisible } = useScrollAnimation({
    threshold: 0.2
  });

  const services = [
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Crafting visually stunning and user-friendly websites that captivate your audience and enhance your online presence.",
      color: "brand-primary"
    },
    {
      icon: Share2,
      title: "Social Media Management", 
      description: "Maximize your reach and engagement with our expert digital marketing services, designed to deliver measurable results.",
      color: "accent"
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Developing innovative and user-friendly mobile apps that enhance your business operations and engage your audience effectively.",
      color: "brand-secondary"
    },
    {
      icon: MousePointer,
      title: "Pay Per Click",
      description: "Delivering unique and professional graphic designs that elevate your brand's visual identity and attract your target audience.",
      color: "brand-primary"
    },
    {
      icon: Video,
      title: "Motion Graphics",
      description: "Creating engaging motion graphics and video content that brings your brand story to life with stunning visual effects.",
      color: "accent"
    },
    {
      icon: BarChart,
      title: "Digital Marketing Analytics",
      description: "Comprehensive analytics and reporting to track your digital marketing performance and optimize for better results.",
      color: "brand-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm font-medium text-accent">OUR SERVICES</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Innovative Digital Solutions
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            We believe technology and design can transform businesses and propel them into the future. 
            We are your digital excellence partners, not just a digital agency.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={servicesGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className={`glass-card-hover p-8 rounded-2xl group transition-all duration-700 ${
                  servicesVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-${service.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                  servicesVisible ? 'animate-bounce-in' : ''
                }`} style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                  <Icon className={`w-8 h-8 text-${service.color === 'brand-primary' ? 'brand-primary' : service.color === 'accent' ? 'accent' : 'brand-secondary'}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Button variant="outline-glass" size="sm" className="group-hover:animate-pulse-glow">
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div 
          ref={ctaSectionRef}
          className={`glass-card p-8 lg:p-12 rounded-3xl text-center transition-all duration-1000 ${
            ctaVisible ? 'animate-fade-in-scale' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className={`${ctaVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8'}`}>
              <img 
                src={servicesIllustration} 
                alt="3D isometric illustrations of digital services and technology"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className={`text-center lg:text-left ${ctaVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'}`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Let's turn your vision into a 
                <span className="gradient-text"> masterpiece.</span>
              </h3>
              <p className="text-foreground/80 mb-6">
                Our services are designed with a primary focus on the benefits they can bring to 
                your business. We seek to streamline your processes and operations.
              </p>
              <Button variant="neon" size="lg" className={`${ctaVisible ? 'animate-pulse-glow' : ''}`}>
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;