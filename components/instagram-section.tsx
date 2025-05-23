"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Instagram, ExternalLink } from "lucide-react"

interface InstagramPost {
  id: string
  imageUrl: string
  likes: number
  comments: number
}

export default function InstagramSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // In a real app, you would fetch this data from Instagram API
  // For this demo, we'll use the images we already have
  const instagramPosts: InstagramPost[] = [
    {
      id: "1",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6007.jpg-vn9dgtS1S6gciMuEr5Kl5vshqjAugP.jpeg",
      likes: 124,
      comments: 18,
    },
    {
      id: "2",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5520-4AD2UVl34Wnk2NcSZEtLuxUm9Klhot.jpeg",
      likes: 156,
      comments: 22,
    },
    {
      id: "3",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6013-1n8MZyMFlXMG61ORsNT9QVciKjs3wp.jpeg",
      likes: 203,
      comments: 31,
    },
    {
      id: "4",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5664.jpg-JxkEnAsnH1VSsATjN7pQD3r5aQG2Ee.jpeg",
      likes: 187,
      comments: 24,
    },
    {
      id: "5",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5378.jpg-rHUNtanjhdayQ1lUPmJ46FDW5qdu0g.jpeg",
      likes: 142,
      comments: 16,
    },
    {
      id: "6",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6094.jpg-38hqF1laf4OwBgBpKu7KDVnjL2bbt0.jpeg",
      likes: 176,
      comments: 28,
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
    <section id="instagram" ref={ref} className="py-20 bg-gym-darker relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gym-dark to-transparent -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bebas text-white mb-4 section-heading inline-block">INSTAGRAM</h2>
          <p className="text-white/70 max-w-3xl mx-auto">Follow my fitness journey on Instagram</p>
        </motion.div>

        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 bg-gym-dark p-4 rounded-full mb-6"
          >
            <Instagram className="w-6 h-6 text-gym-red" />
            <span className="text-white font-medium">@ani_veerashaiva</span>
          </motion.div>

          <motion.a
            href="https://www.instagram.com/ani_veerashaiva?igsh=MXY0aWxraGRsY2M3ag=="
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 bg-gym-red text-white px-6 py-3 rounded-sm hover:bg-red-700 transition-colors animate-pulse-glow"
          >
            <span className="font-bebas text-lg">FOLLOW ME</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {instagramPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={item}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between">
                <div className="p-4 w-full flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white text-sm">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white text-sm">{post.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/ani_veerashaiva?igsh=MXY0aWxraGRsY2M3ag=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gym-red hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <span>View more on Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
