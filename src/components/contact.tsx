'use client'

import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useToast } from '@/hooks/use-toast';
import { portfolioData } from '@/data/portfolio';

export default function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const { title, description, form: formData, info, tip } = portfolioData.contact;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitting(true);

    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS environment variables not configured");
      toast({
        title: "Erro de Configuração",
        description: "O serviço de e-mail não está configurado corretamente. Por favor, entre em contato com o administrador.",
        variant: "destructive",
      });
      setIsFormSubmitting(false);
      return;
    }

    if(formRef.current) {
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            formRef.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setFormSuccess(true);
            setIsFormSubmitting(false);
            if (formRef.current) {
                formRef.current.reset();
            }
        }, (error) => {
            console.log('FAILED...', error.text);
            toast({
                title: "Falha no Envio",
                description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
                variant: "destructive",
            });
            setIsFormSubmitting(false);
        });
    }
  };

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">{info.title}</h3>
              <div className="space-y-6">
                <a 
                  href={`mailto:${info.email.address}`}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="bg-secondary p-3 rounded-lg mr-4">
                    <Mail size={20} className='text-foreground' />
                  </div>
                  <div>
                    <span className='text-foreground font-semibold block'>{info.email.label}</span>
                    <span>{info.email.address}</span>
                  </div>
                </a>
                <a 
                  href={`tel:${info.phone.number.replace(/\s/g, '')}`}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="bg-secondary p-3 rounded-lg mr-4">
                    <Phone size={20} className='text-foreground' />
                  </div>
                  <div>
                    <span className='text-foreground font-semibold block'>{info.phone.label}</span>
                    <span>{info.phone.number}</span>
                  </div>
                </a>
                <div className="flex items-center text-muted-foreground">
                  <div className="bg-secondary p-3 rounded-lg mr-4">
                    <MapPin size={20} className='text-foreground' />
                  </div>
                  <div>
                    <span className='text-foreground font-semibold block'>{info.location.label}</span>
                    <span>{info.location.value}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-2">
                💡 {tip.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {tip.description}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-6 border border-border">
            {formSuccess ? (
              <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">{formData.success.title}</h3>
                <p className="text-muted-foreground">
                  {formData.success.message}
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                {formData.fields.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-muted-foreground mb-2">
                      {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                      <Textarea
                        id={field.name}
                        name={field.name}
                        required
                        rows={5}
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <Input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        required
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}
                <Button
                  type="submit"
                  disabled={isFormSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-primary text-white font-medium"
                >
                  {isFormSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>{formData.submitButtonText}</>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
