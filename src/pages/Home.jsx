import React from 'react';
import { BG, Wave, Death, Children_predictor, Love_Calculator, Partner,Prediction_Corner } from '../assets/images';
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
      title: "Partner Selector",
      image: Partner,
      description: "Predict the name of your partner",
      href: "/partner-predictor"
    },
    {
      title: "Love Calculator",
      image: Love_Calculator,
      description: "Predict the percentage of your love",
      href: "/love-predictor"
    },
    {
      title: "Future Children Predictor",
      image: Children_predictor,
      description: "Predict the number of children you will have",
      href: "/children-predictor"
    }
  ];

  return (
    <div className="relative w-full min-h-screen  text-white">
      {/* Background Section */}
      <div className="relative w-full h-full">
        <img src={BG} alt="background" className="w-full max-h-[1200px] object-cover" />
        <div className='absolute -top-60 left-0 right-0 bottom-0 flex items-center justify-center flex-col gap-20'>
          <img src={Prediction_Corner} alt="logo" className="h-auto max-h-12" />
          <h1 className=" flex items-center justify-center text-5xl font-black text-white">Predict Your Future</h1>
          <p className=" text-xl">Predict your future with our prediction tools</p>
        </div>
        <div className="absolute bottom-0 w-full">
          <img src={Wave} alt="wave" className="w-full" />
        </div>
      </div>

      {/* Centered Prediction Cards */}
      <div className="flex justify-center py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6  w-full max-w-[1200px] overflow-hidden">
          {predictions.map((prediction, index) => (
            <a
              key={index}
              href={prediction.href}
              className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-md transition transform hover:scale-105 max-w-[600px] mx-auto"
            >
              {/* Background Image */}
              <img src={prediction.image} alt={prediction.title} className="absolute inset-0 w-full h-full object-cover  group-hover:opacity-50 transition-opacity" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75" />

              {/* Card Content */}
              <div className="relative z-10 p-4  flex items-end justify-flex  h-full w-full py-10">
                <div className='flex flex-col w-full'>
                  <h1 className="text-3xl font-black mb-1 group-hover:text-blue-400 transition-colors ">{prediction.title}</h1>
                  <p className="text-sm mb-2">{prediction.description}</p>
                </div>
                <div className='flex items-end justify-end'>
                  <ArrowRight size={40} className="text-white group-hover:text-blue-400 transition-colors text-3xl" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
