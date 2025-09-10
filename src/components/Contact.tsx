import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { elementRef: contactInfoRef, isVisible: contactInfoVisible } = useScrollAnimation({
    threshold: 0.2
  });
  const { elementRef: reviewsRef, isVisible: reviewsVisible } = useScrollAnimation({
    threshold: 0.3
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123, King Street, NY",
      color: "brand-primary"
    },
    {
      icon: Phone,
      title: "Call Us", 
      details: "+1 (123) 456 7890",
      color: "accent"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@digicraze.com",
      color: "brand-secondary"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9:00am - 7:00pm",
      color: "brand-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm font-medium text-accent">LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Request a Quote
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            By delivering superior digital solutions, we continuously surpass our 
            clients' expectations. Get in touch with us for a free quote!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 lg:p-12 rounded-3xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input 
                      placeholder="Full Name"
                      className="bg-white/5 border-white/20 placeholder:text-foreground/50 focus:border-accent h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Email Address"
                      className="bg-white/5 border-white/20 placeholder:text-foreground/50 focus:border-accent h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <Input 
                    placeholder="Phone Number"
                    className="bg-white/5 border-white/20 placeholder:text-foreground/50 focus:border-accent h-12"
                  />
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="bg-white/5 border-white/20 placeholder:text-foreground/50 focus:border-accent resize-none"
                  />
                </div>
                
                <Button variant="neon" size="xl" className="w-full group">
                  Submit Request
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Stats */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <div ref={contactInfoRef} className="grid gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div 
                    key={index} 
                    className={`glass-card-hover p-6 rounded-2xl transition-all duration-700 ${
                      contactInfoVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-${info.color}/20 flex items-center justify-center transition-transform duration-300 hover:scale-110 ${
                        contactInfoVisible ? 'animate-bounce-in' : ''
                      }`} style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                        <Icon className={`w-6 h-6 ${
                          info.color === 'brand-primary' ? 'text-brand-primary' : 
                          info.color === 'accent' ? 'text-accent' : 
                          'text-brand-secondary'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-foreground/60 uppercase tracking-wider mb-1">
                          {info.title}
                        </h3>
                        <p className="font-medium">{info.details}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Client Reviews Stats */}
            <div 
              ref={reviewsRef}
              className={`glass-card p-8 rounded-2xl text-center transition-all duration-800 ${
                reviewsVisible ? 'animate-fade-in-scale' : 'opacity-0 scale-95'
              }`}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex -space-x-1">
                  <div className={`w-8 h-8 rounded-full bg-gradient-primary border-2 border-background ${
                    reviewsVisible ? 'animate-bounce-in' : ''
                  }`} style={{ animationDelay: '0.1s' }}></div>
                  <div className={`w-8 h-8 rounded-full bg-gradient-secondary border-2 border-background ${
                    reviewsVisible ? 'animate-bounce-in' : ''
                  }`} style={{ animationDelay: '0.2s' }}></div>
                  <div className={`w-8 h-8 rounded-full bg-gradient-neon border-2 border-background ${
                    reviewsVisible ? 'animate-bounce-in' : ''
                  }`} style={{ animationDelay: '0.3s' }}></div>
                  <div className={`w-8 h-8 rounded-full bg-brand-primary/50 border-2 border-background ${
                    reviewsVisible ? 'animate-bounce-in' : ''
                  }`} style={{ animationDelay: '0.4s' }}></div>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold gradient-text">
                    <AnimatedCounter end={250} suffix="+" duration={2000} delay={300} />
                  </div>
                  <div className="text-sm text-foreground/60">5-star client reviews</div>
                </div>
              </div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-4 h-4 rounded-full bg-gradient-neon animate-pulse-glow ${
                      reviewsVisible ? 'animate-bounce-in' : ''
                    }`}
                    style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                  ></div>
                ))}
              </div>
              <p className={`text-sm text-foreground/80 ${
                reviewsVisible ? 'animate-fade-in-scale' : ''
              }`} style={{ animationDelay: '1s' }}>
                "Outstanding results and exceptional service quality!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;