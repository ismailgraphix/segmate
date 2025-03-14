"use client"

import { motion } from "framer-motion"
import { Check, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      description: "Perfect for exploring the platform",
      price: "$0",
      period: "forever",
      features: [
        { name: "Basic data analysis", included: true },
        { name: "Limited predictive insights", included: true },
        { name: "Single user account", included: true },
        { name: "Community support", included: true },
        { name: "Market intelligence", included: false },
        { name: "Advanced analytics", included: false },
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
    },
    {
      name: "Basic",
      description: "For small businesses getting started",
      price: "$29",
      period: "per month",
      features: [
        { name: "Advanced data analysis", included: true },
        { name: "Full predictive insights", included: true },
        { name: "Up to 3 user accounts", included: true },
        { name: "Email support", included: true },
        { name: "Basic market intelligence", included: true },
        { name: "Advanced analytics", included: false },
      ],
      popular: true,
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
    },
    {
      name: "Pro",
      description: "For growing businesses with more needs",
      price: "$79",
      period: "per month",
      features: [
        { name: "Advanced data analysis", included: true },
        { name: "Full predictive insights", included: true },
        { name: "Up to 10 user accounts", included: true },
        { name: "Priority support", included: true },
        { name: "Full market intelligence", included: true },
        { name: "Advanced analytics", included: true },
      ],
      popular: false,
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const,
    },
    {
      name: "Enterprise",
      description: "Custom solutions for larger organizations",
      price: "Custom",
      period: "pricing",
      features: [
        { name: "Custom data analysis", included: true },
        { name: "Custom predictive models", included: true },
        { name: "Unlimited user accounts", included: true },
        { name: "Dedicated support", included: true },
        { name: "Full market intelligence", included: true },
        { name: "Custom analytics", included: true },
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
    },
  ]

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
              Pricing
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-poppins mb-4"
          >
            Choose the Right Plan for Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[800px] text-muted-foreground text-lg"
          >
            Flexible pricing options designed to scale with your business needs. All plans include a 14-day free trial.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className={`relative flex flex-col p-6 bg-white rounded-xl shadow-sm border ${
                plan.popular ? "border-accent" : "border-muted"
              } overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="text-xs font-medium bg-accent text-white py-1 px-3 rounded-bl-lg">Most Popular</div>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-xl font-bold text-primary mb-1 font-poppins">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-5">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="ml-1 text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-accent shrink-0 mr-2" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground shrink-0 mr-2" />
                    )}
                    <span className={feature.included ? "text-text" : "text-muted-foreground"}>{feature.name}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link href={plan.name === "Enterprise" ? "/contact" : "/signup"}>
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className={`w-full ${
                      plan.popular
                        ? "bg-accent hover:bg-accent/90 text-white"
                        : "border-muted text-text hover:border-accent hover:text-accent"
                    }`}
                  >
                    {plan.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Need a custom solution?{" "}
            <Link href="/contact" className="text-accent font-medium hover:underline">
              Contact our sales team
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

