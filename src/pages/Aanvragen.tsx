
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Aanvragen = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container-custom py-32">
        <h1 className="text-4xl font-bold mb-8">Verzonden Aanvragen</h1>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-muted-foreground mb-4">
            Hier vindt u een overzicht van alle verzonden aanvragen. 
            Neem contact met ons op als u vragen heeft over de status van uw aanvraag.
          </p>
          <div className="space-y-4">
            {/* Placeholder voor aanvragen - later te vervangen met echte data */}
            <div className="p-4 border rounded-lg">
              <p className="font-semibold">Demo Aanvraag</p>
              <p className="text-sm text-muted-foreground">Verzonden op: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aanvragen;
