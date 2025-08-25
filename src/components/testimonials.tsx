import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mariana S.',
    avatar: 'MS',
    text: 'A Dra. Ana foi fundamental no meu processo de autoconhecimento. Com sua ajuda, aprendi a lidar com minha ansiedade de uma forma que nunca imaginei ser possível. Sou muito grata!',
    rating: 5,
  },
  {
    name: 'Carlos P.',
    avatar: 'CP',
    text: 'Profissional excelente e muito atenciosa. As sessões de terapia de casal nos ajudaram a melhorar nossa comunicação e a resolver conflitos de maneira saudável. Recomendo!',
    rating: 5,
  },
  {
    name: 'Fernanda L.',
    avatar: 'FL',
    text: 'Encontrei na terapia um porto seguro. A abordagem da Dra. Ana é muito eficaz e me ajudou a superar um período difícil. Hoje me sinto mais forte e confiante.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="container py-20 md:py-24 bg-muted/20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-headline">Depoimentos de Pacientes</h2>
        <p className="mt-3 max-w-xl mx-auto text-muted-foreground">Veja o que alguns de meus pacientes têm a dizer sobre o nosso trabalho.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="bg-card border-border shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <CardContent className="flex flex-col items-center">
              <Avatar className="w-20 h-20 mb-4">
                <AvatarImage src={`https://placehold.co/80x80.png?text=${testimonial.avatar}`} />
                <AvatarFallback>{testimonial.avatar}</AvatarFallback>
              </Avatar>
              <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              <div className="mt-4 flex items-center">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mt-2 font-bold text-foreground">{testimonial.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
