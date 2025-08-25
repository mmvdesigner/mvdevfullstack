import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre" className="container py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative w-full max-w-md mx-auto">
           <Image 
            src="https://placehold.co/500x500.png"
            alt="Dra. Ana Lúcia"
            width={500} 
            height={500}
            className="rounded-xl shadow-lg object-cover"
            data-ai-hint="woman professional portrait"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-headline">Sobre mim</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Sou a Dra. Ana Lúcia, psicóloga dedicada à Terapia Cognitivo-Comportamental (TCC). Minha missão é oferecer um espaço seguro e acolhedor onde você possa explorar seus pensamentos, emoções e comportamentos para alcançar uma vida mais equilibrada e satisfatória.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Com uma abordagem colaborativa e focada em resultados, trabalho junto com meus pacientes para desenvolver estratégias práticas e eficazes para lidar com ansiedade, depressão, estresse e outras questões emocionais.
          </p>
        </div>
      </div>
    </section>
  );
}
