"use client"

import { motion } from "framer-motion"
import { ArrowRight, BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary font-poppins leading-tight"
            >
              Unlock Predictive Intelligence for Your Business
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground font-inter max-w-[600px] mx-auto lg:mx-0"
            >
              Empowering small businesses with AI-driven insights and market strategies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/trial">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white font-medium px-8 shadow-sm w-full sm:w-auto"
                  >
                    Start Your Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/learn-more">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-muted text-text hover:border-accent hover:text-accent w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto order-first lg:order-last mb-8 lg:mb-0"
          >
            <div className="relative bg-white rounded-xl shadow-lg p-6 border border-muted overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/80 to-primary/80"></div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-accent"></div>
                  <h3 className="font-medium text-primary">Business Analytics Dashboard</h3>
                </div>
                <div className="flex gap-2">
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-primary"
                  >
                    <BarChart3 size={16} />
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-primary"
                  >
                    <LineChart size={16} />
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-primary"
                  >
                    <PieChart size={16} />
                  </motion.div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-secondary rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Revenue Growth</span>
                    <TrendingUp size={16} className="text-accent" />
                  </div>
                  <p className="text-2xl font-bold text-primary">+24.8%</p>
                  <div className="mt-2 h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-accent"
                    ></motion.div>
                  </div>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Customer Retention</span>
                    <TrendingUp size={16} className="text-accent" />
                  </div>
                  <p className="text-2xl font-bold text-primary">92.3%</p>
                  <div className="mt-2 h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "92%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-accent"
                    ></motion.div>
                  </div>
                </div>
              </div>

              <div className="relative h-[180px] bg-secondary rounded-lg p-4 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary">Predictive Market Trends</span>
                  <span className="text-xs text-muted-foreground">Last 30 days</span>
                </div>

                {/* Animated Chart Lines */}
                <svg
                  className="absolute inset-x-0 bottom-0 w-full h-[120px]"
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    d="M0,50 C50,30 100,60 150,40 C200,20 250,70 300,50 C350,30 400,50 400,50"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="2"
                    strokeDasharray="1"
                    strokeDashoffset="1"
                  />
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                    d="M0,70 C50,60 100,80 150,70 C200,60 250,90 300,70 C350,50 400,70 400,70"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeDasharray="1"
                    strokeDashoffset="1"
                    strokeOpacity="0.5"
                  />
                </svg>

                {/* Data Points */}
                <div className="absolute inset-x-0 bottom-0 h-[120px]">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute left-[20%] bottom-[40%] h-2 w-2 rounded-full bg-accent"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="absolute left-[40%] bottom-[60%] h-2 w-2 rounded-full bg-accent"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute left-[60%] bottom-[30%] h-2 w-2 rounded-full bg-accent"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="absolute left-[80%] bottom-[50%] h-2 w-2 rounded-full bg-accent"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-3 -right-3 h-24 w-24 rounded-full bg-accent/5 z-0"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-primary/5 z-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

