import React from 'react'
import { motion } from "motion/react"
import { Children_predictor } from '@/assets/images';
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

  ur_dob: z.date({
    message: "A date of birth is required.",
  }).refine(
    (date) => date <= new Date(),
    { message: "Date of birth must be in the past." }
  ),

  partner_name: z.string()
    .min(2, { message: "Partner's name must be at least 2 characters long." })
    .max(50, { message: "Partner's name cannot exceed 50 characters." })
    .min(1, { message: "Partner's name is required." }),

  partner_dob: z.date({
    message: "A date of birth is required.",
  }).refine(
    (date) => date <= new Date(),
    { message: "Date of birth must be in the past." }
  ),
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
      ur_dob: null,
      partner_name: "",
      partner_dob: null,
    },
  })

  function onSubmit(values) {
    console.log(values)
    navigate('/children-predictor/result');
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
        <img src={Children_predictor} alt="background" className="w-full min-h-[300px] max-h-[1200px] object-cover" />
        <div className='absolute inset-0  opacity-50' />
        <div className='absolute min-h-14 bottom-0 bg-white/50  w-full left-0 right-0 text-center rounded-t-3xl' >
          <h1 className="text-2xl md:text-4xl font-bold text-white z-10 py-6 md:py-10">Future Children Predictor</h1>
        </div>
        <div className='absolute top-2 left-2 z-30 '>
          <ArrowBtn />
        </div>
      </div>
      <div className='p-4 pb-20 mt-10'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className='rounded-3xl border shadow-lg bg-white  px-6 border-[#23706C] max-w-[900px] mx-auto  space-y-6 py-10'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-8'>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#23706C]">Your Name</FormLabel>
                      <FormControl>
                        <Input className="border-[#23706C]/50 focus-visible:border-[#23706C]" placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  className="w-full"
                  name="ur_dob"
                  render={({ field }) => (
                    <FormItem className="flex flex-col justify-end w-full">
                      <FormLabel className="text-[#23706C] font-semibold">Date of birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full bg-[#D9D9D9]/30 border-[#23706C]/50 focus-visible:border-[#23706C] text-left font-normal",
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
                  name="partner_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#23706C] font-semibold" >Your Lover Name</FormLabel>
                      <FormControl>
                        <Input className="border-[#23706C]/50 focus-visible:border-[#23706C]" placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  className="w-full"
                  name="partner_dob"
                  render={({ field }) => (
                    <FormItem className="flex flex-col justify-end w-full">
                      <FormLabel className="text-[#23706C] font-semibold">Partner's Date of birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full bg-[#D9D9D9]/30 border-[#23706C]/50 focus-visible:border-[#23706C] text-left font-normal",
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
            </div>

            <div>
              <SwipeBtn type="submit" onClick={handleNextStage} bgcolor="bg-[#23706C]" bgGradeint="bg-gradient-to-r via-red-[#23706C] from-[#38BAB6] to-[#23706C]">
                Swipe to Select
              </SwipeBtn>
            </div>
          </form>
        </Form>

      </div>
    </motion.div>
  )
}

export default index
