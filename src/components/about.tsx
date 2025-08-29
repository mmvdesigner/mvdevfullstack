import { Award, Briefcase, Code, Rocket } from 'lucide-react';

const AboutCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-card p-4 rounded-lg border border-border flex items-start gap-4">
        <div className="text-primary mt-1">{icon}</div>
        <div>
            <h4 className="font-bold text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    </div>
);

export default function About() {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
                <p className="text-muted-foreground mb-4">
                    Sou um desenvolvedor full-stack curioso por natureza e com uma paixão por criar soluções que resolvem problemas reais. Minha jornada na programação começou com o desejo de transformar ideias em realidade digital, e desde então, tenho me aprofundado em tecnologias que me permitem construir aplicações robustas, escaláveis e eficientes.
                </p>
                <p className="text-muted-foreground mb-6">
                    Acredito que a colaboração e a comunicação são a chave para o sucesso de qualquer projeto. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer como profissional.
                </p>
                 <h3 className="text-xl font-bold mb-4">Por que me escolher?</h3>
                 <p className='text-muted-foreground'>
                    Estou ciente de que sou novo no mercado de trabalho, mas a minha experiência na faculdade e em projetos freelancers me deram a base para evoluir para um dev júnior.
                 </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AboutCard 
                    icon={<Award size={24} />}
                    title="Carreira em ascensão"
                    description="Em busca da primeira oportunidade para decolar na carreira dev."
                />
                <AboutCard 
                    icon={<Briefcase size={24} />}
                    title="Experiência sólida"
                    description="Experiência em projetos freelancer e acadêmicos."
                />
                <AboutCard 
                    icon={<Code size={24} />}
                    title="Código limpo"
                    description="Código semântico, reutilizável e de fácil manutenção."
                />
                <AboutCard 
                    icon={<Rocket size={24} />}
                    title="Colaboração positiva"
                    description="Aberto a críticas, sugestões e novas ideias."
                />
            </div>
        </div>
      </div>
    </section>
  );
}
