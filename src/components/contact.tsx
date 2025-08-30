'use client'

import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

interface FormData {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsFormSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsFormSubmitting(false)
      setFormSuccess(true)
      
      setTimeout(() => {
        // setFormSuccess(false) // Keep success message
        setFormData({ name: '', email: '', message: '' })
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos Trabalhar Juntos</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Pronto para dar o próximo passo? Vamos conversar sobre como posso ajudar a tornar seu projeto uma realidade.
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
              <div className="space-y-6">
                <a 
                  href="mailto:contato@messias.dev"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="bg-secondary p-3 rounded-lg mr-4">
                    <Mail size={20} className='text-foreground' />
                  </div>
                  <div>
                    <span className='text-foreground font-semibold block'>Email</span>
                    <span>mvdevfullstack@gmail.com</span>
                  </div>
                </a>
                <a 
                  href="tel:+5588999382994"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="bg-secondary p-3 rounded-lg mr-4">
                    <Phone size={20} className='text-foreground' />
                  </div>
                  <div>
                    <span className='text-foreground font-semibold block'>Telefone</span>
                    <span>+55 (88) 99938-2994</span>
                  </div>
                </a>
                <div className="flex items-center text-muted-foreground">
                  <div className="bg-secondary p-3 rounded-lg mr-4">
                    <MapPin size={20} className='text-foreground' />
                  </div>
                  <div>
                    <span className='text-foreground font-semibold block'>Localização</span>
                    <span>Acaraú-CE, Brasil</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-secondary/50 rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-2">
                💡 Dica Rápida
              </h4>
              <p className="text-sm text-muted-foreground">
                Quanto mais detalhes você fornecer sobre seu projeto, melhor poderei 
                entender suas necessidades e oferecer a solução ideal.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background/50 rounded-xl p-6 border border-border">
            {formSuccess ? (
              <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                <p className="text-muted-foreground">
                  Obrigado por entrar em contato. Retornarei em breve!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Nome
                  </label>
                  <Input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleInputChange} required
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleInputChange} required
                    placeholder="seuemail@exemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Sua mensagem
                  </label>
                  <Textarea
                    id="message" name="message" value={formData.message}
                    onChange={handleInputChange} required rows={5}
                    placeholder="Conte-me como posso ajudar..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isFormSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-primary text-white font-medium"
                >
                  {isFormSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>Enviar Mensagem</>
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
