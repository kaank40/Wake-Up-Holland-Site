
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
              Zet uw zakelijke ideeën om in <span className="text-primary">succes</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Wij ontwikkelen digitale marketingstrategieën op maat die direct resultaat opleveren voor uw bedrijf.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Aan de slag
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="btn-outlined">Bekijk onze diensten</Button>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">250+</p>
                <p className="text-muted-foreground">Gelukkige klanten</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-muted-foreground">Jaren ervaring</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-muted-foreground">Succesvolle projecten</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="bg-primary/10 absolute -top-5 -left-5 w-64 h-64 rounded-full z-0"></div>
              <div className="bg-primary/20 absolute -bottom-8 -right-8 w-40 h-40 rounded-full z-0"></div>
              <div className="bg-white p-3 rounded-2xl shadow-xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=500&auto=format&fit=crop"
                  alt="Digitaal marketing team" 
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
