
import React from 'react';
import { Button } from "@/components/ui/button";
import { BarChart3, Globe, LineChart, MessageSquareText, PenTool, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Webdesign & Ontwikkeling",
      description: "We bouwen prachtige, functionele websites die uw merk versterken en conversies stimuleren."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "SEO Optimalisatie",
      description: "Verbeter uw online zichtbaarheid met onze SEO strategieën die u hoger in Google rankings plaatsen."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Social Media Marketing",
      description: "Wij beheren uw sociale mediakanalen met boeiende content die engagement en merkbekendheid vergroot."
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Betaalde Advertenties",
      description: "Onze gerichte advertentiecampagnes leveren een hoog rendement op uw marketinginvesteringen."
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "Branding & Design",
      description: "Wij creëren unieke visuele identiteiten die uw merk laten opvallen in een drukke markt."
    },
    {
      icon: <MessageSquareText className="h-10 w-10 text-primary" />,
      title: "Content Marketing",
      description: "We ontwikkelen waardevolle content die uw doelgroep aanspreekt en leidt tot meer conversies."
    }
  ];

  return (
    <section id="diensten" className="section bg-accent">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Onze Digitale Marketingdiensten</h2>
          <p className="text-muted-foreground text-lg">
            Wij bieden een volledig pakket aan digitale marketingdiensten om uw bedrijf te helpen groeien en uw doelen te bereiken.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Button variant="link" className="p-0 text-primary font-medium">
                Meer informatie
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="btn-primary">Bekijk alle diensten</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
