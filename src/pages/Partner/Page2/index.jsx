import React from 'react'
import { motion } from "motion/react"
import { Death, Children_predictor, Love_Calculator, Partner } from '@/assets/images';
import ArrowBtn from '@/components/HomeButton';

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
                <img src={Partner} alt="background" className="w-full min-h-[200px] max-h-[280px] lg:max-h-[350px] object-cover" />
                <div className='absolute inset-0  opacity-50' />
                <div className='absolute min-h-14 bottom-0 bg-white/50  w-full left-0 right-0 text-center rounded-t-3xl' >
                    <h1 className="text-2xl md:text-4xl font-bold text-white z-10 py-6 lg:py-10">Partner Selector</h1>
                </div>
                <div className='absolute top-2 left-2 z-30 '>
                    <ArrowBtn />
                </div>
            </div>
            <div className='p-4'>
                <div className='rounded-3xl h-[500px] border shadow-lg bg-white p-4 px-6 border-[#FC771D] max-w-[400px] mx-auto mt-10 space-y-6'>
                </div>
            </div>

        </motion.div>

    )
}

export default index
