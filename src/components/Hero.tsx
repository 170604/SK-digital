import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const Hero = () => {
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden particles"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 hero-background"></div>

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content (Left side) */}
          <div
            className={`text-center lg:text-left transition-all duration-700 ease-out ${
              animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">
                Transform Your Digital Presence
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Re-imagine Your
              <span className="block gradient-text neon-glow">
                Digital Experiences!
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Our comprehensive digital solutions will completely transform your
              company. Grow the future of your business with cutting-edge
              marketing strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Get Free Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline-glass" size="xl">
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className={`grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10 transition-all duration-1000 ${
                statsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div
                className={`text-center ${
                  statsVisible ? "animate-fade-in-scale" : ""
                }`}
                style={{ animationDelay: "0.1s" }}
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  <AnimatedCounter
                    end={250}
                    suffix="+"
                    duration={2500}
                    delay={100}
                  />
                </div>
                <div className="text-sm text-foreground/60">Happy Clients</div>
              </div>
              <div
                className={`text-center ${
                  statsVisible ? "animate-fade-in-scale" : ""
                }`}
                style={{ animationDelay: "0.3s" }}
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  <AnimatedCounter
                    end={15}
                    suffix="+"
                    duration={2200}
                    delay={300}
                  />
                </div>
                <div className="text-sm text-foreground/60">
                  Years Experience
                </div>
              </div>
              <div
                className={`text-center ${
                  statsVisible ? "animate-fade-in-scale" : ""
                }`}
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  <AnimatedCounter
                    end={99}
                    suffix="%"
                    duration={2800}
                    delay={500}
                  />
                </div>
                <div className="text-sm text-foreground/60">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Illustration (Right side) */}
          <div
            className={`relative transition-all duration-1000 ${
              animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
          >
            <div className="glass-card p-8 rounded-2xl">
              <img
                src={heroIllustration}
                alt="Digital marketing illustration showing futuristic 3D elements"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 glass-card rounded-2xl flex items-center justify-center animate-glow">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-2xl flex items-center justify-center animate-pulse">
              <div className="w-8 h-8 rounded-full bg-gradient-secondary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
