import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, User, BrainCircuit } from 'lucide-react';

const services = [
  {
    title: 'Terapia Individual',
    icon: <User className="w-8 h-8 text-primary" />,
    description: 'Um espaço seguro para explorar suas questões pessoais, desenvolver autoconhecimento e encontrar novas formas de lidar com os desafios da vida.',
  },
  {
    title: 'Terapia de Casal',
    icon: <Users className="w-8 h-8 text-primary" />,
    description: 'Focada em melhorar a comunicação, resolver conflitos e fortalecer a conexão emocional entre os parceiros, construindo um relacionamento mais saudável.',
  },
  {
    title: 'Orientação Vocacional',
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    description: 'Processo de autoconhecimento e exploração de interesses e habilidades para auxiliar na escolha profissional de forma consciente e alinhada com seus valores.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="container py-20 md:py-24 bg-background">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-headline">Como posso te ajudar?</h2>
        <p className="mt-3 max-w-xl mx-auto text-muted-foreground">Ofereço um cuidado psicológico especializado para te auxiliar em sua jornada de bem-estar e autodescoberta.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="bg-card border-border shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl text-center p-6">
            <CardHeader className="flex flex-col items-center gap-4 pb-4">
              {service.icon}
              <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
