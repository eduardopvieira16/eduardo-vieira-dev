
import { Code, Database, Shield, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair gradient-text">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvedor back-end apaixonado por tecnologia e inovação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Minha Trajetória</h3>
            <p className="text-muted-foreground leading-relaxed">
              Sou graduado em Análise e Desenvolvimento de Sistemas e atuo como desenvolvedor back-end 
              com foco em Java 8+, criando e mantendo APIs REST robustas, escaláveis e seguras.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Comecei minha trajetória profissional em 2019 na área de telecomunicações, evoluindo 
              para suporte técnico em software em 2021, e atualmente focado no desenvolvimento 
              back-end com ampla experiência em sistemas legados.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Tenho ampla experiência em bancos de dados relacionais e domínio de frameworks 
              essenciais para garantir performance, segurança e estabilidade em sistemas críticos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-2">Desenvolvimento</h4>
              <p className="text-sm text-muted-foreground">
                Java 8+, Spring, Hibernate, APIs REST
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <Database className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-2">Bancos de Dados</h4>
              <p className="text-sm text-muted-foreground">
                SQL Server, DB2, PostgreSQL, Oracle
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-2">Segurança</h4>
              <p className="text-sm text-muted-foreground">
                Fortify, SonarQube, Análise de Vulnerabilidades
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-2">Metodologias</h4>
              <p className="text-sm text-muted-foreground">
                Scrum, Cascata, Trabalho em Equipe
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Objetivos e Áreas de Interesse</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Arquitetura de Software</h4>
              <p className="text-sm text-muted-foreground">
                Aprofundar conhecimentos em Java e padrões arquiteturais
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Cibersegurança</h4>
              <p className="text-sm text-muted-foreground">
                Especialização em pentest e análise de vulnerabilidades
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Gestão & Dados</h4>
              <p className="text-sm text-muted-foreground">
                Explorar gestão de tecnologias e ciência de dados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
