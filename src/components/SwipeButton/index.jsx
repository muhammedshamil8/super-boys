import { ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";
import cn from 'classnames';
import { useState } from 'react';
import { Slider } from "@/components/ui/slider"; // Ensure Slider is imported from your component library

const SwipeBtn = ({ bgcolor = 'bg-red-700', bgGradeint = 'bg-gradient-to-r via-red-700 from-red-500 to-red-800', onClick, children }) => {
    const [sliderValue, setSliderValue] = useState(0); // Slider value to control swipe effect

    const handleSliderChange = (value) => {
        setSliderValue(value[0]); // Update slider value (Slider component returns an array)
    };

    const handleSliderEnd = () => {
        if (sliderValue >= 1 && onClick) {
            onClick(); // Trigger the onClick function passed as prop
            setSliderValue(0);  // Reset slider value after swipe
        }
        // else {
        // alert('Please swipe to the end to proceed'); // Alert user to swipe to the end
        //     setSliderValue(0);  // Reset slider value if swipe is not completed
        // }
    };

    return (
            <motion.button
                type='submit'
                className={cn(
                    'flex relative items-center gap-2 w-fit cursor-pointer rounded-full overflow-hidden mt-10 mx-auto',
                    bgGradeint
                )}
                whileHover={{
                    scale: 1.03,  // Slight scale-up of the entire button when hovered
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
            >
                {/* Arrow Swipe Effect */}
                <div
                    className={cn(
                        'absolute left-0 rounded-full h-full p-2 shadow-xl', // Ensure it starts from the left
                        bgcolor,
                    )}
                    style={{
                        width: `${sliderValue === 0 ? 0.15 * 280 : (sliderValue + 0.15) * 250}px`, // Dynamically set the width based on the slider value
                    }}
                >
                    <motion.div
                        animate={{
                            x: (sliderValue * 240),
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                        }}
                    >
                        <ChevronRight size="24" color="white" className="stroke-[2px]" />
                    </motion.div>
                </div>


                {/* Text with subtle hover effect */}
                <motion.span
                    className="px-20 p-2 text-white font-semibold whitespace-nowrap "
                    whileHover={{
                        x: 5,  // Slight shift to the right for the text
                        transition: { type: 'spring', stiffness: 300, damping: 30 },
                    }}
                >
                    {children}
                </motion.span>

                {/* Smooth Slider to control swipe */}
                <Slider
                    value={[sliderValue]} // Slider's value is an array
                    onValueChange={handleSliderChange} // Update slider value
                    onValueCommit={handleSliderEnd} // Trigger onSliderEnd when value is committed
                    max={1} // Set the maximum value to 1 for smooth transition
                    step={0.01} // Fine-grained control for smoothness
                    className="absolute bottom-0  left-0 w-full h-full top-0 opacity-0" // Make the slider invisible but functional
                />
            </motion.button>
    );
};

export default SwipeBtn;
