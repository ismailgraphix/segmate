"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-last lg:order-first"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/5 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>

            <div className="relative bg-white rounded-2xl shadow-sm border border-muted overflow-hidden p-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/80 to-primary/80"></div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                width={600}
                height={500}
                alt="SegMate Dashboard"
                className="rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="inline-block py-1 px-4 rounded-full bg-accent/10 text-accent text-sm font-medium">
                About SegMate
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-poppins"
            >
              Unlock Growth with Predictive Intelligence
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              SegMate is a powerful SaaS platform designed to help small businesses unlock growth potential through
              automated predictive intelligence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground"
            >
              By analyzing your business data and enhancing insights with industry-wide intelligence from web scraping,
              SegMate provides actionable strategies that drive better decisions and optimize growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4"
            >
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-muted text-text hover:border-accent hover:text-accent"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

