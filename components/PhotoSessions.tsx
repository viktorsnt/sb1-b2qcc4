import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const sessions = [
  {
    title: "Be Goddess",
    description: "Embrace your inner deity and showcase your power.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80"
  },
  {
    title: "Be Sexy",
    description: "Celebrate your sensuality and confidence.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80"
  },
  {
    title: "Be Mother",
    description: "Capture the beauty and strength of motherhood.",
    image: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80"
  },
  {
    title: "Be Model",
    description: "Experience the glamour of a professional model shoot.",
    image: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80"
  }
]

const PhotoSessions = () => {
  return (
    <section id="sessions" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Photo Sessions</h2>
        <p className="text-center text-gray-600 mb-12">
          Costumamos dizer que transformamos mulheres em deusas porque, ao saírem daqui, cada uma relata sua descoberta e que viveu uma experiência incrível de despertar. Sabemos que o nosso objetivo é proporcionar sempre uma experiência única. Se você também deseja passar por essa transformação, buscar uma imagem mais confiante ou registrar um momento especial de sua vida, você está no lugar certo!
          <br/>
          Nossos ensaios foram cuidadosamente planejados para revelar sua verdadeira beleza.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sessions.map((session, index) => (
            <Card key={index} className="overflow-hidden ">
              <CardHeader className="p-0">
                <Image
                  src={session.image}
                  alt={session.title}
                  width={720}
                  height={480}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{session.title}</CardTitle>
                <CardDescription>{session.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhotoSessions