import React from 'react'
import { motion } from "motion/react"
import { Love_Calculator} from '@/assets/images';
import ArrowBtn from '@/components/HomeButton';
import { Vlove } from '@/assets/images/vectors';
function index() {
    return (
        <motion.div
            className='relative min-h-screen z-20 flex flex-col select-none'
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100vw", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="relative w-full h-full">
                <img src={Love_Calculator} alt="background" className="w-full min-h-[200px] max-h-[280px] lg:max-h-[350px] object-cover" />
                <div className='absolute inset-0  opacity-50' />
                <div className='absolute min-h-14 bottom-0 bg-white/50  w-full left-0 right-0 text-center rounded-t-3xl' >
                    <h1 className="text-2xl md:text-4xl font-bold text-white z-10 py-6 lg:py-10 text-shadow">Love Calculator</h1>
                </div>
                <div className='absolute top-2 left-2 z-30 '>
                    <ArrowBtn />
                </div>
            </div>
            <div className="p-4">
                <div className="rounded-3xl min-h-[400px] border shadow-lg bg-white px-6 border-[#ED025D] relative max-w-[800px] mx-auto mt-10 flex flex-col">
                    <h1 className="text-2xl font-bold text-[#FF0766] text-center py-4">Sorry</h1>
                    <div className="flex flex-col-reverse sm:grid sm:grid-cols-2  h-full space-y-6 md:space-y-0 flex-1 flex-grow">
                        <div className="flex justify-end items-end">
                            <img
                                className="max-w-full max-h-[300px] sm:max-h-[500px] object-contain"
                                src={Vlove}
                                alt="vector"
                            />
                        </div>
                        <div className="flex flex-col justify-start  sm:pt-10">
                            <p className="text-lg text-[#333333] font-semibold">
                                <span className='font-bold'>Hey Name,</span><br />Your partner is fake, it will hurt a little to hear, bear<br />with it....
                            </p>
                        </div>

                    </div>
                </div>
            </div>


        </motion.div>

    )
}

export default index
