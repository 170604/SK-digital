import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Award } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
import clientSuccess from "@/assets/client-success.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";


const About = () => {
  const { elementRef: firstSectionRef, isVisible: firstSectionVisible } = useScrollAnimation({
    threshold: 0.2
  });
  const { elementRef: secondSectionRef, isVisible: secondSectionVisible } = useScrollAnimation({
    threshold: 0.2
  });

  const features = [
    "Digital solutions under one roof",
    "Strategies tailored to your business needs", 
    "Competitive pricing for exceptional value",
    "15+ years of industry experience"
  ];

  const stats = [
    { number: "250+", label: "5-star client reviews" },
    { number: "15+", label: "Years of Experience" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "500+", label: "Projects Completed" }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* First About Section */}
        <div ref={firstSectionRef} className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`relative transition-all duration-1000 ${
            firstSectionVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-16'
          }`}>
            <div className="glass-card p-4 rounded-3xl">
              <img 
                src={clientSuccess} 
                alt="Happy diverse businesswoman smiling in modern office with neon lighting"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className={`absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl ${
              firstSectionVisible ? 'animate-bounce-in' : 'opacity-0 scale-75'
            }`} style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-secondary border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-neon border-2 border-background"></div>
                </div>
                <div>
                  <div className="text-lg font-bold gradient-text">
                    <AnimatedCounter end={250} suffix="+" duration={2000} delay={500} />
                  </div>
                  <div className="text-xs text-foreground/60">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 ${
            firstSectionVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-16'
          }`} style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <span className="text-sm font-medium text-accent">WHY CHOOSE US</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our team will transform your ideas into 
              <span className="gradient-text"> measurable digital solutions.</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className={`flex items-start gap-4 ${
                firstSectionVisible ? 'animate-fade-in-scale' : 'opacity-0'
              }`} style={{ animationDelay: '0.4s' }}>
                <Target className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Customer-centric Focus</h3>
                  <p className="text-foreground/80">
                    We put our clients at the heart of everything we do, creating solutions that 
                    resonate with your audience and drive engagement.
                  </p>
                </div>
              </div>
              
              <div className={`flex items-start gap-4 ${
                firstSectionVisible ? 'animate-fade-in-scale' : 'opacity-0'
              }`} style={{ animationDelay: '0.6s' }}>
                <Users className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Tailor-made Strategies</h3>
                  <p className="text-foreground/80">
                    One-size-fits-all is not something we believe in. We customize our solutions 
                    to meet the unique needs and specifications of your organization.
                  </p>
                </div>
              </div>
            </div>

            <Button 
              variant="outline-glass" 
              size="lg" 
              className={`${firstSectionVisible ? 'animate-pulse-glow' : 'opacity-0'}`}
              style={{ animationDelay: '0.8s' }}
            >
              Get Free Quote
            </Button>
          </div>
        </div>

        {/* Second About Section */}
        <div ref={secondSectionRef} className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${
            secondSectionVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-16'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">WHY CHOOSE US</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Crafting experiences,
              <span className="gradient-text block">delivering success.</span>
            </h2>
            
            <p className="text-lg text-foreground/80 mb-8">
              Our commitment to quality and excellence is unparalleled. From the first 
              brainstorming session to the final product delivery, we ensure that every step of the 
              process is executed to perfection. You are not just getting a service; you are getting 
              a partner who is committed to your growth and success.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 ${
                    secondSectionVisible ? 'animate-fade-in-scale' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/90">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="hero" 
              size="lg"
              className={`${secondSectionVisible ? 'animate-pulse-glow' : 'opacity-0'}`}
              style={{ animationDelay: '0.8s' }}
            >
              More About Us
            </Button>
          </div>

          <div className={`order-1 lg:order-2 relative transition-all duration-1000 ${
            secondSectionVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-16'
          }`} style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-4 rounded-3xl">
              <img 
                src={teamPhoto} 
                alt="Professional diverse team of digital marketing experts working together"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            {/* Stats Grid Overlay */}
            <div className="absolute -bottom-8 -left-8 grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat, index) => (
                <div 
                  key={index} 
                  className={`glass-card p-4 rounded-xl text-center min-w-[120px] ${
                    secondSectionVisible ? 'animate-bounce-in' : 'opacity-0 scale-75'
                  }`}
                  style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.number.includes('+') ? (
                      <AnimatedCounter 
                        end={parseInt(stat.number)} 
                        suffix="+" 
                        duration={2000} 
                        delay={400 + index * 200} 
                      />
                    ) : (
                      <AnimatedCounter 
                        end={parseInt(stat.number)} 
                        suffix="%" 
                        duration={2000} 
                        delay={400 + index * 200} 
                      />
                    )}
                  </div>
                  <div className="text-xs text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;