"use client"

import { motion } from "framer-motion"
import { BarChart, Brain, Globe, LayoutDashboard, Scale, ArrowRight } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: BarChart,
      title: "Data Analysis",
      description:
        "Transform your business data into meaningful insights that drive strategic decisions and uncover hidden opportunities.",
      delay: 0.1,
    },
    {
      icon: Brain,
      title: "Predictive Intelligence",
      description:
        "AI-powered predictions tailored to your business needs, helping you anticipate market changes and customer behaviors.",
      delay: 0.2,
    },
    {
      icon: Globe,
      title: "Market Intelligence",
      description:
        "Compare your business performance with industry trends and gain competitive advantage through benchmarking.",
      delay: 0.3,
    },
    {
      icon: LayoutDashboard,
      title: "User-Friendly Interface",
      description: "Easy-to-use platform with powerful features designed for business owners, not data scientists.",
      delay: 0.4,
    },
    {
      icon: Scale,
      title: "Scalability",
      description:
        "Suitable for businesses of all sizes, with solutions that grow alongside your company's evolving needs.",
      delay: 0.5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Features
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-poppins mb-4"
          >
            Powerful Tools for Business Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[800px] text-muted-foreground text-lg"
          >
            Discover how SegMate's comprehensive feature set can transform your business operations and drive
            sustainable growth.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className="bg-white rounded-xl p-6 shadow-sm border border-muted transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-xl transition-all duration-300" />

              {/* Icon container with animation */}
              <div className="relative z-10 mb-4">
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center text-accent group-hover:bg-accent/10 transition-all duration-300 overflow-hidden">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  >
                    <feature.icon size={24} />
                  </motion.div>
                </div>

                {/* Animated dot indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Content with animations */}
              <h3 className="text-xl font-bold text-primary mb-2 font-poppins relative z-10 group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-muted-foreground relative z-10 group-hover:text-text transition-colors duration-300">
                {feature.description}
              </p>

              {/* Reveal arrow on hover */}
              <div className="mt-4 flex items-center text-accent overflow-hidden h-6">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-sm font-medium"
                >
                  Learn more
                  <motion.div initial={{ x: -5 }} whileHover={{ x: 3 }} className="ml-1">
                    <ArrowRight size={14} />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

