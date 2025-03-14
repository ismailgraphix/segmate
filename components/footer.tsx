"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Pricing", href: "/pricing" },
        { name: "Case Studies", href: "/case-studies" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Support", href: "/support" },
        { name: "API", href: "/api" },
        { name: "Community", href: "/community" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
      ],
    },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight font-poppins">SEGMATE</span>
            </Link>
            <p className="text-primary-foreground/80 mb-4 max-w-xs">
              Empowering small businesses with AI-driven insights and market strategies.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </motion.a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-white mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-primary-foreground/80 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">&copy; {currentYear} SegMate. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm text-primary-foreground/80">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

