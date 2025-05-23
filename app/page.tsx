import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import GymEquipment from "@/components/gym-equipment"
import GallerySection from "@/components/gallery-section"
import InstagramSection from "@/components/instagram-section"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"

export default function Home() {
  return (
    <main className="min-h-screen bg-gym-dark text-white">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GymEquipment />
      <GallerySection />
      <InstagramSection />
      <Footer />
    </main>
  )
}
