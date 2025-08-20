"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getPortfolioImprovementSuggestions } from '@/ai/flows/portfolio-improvement-suggestions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Wand2, Loader2 } from 'lucide-react';

const formSchema = z.object({
  portfolioContent: z.string().min(50, {
    message: "Por favor, insira pelo menos 50 caracteres do conteúdo do seu portfólio.",
  }),
  desiredStyle: z.string().min(3, {
    message: "Por favor, descreva o estilo desejado.",
  }),
});

export default function AiOptimizer() {
  const [suggestions, setSuggestions] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      portfolioContent: '',
      desiredStyle: 'minimalista e profissional',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestions('');
    try {
      const result = await getPortfolioImprovementSuggestions(values);
      setSuggestions(result.suggestions);
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro",
        description: "Não foi possível gerar sugestões. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-optimizer" className="container py-20 md:py-24 bg-muted/50">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Otimizador de Portfólio com IA</h2>
          <p className="mt-3 text-muted-foreground">
            Use o poder da IA para refinar seu portfólio. Cole o conteúdo atual, descreva o estilo que você deseja e receba sugestões para melhorar sua apresentação.
          </p>
          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle>Gerador de Sugestões</CardTitle>
              <CardDescription>Preencha os campos abaixo para otimizar seu texto.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="portfolioContent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Conteúdo do Portfólio</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ex: 'Sou um desenvolvedor apaixonado por tecnologia...'"
                            className="min-h-[150px] bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="desiredStyle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estilo Desejado</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: corporativo, criativo, minimalista" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Wand2 className="mr-2 h-4 w-4" />
                    )}
                    Gerar Sugestões
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="h-full">
          <Card className="h-full flex flex-col min-h-[500px] shadow-lg">
            <CardHeader>
              <CardTitle>Sugestões da IA</CardTitle>
              <CardDescription>Aqui aparecerão as sugestões para aprimorar seu texto.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center p-6">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center text-center">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="mt-4 text-muted-foreground">Analisando e gerando sugestões...</p>
                </div>
              ) : (
                <p className="text-muted-foreground whitespace-pre-wrap text-sm md:text-base">
                  {suggestions || "Aguardando para gerar sugestões..."}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
