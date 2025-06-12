import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink, Github } from 'lucide-react'

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Eduardo Vieira - Portifolio',
      description:
        'Landing page pessoal para apresentar meus projetos, habilidades e experiência como desenvolvedor.',
      image:
        'https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Vite', 'Typescript', 'ShadcnUI', 'Tailwind CSS'],
      liveUrl: 'https://eduardo-vieira-dev.vercel.app/',
      githubUrl: 'https://github.com/eduardopvieira16/eduardo-vieira-dev',
    },
    {
      title: 'Hub Bio',
      description:
        'Agrupador de links para uso pessoal',
      image:
        'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Vite', 'Typescript', 'ShadcnUI', 'Tailwind CSS'],
      liveUrl: 'https://hub-bio-eduardopvieira16s-projects.vercel.app/',
      githubUrl: 'https://github.com/eduardopvieira16/hub-bio',
    },
  ]

  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades e
            experiência em diferentes tecnologias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Projeto
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
