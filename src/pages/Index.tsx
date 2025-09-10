import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-background border-t border-white/10 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-neon flex items-center justify-center">
                <span className="text-background font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold gradient-text">SK DIgital ads</span>
            </div>
            <p className="text-sm text-foreground/60">
              © 2025 SK Digital ads. All rights reserved. Crafted with ❤️ for digital excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
