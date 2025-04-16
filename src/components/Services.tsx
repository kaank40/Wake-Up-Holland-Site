
import React from 'react';
import { Button } from "@/components/ui/button";
import { Settings, Users, LineChart, MessageSquareText, Cog, Smartphone } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const navigate = useNavigate();
  
  const handleMoreInfo = (serviceTitle: string) => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toast({
        title: "Meer informatie aangevraagd",
        description: `We sturen u graag meer informatie over ${serviceTitle}. Vul het contactformulier in.`,
      });
    }
  };

  const handleAllSolutions = () => {
    const element = document.getElementById('diensten');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toast({
        title: "Onze oplossingen",
        description: "Hier vindt u een overzicht van al onze diensten.",
      });
    }
  };

  const services = [
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: "Bedrijfsautomatisering",
      description: "We stroomlijnen uw bedrijfsprocessen met slimme automatiseringsoplossingen die tijd en kosten besparen."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Klantenservice Oplossingen",
      description: "Verbeter de klanttevredenheid met onze geautomatiseerde klantenservice systemen en ondersteuningstools."
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Marketing Automatisering",
      description: "Verhoog uw marketingeffectiviteit met onze geautomatiseerde tools voor campagnebeheer en klantbetrokkenheid."
    },
    {
      icon: <Cog className="h-10 w-10 text-primary" />,
      title: "Werkstroom Optimalisatie",
      description: "Optimaliseer uw bedrijfsprocessen door handmatige taken te automatiseren en efficiëntie te verhogen."
    },
    {
      icon: <MessageSquareText className="h-10 w-10 text-primary" />,
      title: "Communicatie Tools",
      description: "Verbeter de interne en externe communicatie met onze geïntegreerde communicatie-oplossingen."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobiele Integraties",
      description: "Breid uw bereik uit met naadloze mobiele integraties die toegankelijkheid en gebruiksgemak bieden."
    }
  ];

  return (
    <section id="diensten" className="section bg-accent">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Onze Automatisering & Service Oplossingen</h2>
          <p className="text-muted-foreground text-lg">
            Wij helpen bedrijven groeien door slimme automatisering, efficiënte klantenservice en effectieve marketingstrategieën.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Button 
                variant="link" 
                className="p-0 text-primary font-medium"
                onClick={() => handleMoreInfo(service.title)}
              >
                Meer informatie
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="btn-primary"
            onClick={handleAllSolutions}
          >
            Bekijk alle oplossingen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
