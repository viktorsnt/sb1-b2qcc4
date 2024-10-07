import Header from "@/components/Header"
import Hero from "@/components/Hero"
import PhotoSessions from "@/components/PhotoSessions"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PhotoSessions />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}