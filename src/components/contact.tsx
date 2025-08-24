import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="container py-20 md:py-24 bg-muted/20">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg border-border bg-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Entre em Contato</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground">Vamos construir algo incrível juntos?</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Nome</label>
                  <Input id="name" type="text" placeholder="Seu Nome" className="bg-input text-foreground" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">E-mail</label>
                  <Input id="email" type="email" placeholder="Seu E-mail" className="bg-input text-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Assunto</label>
                <Input id="subject" type="text" placeholder="Assunto da Mensagem" className="bg-input text-foreground" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Mensagem</label>
                <Textarea id="message" placeholder="Sua Mensagem" className="min-h-[150px] bg-input text-foreground" />
              </div>
              <div className="text-center">
                <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform transform hover:scale-105">
                  <Send className="mr-2 h-5 w-5" /> Enviar Mensagem
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
