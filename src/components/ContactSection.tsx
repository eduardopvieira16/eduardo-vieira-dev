
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'eduardo_pereirav@outlook.com',
      href: 'mailto:eduardo_pereirav@outlook.com',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (46) 99911-9356',
      href: 'tel:+5546999119356',
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Pato Branco, PR, Brasil',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tem um projeto em mente ou quer conversar sobre uma oportunidade? 
            Ficarei feliz em ouvir de você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold mb-6">Vamos conversar!</h3>
              <p className="text-muted-foreground mb-8">
                Estou sempre aberto a discutir novos projetos, ideias criativas 
                ou oportunidades de fazer parte da sua visão.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <a 
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Envie uma mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome
                    </label>
                    <Input id="name" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Assunto
                  </label>
                  <Input id="subject" placeholder="Assunto da mensagem" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Sua mensagem..." 
                    rows={6}
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
