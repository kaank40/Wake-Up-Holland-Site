
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Miriam de Vries",
      position: "Marketingmanager, TechNova B.V.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
      stars: 5,
      text: "Savy heeft onze online marketingstrategie compleet getransformeerd. Ze zijn niet alleen professionals in hun vakgebied, maar bieden ook een persoonlijke service die boven verwachting is."
    },
    {
      name: "Thomas Bakker",
      position: "Eigenaar, Bakker's Koffie",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
      stars: 5,
      text: "Sinds we samenwerken met Savy is ons verkeer verdubbeld en de conversie significant verbeterd. Hun expertise in SEO en betaalde advertenties is ongeëvenaard. Zeer aanbevolen!"
    },
    {
      name: "Emma Jansen",
      position: "Oprichter, GreenLeaf Wellness",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
      stars: 5,
      text: "Het team van Savy heeft mijn visie perfect vertaald naar een prachtige website en effectieve marketingstrategie. Ze zijn proactief, creatief en leveren altijd op tijd."
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wat Onze Klanten Zeggen</h2>
          <p className="text-muted-foreground text-lg">
            We zijn trots op de resultaten die we voor onze klanten behalen en de relaties die we opbouwen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-accent p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Klaar om uw bedrijf naar het volgende niveau te tillen?</h3>
          <p className="mb-8 text-white/80 max-w-2xl mx-auto">
            Laat ons u helpen met een digitale marketingstrategie die echt werkt voor uw bedrijf.
          </p>
          <button className="px-8 py-3 bg-white text-primary font-medium rounded-full hover:bg-gray-100 transition-colors">
            Neem contact op
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
