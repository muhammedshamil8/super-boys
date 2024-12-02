import React from 'react';
import { Death, Children_predictor, Love_Calculator, Partner } from '@/assets/images';
import RealBG from '@/assets/images/bg_text.png'
import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from "motion/react"

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

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <motion.div
      className='relative w-full min-h-screen text-white bg-white'
      initial={{ x: "", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Background Section */}
      <div className="relative w-full h-full">
        <img src={RealBG} alt="background" className="w-full max-h-[1200px] object-cover" />
        <div className='absolute inset-0  opacity-50' />
        <div className="absolute bottom-4 sm:bottom-[20%] z-30 w-full flex justify-center">
          <button
            onClick={handleScroll}
            className="flex items-center justify-center py-1 px-6 rounded-xl bg-red-500 cursor-pointer transition-all ease-in-out animate-bounce hover:bg-red-600 font-semibold text-white text-[10px] sm:text-sm md:text-md"
          >
            Predict Now <ArrowDown className="ml-2 w-4 h-4 sm:w-6 sm:h-6 md:h-8 md:w-8" />
          </button>
        </div>
      </div>

      {/* Prediction Cards */}
      <div className="flex justify-center py-16 px-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[1100px]">
          {predictions.map((prediction, index) => (
            <a
              key={index}
              href={prediction.href}
              className="relative w-full h-[180px] md:h-[200px] rounded-2xl overflow-hidden shadow-md transition transform hover:scale-105"
            >
              {/* Background Image */}
              <img
                src={prediction.image}
                alt={prediction.title}
                className="absolute inset-0 w-full h-full  object-cover transition-opacity"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75" />

              {/* Card Content */}
              <div className="relative z-10 p-4 flex flex-col justify-between h-full">
                <h1 className="text-2xl font-bold mb-2 text-white transition-colors group-hover:text-blue-400">
                  {prediction.title}
                </h1>
                <p className="text-sm text-gray-300">{prediction.description}</p>
                <ArrowRight size={30} className="text-white group-hover:text-blue-400 transition-colors mt-2 self-end" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
