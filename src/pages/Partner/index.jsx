import React from 'react'
import { motion } from "motion/react"
import { Partner } from '@/assets/images';
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

  partner_name: z.string()
    .min(2, { message: "Partner's name must be at least 2 characters long." })
    .max(50, { message: "Partner's name cannot exceed 50 characters." })
    .min(1, { message: "Partner's name is required." }),

  age: z.number()
    .int({ message: "Age must be an integer." })
    .min(18, { message: "Age must be at least 18." })
    .max(100, { message: "Age cannot exceed 100." }),
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
      partner_name: "",
      age: null,
    },
  })

  function onSubmit(values) {
    console.log(values)
    navigate('/partner-predictor/result');
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
        <img src={Partner} alt="background" className="w-full min-h-[300px] max-h-[1200px] object-cover" />
        <div className='absolute inset-0  opacity-50' />
        <div className='absolute min-h-14 bottom-0 bg-white/50  w-full left-0 right-0 text-center rounded-t-3xl' >
          <h1 className="text-2xl md:text-4xl font-bold text-white z-10 py-6 md:py-10">Partner Selector</h1>
        </div>
        <div className='absolute top-2 left-2 z-30 '>
          <ArrowBtn />
        </div>
      </div>
      <div className='p-4 mt-10 pb-20'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className='rounded-3xl border shadow-lg bg-white p-4 px-6 border-[#FC771D] max-w-[900px] mx-auto py-10 space-y-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-8'>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#CC5200]">Name</FormLabel>
                      <FormControl>
                        <Input className="border-[#FC771D]/50 focus-visible:border-[#FC771D]" placeholder="shadcn" {...field} />
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
                      <FormLabel className="text-[#CC5200] font-semibold">Date of birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full bg-[#D9D9D9]/30 border-[#FC771D]/50 focus-visible:border-[#FC771D] text-left font-normal",
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
                      <FormLabel className="text-[#CC5200] font-semibold" >Gender</FormLabel>
                      <FormControl>
                        <Select className="border-[#FC771D]/50 focus-visible:border-[#FC771D]" onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="border-[#FC771D]/50 focus-visible:border-[#FC771D]">
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
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-8'>
                <FormField
                  control={form.control}
                  name="partner_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#CC5200] font-semibold" >Username</FormLabel>
                      <FormControl>
                        <Input className="border-[#FC771D]/50 focus-visible:border-[#FC771D]" placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#CC5200] font-semibold">Age</FormLabel>
                      <FormControl>
                        <Input
                          className="border-[#FC771D]/50 focus-visible:border-[#FC771D]"
                          placeholder="--"
                          type="number"
                          value={field.value || ''} // Ensure the value is a string for the input
                          onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value, 10) : '')} // Convert to number
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>
            </div>

            <div>
              <SwipeBtn type="submit" onClick={handleNextStage} bgcolor="bg-[#CC5200]" bgGradeint="bg-gradient-to-r via-red-[#FC771D] from-[#FC771D] to-[#CC5200]">
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
