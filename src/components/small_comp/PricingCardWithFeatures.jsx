import React from "react";
import  {Check }  from "../../api/pricing_list";

import Card from "./Card";
import CardContent from "./CardContent";
import Button from "./Button";
import { VIVA_BASE_URL, VIVA_API_KEY, VIVA_SOURCE_CODE } from "../../api/vivaConfig";


export const createPayment = async (amount, email) => {
  const response = await fetch("http://localhost:5173/api/pay", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount, customerEmail: email }),
  });
  return response.json();
};


const handlePayment = async () => {
  try {
    const { paymentUrl } = await createPayment(1, "test@gmail.com");
    window.location.href = paymentUrl; // Redirection vers Viva Wallet
  } catch (error) {
    setError(error.message);
  }
};

const PricingCardWithFeatures = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full  p-16  w-full gap-32 -z-10">
    {/*  Features Section */}
        <div className="w-full md:w-1/2 p-6 flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-8 text-white motion-preset-slide-up-lg">Pourquoi Notre Formule ?</h2>
          <ul className="space-y-3 text-white ">
            {[
            "Des réductions à des prix cassés",
              "Des réductions sur toute l'année",
              "Possibilité de demander vos produits favoris",
              "Des produits Exclusifs",
            ].map((feature, index) => (
            <li key={index} className="flex items-center text-lg motion-preset-slide-left-md" style={{ animationDelay: `${index * 0.3}s` }}>
                <img src={Check}  className=" w-5 h-5 mr-2" alt="Check" />
                {/*  <Check className="text-green-500 w-5 h-5 mr-2" />*/}
             
                <p className="text-2xl">{feature}</p>
            </li>
            ))}
          </ul>
        </div>
        
        {/* Pricing Card */}
      <Card className="w-full md:w-1/3 bg-white shadow-lg rounded-2xl p-5 text-center motion-preset-slide-left-lg">
        <CardContent>
          <h3 className="text-2xl font-semibold mb-4">Formule Pro<p className="text-4xl font-bold text-gray-900">€6,00/mo</p></h3>
          <p className="text-gray-500 text-sm mt-2">Facturation mensuelle</p>
          <ul className="space-y-3 ">
            {[
              "-30 % sur : E-liquides / Fleurs CBD / Hash CBD / E-liquides CBD / Gummies",
              "-20 % sur : Résistances / Pods de remplacement / Pods pré-remplis",
              "-15 %  sur : Kit E-Cigarette / Box E-Cigarette / Vaporisateur Portable / Vaporisateur de Table",
              
              "D'autres Surprises à venir ...",
            ].map((feature, index) => (
              <li key={index} className="flex items-center  text-lg pt-2 ">
                <img src={Check} alt="Check" className="w-5 h-5 mr-2 flex-shrink-0" />
                <p className="flex-1">{feature}</p>
                
              </li>
            ))}
          </ul>
          <Button className="mt-8 w-full bg-blue-600 text-white hover:bg-blue-700" onClick={handlePayment} >Commencez Maintenant</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PricingCardWithFeatures;
