
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Linguagens & Frameworks",
      skills: ["Java 8+", "Spring", "Hibernate", "React", "Typescript", "JavaScript", "CSS Module"]
    },
    {
      title: "Bancos de Dados",
      skills: ["SQL Server", "DB2", "PostgreSQL", "Oracle", "SQL", "MySQL"]
    },
    {
      title: "Servidores & Ferramentas",
      skills: ["WebSphere", "Payara GlassFish", "Fortify"]
    },
    {
      title: "Metodologias & Outros",
      skills: ["Scrum", "APIs REST", "Sistemas ERP", "Sistemas Legados"]
    },
    {
      title: "Infraestrutura & Suporte",
      skills: ["Telecomunicações", "Redes de Fibra Óptica", "Suporte Técnico", "Infraestrutura de Redes"]
    }
  ];

  return (
    <section id="skills" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair gradient-text">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções robustas e escaláveis
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-background/80 hover:bg-background transition-colors duration-200 border border-border/50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/20">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Experiência Profissional
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <strong>2019-2021:</strong> Telecomunicações - Suporte interno e infraestrutura de redes de fibra óptica<br/>
              <strong>2021-presente:</strong> Suporte técnico em software - Sistemas ERP e SaaS<br/>
              <strong>Atual:</strong> Desenvolvedor Back-end - Java, APIs REST e sistemas legados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
