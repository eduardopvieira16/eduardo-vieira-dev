import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Linkedin } from 'lucide-react'

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            Olá, eu sou
            <span className="block gradient-text">Eduardo Vieira</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-foreground mb-4 font-semibold">
            Back-end Developer
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Desenvolvedor back-end especializado em Java 8+, criando APIs REST robustas e
            escaláveis. Experiência sólida em sistemas legados, bancos de dados relacionais e
            ferramentas de segurança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              onClick={scrollToProjects}
            >
              Ver Projetos
            </Button>
            {/* <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              Download CV
            </Button> */}
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/eduardopvieira16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-vieira-69082876/"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce-slow cursor-pointer bg-transparent border-none p-2 rounded-full hover:bg-muted/50 transition-colors duration-650"
            aria-label="Rolar para seção sobre"
          >
            <ArrowDown className="h-8 w-8 mx-auto text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
