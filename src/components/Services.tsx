
import React from 'react';
import { Button } from "@/components/ui/button";
import { Settings, Users, LineChart, MessageSquareText, Cog, Smartphone, 
         Mail, FileText, BookUser, BarChart4, CalendarClock, Bot,
         MessageCircle, Receipt, Network, UserPlus, Calendar, ShoppingCart, 
         KeyRound, Brain } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

  const automationTips = [
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "E-mail Automatisering",
      description: "Zet automatische e-mailcampagnes op voor inschrijvingen, achtergelaten winkelwagens en klantacties."
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Standaard Werkprocedures",
      description: "Gestructureerde processen en documentatie voor snelle inwerktijd van nieuwe medewerkers."
    },
    {
      icon: <BookUser className="h-10 w-10 text-primary" />,
      title: "CRM Implementatie",
      description: "Centraliseer klantgegevens en automatiseer updates voor een compleet klantbeeld."
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-primary" />,
      title: "Lead Scoring Systeem",
      description: "Identificeer de meest kansrijke leads en prioriteer uw verkoopinspanningen automatisch."
    },
    {
      icon: <CalendarClock className="h-10 w-10 text-primary" />,
      title: "Content Planning",
      description: "Automatiseer uw social media en content planning voor consistente merkzichtbaarheid."
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "Klantenservice Bots",
      description: "Verhoog responssnelheid met chatbots en geautomatiseerde klantondersteuningssystemen."
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-primary" />,
      title: "SMS Marketing",
      description: "Geautomatiseerde SMS-berichten voor herinneringen, aanbiedingen en klantenservice."
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Verkoopautomatisering",
      description: "Stroomlijn het verkoopproces van lead tot conversie met intelligente automatisering."
    },
    {
      icon: <Network className="h-10 w-10 text-primary" />,
      title: "Integratie Oplossingen",
      description: "Verbind uw apps en systemen om gegevensuitwisseling te automatiseren en silo's te elimineren."
    },
    {
      icon: <UserPlus className="h-10 w-10 text-primary" />,
      title: "Onboarding Automatisering",
      description: "Automatiseer het onboardingproces voor nieuwe medewerkers met documenten en toegangsrechten."
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Slim Plannen",
      description: "Automatiseer het plannen van vergaderingen en afspraken zonder agenda-conflicten."
    },
    {
      icon: <Receipt className="h-10 w-10 text-primary" />,
      title: "Financiële Automatisering",
      description: "Vereenvoudig uw boekhouding en onkostenbeheer met intelligente automatisering."
    }
  ];

  return (
    <section id="diensten" className="section bg-accent">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Automatiseer Uw Bedrijf</h2>
          <p className="text-muted-foreground text-lg">
            In het digitale tijdperk is automatisering essentieel voor groei en efficiëntie. 
            Ontdek onze oplossingen die tijd besparen, kosten verlagen en klanttevredenheid verhogen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automationTips.map((tip, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-2">{tip.icon}</div>
                <CardTitle className="text-xl">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{tip.description}</p>
                <Button 
                  variant="link" 
                  className="p-0 text-primary font-medium"
                  onClick={() => handleMoreInfo(tip.title)}
                >
                  Meer informatie
                </Button>
              </CardContent>
            </Card>
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
