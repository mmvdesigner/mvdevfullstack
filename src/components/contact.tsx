import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="container py-20 md:py-24">
      <div className="max-w-xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight">Entre em Contato</CardTitle>
            <CardDescription className="mt-2">Tem alguma pergunta ou quer trabalhar junto? Me envie uma mensagem!</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Nome</label>
                <Input id="name" type="text" placeholder="Seu Nome" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">E-mail</label>
                <Input id="email" type="email" placeholder="Seu E-mail" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Mensagem</label>
                <Textarea id="message" placeholder="Sua Mensagem" className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
