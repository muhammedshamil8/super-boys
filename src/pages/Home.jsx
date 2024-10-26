import React from 'react';
import { BG, Wave, Death } from '../assets/images';
import { ArrowRight } from 'lucide-react';

function Home() {
  const predictions = [
    {
      title: "Death Predictor",
      image: Death,
      description: "Predict the date of your death",
      href: "/death-predictor"
    },
    {
      title: "Love Predictor",
      image: Death,
      description: "Predict the date of your love",
      href: "/love-predictor"
    },
    {
      title: "Money Predictor",
      image: Death,
      description: "Predict the date of your money",
      href: "/money-predictor"
    }
  ];

  return (
    <div className="relative w-full min-h-screen  text-white">
      {/* Background Section */}
      <div className="relative w-full h-full">
        <img src={BG} alt="background" className="w-full max-h-[1200px] object-cover" />
        <div className="absolute bottom-0 w-full">
          <img src={Wave} alt="wave" className="w-full" />
        </div>
      </div>

      {/* Prediction Cards */}
      <div className="grid grid-cols-2 gap-10">
        {predictions.map((prediction, index) => (
          <a 
            key={index} 
            href={prediction.href} 
            className="group relative w-[700px] h-[300px] mx-auto my-4 rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105"
          >
            {/* Background Image */}
            <img src={prediction.image} alt={prediction.title} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity" />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75" />

            {/* Card Content */}
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <h1 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{prediction.title}</h1>
              <p className="text-lg mb-4">{prediction.description}</p>
              <ArrowRight className="text-white group-hover:text-blue-400 transition-colors" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;
