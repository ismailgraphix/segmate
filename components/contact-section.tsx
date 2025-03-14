"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to your backend
    console.log(formState)
    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message (in a real implementation)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Contact Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-poppins mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[600px] text-muted-foreground text-lg"
          >
            Have questions about SegMate? We're here to help. Reach out to our team through any of the channels below.
          </motion.p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-primary mb-4 font-poppins">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-accent mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <a href="mailto:info@segmate.com" className="text-muted-foreground hover:text-accent">
                      info@segmate.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-accent mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-primary">Phone</p>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-primary">Address</p>
                    <address className="text-muted-foreground not-italic">
                      123 Innovation Drive
                      <br />
                      Tech City, TC 10101
                      <br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4 font-poppins">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="h-10 w-10 rounded-full bg-white border border-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                >
                  <Twitter size={18} />
                  <span className="sr-only">Twitter</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="h-10 w-10 rounded-full bg-white border border-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                >
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="h-10 w-10 rounded-full bg-white border border-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                >
                  <Facebook size={18} />
                  <span className="sr-only">Facebook</span>
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="h-10 w-10 rounded-full bg-white border border-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                >
                  <Instagram size={18} />
                  <span className="sr-only">Instagram</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border border-muted">
              <h3 className="text-xl font-bold text-primary mb-4 font-poppins">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

