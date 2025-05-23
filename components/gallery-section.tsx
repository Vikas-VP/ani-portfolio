"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { X } from "lucide-react"

export default function GallerySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6007.jpg-vn9dgtS1S6gciMuEr5Kl5vshqjAugP.jpeg",
      alt: "Gym training session",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5520-4AD2UVl34Wnk2NcSZEtLuxUm9Klhot.jpeg",
      alt: "Working out with equipment",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5378.jpg-rHUNtanjhdayQ1lUPmJ46FDW5qdu0g.jpeg",
      alt: "Focused bicep curl",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5414-VIP0dOxvGkDcS2y5ml0igiQmthWky8.jpeg",
      alt: "Mirror pose with dumbbells",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5908.jpg-OBxXrTtwxnQvNdnLtXbCHAzfdCOpZw.jpeg",
      alt: "Training with headphones",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6097.jpg-rZwpZZB2Wdj6SMozr2Q1dMMdUEI4qk.jpeg",
      alt: "Gym selfie in red shorts",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6095.jpg-9abKImlh9up5jIE2f2Ig7opPYEBTPw.jpeg",
      alt: "Workout session in white shirt",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6013-1n8MZyMFlXMG61ORsNT9QVciKjs3wp.jpeg",
      alt: "Selecting dumbbells",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6094.jpg-38hqF1laf4OwBgBpKu7KDVnjL2bbt0.jpeg",
      alt: "Intense workout focus",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5664.jpg-JxkEnAsnH1VSsATjN7pQD3r5aQG2Ee.jpeg",
      alt: "Training in red shirt",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="gallery" ref={ref} className="py-20 bg-gym-dark relative">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gym-red/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gym-red/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bebas text-white mb-4 section-heading inline-block">GALLERY</h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Capturing the journey of dedication, discipline, and transformation
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer gallery-image"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gym-red transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-4xl max-h-[80vh] aspect-auto">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged gallery image"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}
