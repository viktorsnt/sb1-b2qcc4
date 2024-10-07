import Image from "next/image"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        alt="Woman on beach"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 z-10 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Time to Be...</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Discover your true beauty and embrace your authentic self through our empowering photo sessions.
        </p>
        <Button size="lg" className="text-lg">
          Book Your Session
        </Button>
      </div>
    </section>
  )
}

export default Hero