
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-commerce Moderno',
      description: 'Plataforma completa de e-commerce com React, Node.js e PostgreSQL. Sistema de pagamentos integrado e painel administrativo.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'App de Gestão',
      description: 'Sistema de gestão empresarial com dashboard interativo, relatórios em tempo real e integração com APIs externas.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Landing Page Criativa',
      description: 'Landing page responsiva com animações modernas, otimizada para conversão e integrada com ferramentas de marketing.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas 
            habilidades e experiência em diferentes tecnologias.
          </p>


          <p className="mt-20 text-xl text-muted-foreground max-w-3xl mx-auto">
            Em Breve meus projetos estarão disponíveis!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* {projects.map((project, index) => (
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
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
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
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Projeto
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
