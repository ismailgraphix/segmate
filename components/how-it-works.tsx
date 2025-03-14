"use client"

import { motion } from "framer-motion"
import { Upload, BarChart2, Lightbulb } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Your Data",
      description: "Easily integrate your business data to SegMate.",
    },
    {
      number: "02",
      icon: BarChart2,
      title: "Analyze & Compare",
      description: "SegMate processes your data and compares it with industry insights.",
    },
    {
      number: "03",
      icon: Lightbulb,
      title: "Receive Actionable Insights",
      description: "Get clear, data-driven strategies to improve your business performance.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Simple Process
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-poppins mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[800px] text-muted-foreground text-lg"
          >
            Get started with SegMate in three simple steps and transform your business decision-making process.
          </motion.p>
        </div>

        {/* Desktop Process (Connected Steps) */}
        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-1 bg-muted -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="relative mb-8 bg-white rounded-full p-6 border border-muted shadow-sm"
                >
                  <div className="absolute -top-3 -right-3 bg-accent text-white text-xs font-bold rounded-full h-8 w-8 flex items-center justify-center">
                    {step.number}
                  </div>
                  <step.icon size={40} className="text-accent" />
                </motion.div>
                <h3 className="text-xl font-bold text-primary mb-2 font-poppins">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Process (Vertical Steps) */}
        <div className="lg:hidden">
          <div className="relative pl-12 border-l-2 border-muted ml-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 relative"
              >
                <div className="absolute -left-[calc(12px+1rem+1px)] top-0 bg-white rounded-full p-2 border-2 border-muted">
                  <div className="bg-accent rounded-full h-8 w-8 flex items-center justify-center">
                    <step.icon size={20} className="text-white" />
                  </div>
                </div>
                <div className="absolute -left-[calc(12px+2.5rem)] top-4 bg-accent text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 font-poppins">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

