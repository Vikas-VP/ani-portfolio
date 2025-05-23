"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Dumbbell } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gym-darker bg-opacity-90 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-8 w-8 text-gym-red animate-pulse-glow" />
          <span className="text-3xl font-bebas tracking-wider text-white">ANIL</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["home", "about", "gallery", "instagram"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="text-lg font-medium text-white hover:text-gym-red transition-colors relative group"
            >
              <span className="uppercase font-bebas tracking-wide">{item}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gym-red group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-gym-darker bg-opacity-95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {["home", "about", "gallery", "instagram"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-xl font-bebas text-white hover:text-gym-red transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.toUpperCase()}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
