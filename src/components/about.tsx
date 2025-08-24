import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="container py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full max-w-md mx-auto">
           <Image 
            src="https://placehold.co/500x500.png"
            alt="John Doe"
            width={500} 
            height={500}
            className="rounded-xl shadow-lg object-cover"
            data-ai-hint="man working on computer"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Sobre Mim</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Sou um desenvolvedor Full-Stack apaixonado por construir aplicações web completas, desde o back-end robusto até o front-end intuitivo. Com experiência em todo o ciclo de vida do desenvolvimento, busco criar soluções eficientes, escaláveis e com alto impacto.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Meu foco está em combinar tecnologias modernas para entregar produtos de alta qualidade, sempre aprendendo e me adaptando às novas tendências do mercado.
          </p>
        </div>
      </div>
    </section>
  );
}
