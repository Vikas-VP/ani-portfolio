"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Dumbbell } from "lucide-react"

export default function GymEquipment() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 bg-gym-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gym-red/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gym-red/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bebas text-white mb-4 section-heading inline-block">THE ARSENAL</h2>
          <p className="text-white/70 max-w-3xl mx-auto">Tools of the trade for building the ultimate physique</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gym-darker rounded-lg overflow-hidden group"
          >
            <div className="h-64 relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Free weights"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gym-darker to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <Dumbbell className="w-6 h-6 text-gym-red" />
                <h3 className="text-2xl font-bebas text-white">FREE WEIGHTS</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-white/80">
                The foundation of strength training. Our selection of dumbbells, barbells, and weight plates allows for
                unlimited exercise variations to target every muscle group.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gym-darker rounded-lg overflow-hidden group"
          >
            <div className="h-64 relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Machines"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gym-darker to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gym-red"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <h3 className="text-2xl font-bebas text-white">MACHINES</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-white/80">
                Precision-engineered equipment that isolates specific muscle groups for targeted development. Perfect
                for both beginners and advanced lifters.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gym-darker rounded-lg overflow-hidden group"
          >
            <div className="h-64 relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Functional training"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gym-darker to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gym-red"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-2xl font-bebas text-white">FUNCTIONAL</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-white/80">
                Kettlebells, battle ropes, medicine balls, and more. These tools build real-world strength, improve
                coordination, and enhance athletic performance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
