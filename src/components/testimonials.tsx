import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'João Silva',
    title: 'CEO da StartupX',
    quote: 'O Messias é um profissional excepcional. Ele transformou nossa visão em um produto robusto e escalável. Sua expertise técnica e comprometimento foram cruciais para o sucesso do nosso projeto.',
    avatarUrl: 'https://picsum.photos/100/100',
    rating: 5,
    hint: "man portrait"
  },
  {
    id: 2,
    name: 'Julia Santos',
    title: 'Gerente de Produto na InovaTech',
    quote: 'Trabalhar com o Messias foi incrível. Ele é proativo, tem ótima comunicação e entrega um código de altíssima qualidade. Recomendo fortemente seus serviços para qualquer desafio de desenvolvimento.',
    avatarUrl: 'https://picsum.photos/101/101',
    rating: 5,
    hint: "woman portrait"
  },
  {
    id: 3,
    name: 'Carlos Lima',
    title: 'CTO da Soluções Digitais',
    quote: 'Poucos desenvolvedores têm a visão completa de full-stack que o Messias possui. Ele navega com facilidade entre o front-end e o back-end, sempre propondo as melhores soluções.',
    avatarUrl: 'https://picsum.photos/102/102',
    rating: 5,
    hint: "man smiling"
  },
];

const Rating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
      />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem meus clientes</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Feedbacks de parceiros e clientes com quem tive o prazer de colaborar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card p-6 rounded-xl border border-border/50 flex flex-col gap-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
                <div className="flex items-center gap-4">
                    <Image 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        data-ai-hint={testimonial.hint}
                        className="rounded-full"
                    />
                    <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                </div>
                <Rating rating={testimonial.rating} />
              <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
