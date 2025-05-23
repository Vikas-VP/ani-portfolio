"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video play failed:", error)
      })
    }
  }, [])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="video-container">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source
            src="https://drive.google.com/file/d/1AwN1Jb0EcjVVs9rzAQV8o30f-a_gmstm/view?usp=drivesdk"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl font-bebas tracking-wider text-white leading-tight">
            <span className="block">TRANSFORM</span>
            <span className="text-gym-red text-glow">YOUR PHYSIQUE</span>
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
            Dedicated to building strength, discipline, and peak physical condition
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12"
        >
          <a
            href="#about"
            className="inline-block bg-gym-red text-white font-bebas text-xl px-8 py-3 rounded-sm hover:bg-red-700 transition-colors duration-300"
          >
            DISCOVER MORE
          </a>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <ChevronDown className="w-10 h-10 text-white/70" />
      </div>
    </section>
  )
}
