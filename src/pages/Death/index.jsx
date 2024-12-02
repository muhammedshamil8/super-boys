import React from 'react'
import { motion } from "motion/react"
import { Death } from '@/assets/images';
import SwipeBtn from '@/components/SwipeButton';
import ArrowBtn from '@/components/HomeButton';
import { useNavigate } from 'react-router-dom';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name cannot exceed 50 characters." })
    .min(1, { message: "Name is required." }),

  dob: z.date({
    message: "A date of birth is required.",
  }).refine(
    (date) => date <= new Date(),
    { message: "Date of birth must be in the past." }
  ),

  gender: z.string()
    .min(1, { message: "Gender is required." }),
});



function index() {
  const navigate = useNavigate();

  const handleNextStage = () => {
    onSubmit();
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      dob: null,
      gender: "",
    },
  })

  function onSubmit(values) {
    console.log(values)
    navigate('/death-predictor/result');
  }

  return (
    <motion.div
      className='relative min-h-screen z-20 flex flex-col select-none'
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative w-full h-full">
        <img src={Death} alt="background" className="w-full min-h-[300px] max-h-[1200px] object-cover" />
        <div className='absolute inset-0  opacity-50' />
        <div className='absolute min-h-14 bottom-0 bg-white/50  w-full left-0 right-0 text-center rounded-t-3xl' >
          <h1 className="text-2xl md:text-4xl font-bold text-white z-10 py-6 md:py-10 text-shadow">Death Predictor</h1>
        </div>
        <div className='absolute top-2 left-2 z-30 '>
          <ArrowBtn />
        </div>
      </div>
      <div className='p-4'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className='rounded-3xl border shadow-lg bg-white p-4 px-6 border-[#AA0E0E] max-w-[900px] mx-auto mt-10 space-y-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-8'>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#AA0E0E]">Name</FormLabel>
                      <FormControl>
                        <Input className="border-[#AA0E0E]/50 focus-visible:border-[#AA0E0E]" placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  className="w-full"
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="flex flex-col justify-end w-full">
                      <FormLabel className="text-[#AA0E0E] font-semibold">Date of birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full bg-[#D9D9D9]/30 border-[#AA0E0E]/50 focus-visible:border-[#AA0E0E] text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span className="text-gray-500">Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                            captionLayout="dropdown" // Enables year/month dropdowns
                            fromYear={1900} // Dropdown starts from 1900
                            toYear={new Date().getFullYear()}// Dropdown ends at the current year
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-8'>
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#AA0E0E] font-semibold" >Gender</FormLabel>
                      <FormControl>
                        <Select className="border-[#AA0E0E]/50 focus-visible:border-[#AA0E0E]" onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="border-[#AA0E0E]/50 focus-visible:border-[#AA0E0E]">
                            <SelectValue placeholder="Select your gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Non-binary">Non-binary</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className='hidden sm:block' />
              </div>
            </div>

            <div>
              <SwipeBtn type="submit" onClick={handleNextStage} bgcolor="bg-[#AA0E0E]" bgGradeint="bg-gradient-to-r via-red-[#AA0E0E] from-[#F11515] to-[#AA0E0E]">
                Swipe to Predict
              </SwipeBtn>
            </div>
          </form>
        </Form>

      </div>
    </motion.div>
  )
}

export default index
