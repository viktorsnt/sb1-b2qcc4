import Header from "@/components/Header"
import Hero from "@/components/Hero"
import PhotoSessions from "@/components/PhotoSessions"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Galeria from "@/components/Galeria"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* <Header /> */}
      <Hero />
      <PhotoSessions />
      <About />
      <Galeria />
      <Contact />
      <Footer />
    </main>
  )
}