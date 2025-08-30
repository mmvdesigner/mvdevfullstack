import Image from 'next/image';
import { Star } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

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
  const { title, description, testimonials } = portfolioData.testimonials;
  return (
    <section id="depoimentos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {description}
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
