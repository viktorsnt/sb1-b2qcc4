import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Time to Be...</h3>
            <p className="mt-2">Empowering women through photography</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-foreground/60">
          © {new Date().getFullYear()} Time to Be... All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer