'use client'

import React, { useState } from 'react'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

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
      
      // Reset form after success
      setTimeout(() => {
        // setFormSuccess(false) // Keep success message
        setFormData({ name: '', email: '', message: '' })
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-800/50 rounded-xl p-6 md:p-8 border border-gray-800">
            {formSuccess ? (
              <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isFormSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isFormSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:contact@example.com"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <div className="bg-gray-800 p-3 rounded-lg mr-4 group-hover:bg-blue-600/20 transition-colors">
                  <Mail size={20} />
                </div>
                <span>contact@example.com</span>
              </a>
              
              <a 
                href="https://github.com/alexjohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <div className="bg-gray-800 p-3 rounded-lg mr-4 group-hover:bg-blue-600/20 transition-colors">
                  <Github size={20} />
                </div>
                <span>github.com/alexjohnson</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/alexjohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <div className="bg-gray-800 p-3 rounded-lg mr-4 group-hover:bg-blue-600/20 transition-colors">
                  <Linkedin size={20} />
                </div>
                <span>linkedin.com/in/alexjohnson</span>
              </a>
              
              <a 
                href="https://twitter.com/alexjohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <div className="bg-gray-800 p-3 rounded-lg mr-4 group-hover:bg-blue-600/20 transition-colors">
                  <Twitter size={20} />
                </div>
                <span>twitter.com/alexjohnson</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
