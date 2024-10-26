import React from 'react';
import { BG, Wave, Death, Children_predictor, Love_Calculator, Partner } from '../assets/images';
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
      image: Partner,
      description: "Predict the date of your love",
      href: "/love-predictor"
    },
    {
      title: "Money Predictor",
      image: Love_Calculator,
      description: "Predict the date of your money",
      href: "/money-predictor"
    },
    {
      title: "Children Predictor",
      image: Children_predictor,
      description: "Predict the number of your children",
      href: "/children-predictor"
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-gray-900 text-white">
      {/* Background Section */}
      <div className="relative w-full h-full">
        <img src={BG} alt="background" className="w-full max-h-[1200px] object-cover" />
        <div className="absolute bottom-0 w-full">
          <img src={Wave} alt="wave" className="w-full" />
        </div>
      </div>

      {/* Centered Prediction Cards */}
      <div className="flex justify-center py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-screen-md">
          {predictions.map((prediction, index) => (
            <a 
              key={index} 
              href={prediction.href} 
              className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-md transition transform hover:scale-105 max-w-xs mx-auto"
            >
              {/* Background Image */}
              <img src={prediction.image} alt={prediction.title} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75" />

              {/* Card Content */}
              <div className="relative z-10 p-4 flex flex-col justify-between h-full">
                <h1 className="text-2xl font-semibold mb-1 group-hover:text-blue-400 transition-colors">{prediction.title}</h1>
                <p className="text-sm mb-2">{prediction.description}</p>
                <ArrowRight className="text-white group-hover:text-blue-400 transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
