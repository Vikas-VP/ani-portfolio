"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Dumbbell, Clock, Users } from "lucide-react"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: <Clock className="w-8 h-8 text-gym-red" />, value: "5+", label: "Years Experience" },
    { icon: <Users className="w-8 h-8 text-gym-red" />, value: "100+", label: "Clients Trained" },
    { icon: <Dumbbell className="w-8 h-8 text-gym-red" />, value: "6", label: "Days/Week Training" },
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-gym-darker relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gym-red/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gym-red/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bebas text-white mb-4 section-heading inline-block">ABOUT ME</h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Dedicated fitness enthusiast with a passion for strength training and bodybuilding
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5664.jpg-JxkEnAsnH1VSsATjN7pQD3r5aQG2Ee.jpeg"
                alt="Anil in the gym"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gym-darker to-transparent opacity-40"></div>
            </div>
            <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-gym-red rounded-full flex items-center justify-center animate-pulse-glow">
              <Dumbbell className="h-12 w-12 text-white animate-rotate-slow" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bebas text-white mb-6">THE JOURNEY</h3>
            <p className="text-white/80 mb-6">
              I'm Anil, a dedicated fitness enthusiast with a passion for strength training and bodybuilding. My fitness
              journey began with a simple goal: to transform my physique and push my limits. Today, I continue to
              challenge myself daily, constantly evolving and refining my training methods.
            </p>
            <p className="text-white/80 mb-8">
              My approach combines traditional strength training with modern techniques, focusing on progressive
              overload and proper form. I believe that true fitness is a lifestyle, not just a temporary goal.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-gym-dark p-4 rounded-lg flex flex-col items-center"
                >
                  <div className="mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bebas text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
