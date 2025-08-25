import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="container py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground">Entre em Contato</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Tem um projeto em mente ou quer apenas dizer olá? Adoraria ouvir de você.
        </p>
      </div>
      <Card className="max-w-xl mx-auto mt-12 bg-secondary/50 border-border/50">
        <CardContent className="p-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Nome</label>
              <Input id="name" type="text" placeholder="Seu Nome" className="bg-background/70" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-muted-foreground">E-mail</label>
              <Input id="email" type="email" placeholder="seu.email@exemplo.com" className="bg-background/70" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Mensagem</label>
              <Textarea id="message" placeholder="Sua mensagem..." className="min-h-[150px] bg-background/70" />
            </div>
            <div className="text-center">
              <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform transform hover:scale-105">
                <Send className="mr-2 h-5 w-5" /> Enviar Mensagem
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
