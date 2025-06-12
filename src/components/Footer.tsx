import { Github, Heart, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-2xl font-bold gradient-text font-playfair">Eduardo P. Vieira</div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/eduardopvieira16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>por Eduardo P. Vieira</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
