
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-accent to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Verhoog uw bedrijfsefficiëntie met <span className="text-primary">slimme automatisering</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Wij ontwikkelen automatiseringsoplossingen op maat die uw bedrijfsprocessen stroomlijnen, klantenservice verbeteren en marketingresultaten maximaliseren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Plan een demonstratie
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="btn-outlined">Ontdek onze oplossingen</Button>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">200+</p>
                <p className="text-muted-foreground">Tevreden klanten</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">12+</p>
                <p className="text-muted-foreground">Jaren expertise</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">95%</p>
                <p className="text-muted-foreground">Efficiëntiewinst</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="bg-primary/10 absolute -top-5 -left-5 w-64 h-64 rounded-full z-0"></div>
              <div className="bg-primary/20 absolute -bottom-8 -right-8 w-40 h-40 rounded-full z-0"></div>
              <div className="bg-white p-3 rounded-2xl shadow-xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=500&auto=format&fit=crop"
                  alt="Automatisering en klantenservice team" 
                  className="rounded-xl w-full md:max-w-md h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
