import { portfolioData } from '@/data/portfolio';
import { Award, Briefcase, Code, Rocket } from 'lucide-react';

const icons: { [key: string]: React.ReactNode } = {
    award: <Award size={24} />,
    briefcase: <Briefcase size={24} />,
    code: <Code size={24} />,
    rocket: <Rocket size={24} />,
};

const AboutCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
    <div className="bg-card p-4 rounded-lg border border-border flex items-start gap-4">
        <div className="text-primary mt-1">{icons[icon]}</div>
        <div>
            <h4 className="font-bold text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    </div>
);

export default function About() {
  const { title, paragraphs, subtitle, note, cards } = portfolioData.about;
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground mb-4">
                    {p}
                  </p>
                ))}
                 <h3 className="text-xl font-bold mb-4">{subtitle}</h3>
                 <p className='text-muted-foreground'>
                    {note}
                 </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cards.map((card) => (
                    <AboutCard 
                        key={card.id}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
