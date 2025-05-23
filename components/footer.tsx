"use client"

import { motion } from "framer-motion"
import { Instagram, Phone, Dumbbell } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gym-darker text-white py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gym-red to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gym-red/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6 md:mb-0"
          >
            <Dumbbell className="h-8 w-8 text-gym-red animate-pulse-glow" />
            <span className="text-3xl font-bebas tracking-wider">ANIL</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="https://www.instagram.com/ani_veerashaiva?igsh=MXY0aWxraGRsY2M3ag=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gym-red transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@ani_veerashaiva</span>
            </a>
            <a href="tel:8861110747" className="flex items-center gap-2 hover:text-gym-red transition-colors">
              <Phone className="w-5 h-5" />
              <span>+91 8861110747</span>
            </a>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-sm mb-4 md:mb-0"
          >
            &copy; {currentYear} Anil. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-6"
          >
            <a href="#home" className="text-white/60 hover:text-gym-red transition-colors text-sm">
              Home
            </a>
            <a href="#about" className="text-white/60 hover:text-gym-red transition-colors text-sm">
              About
            </a>
            <a href="#gallery" className="text-white/60 hover:text-gym-red transition-colors text-sm">
              Gallery
            </a>
            <a href="#instagram" className="text-white/60 hover:text-gym-red transition-colors text-sm">
              Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
