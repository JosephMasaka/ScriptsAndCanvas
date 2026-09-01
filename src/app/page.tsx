"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/Hero";

const services = [
  {
    icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.732-3.558",
    title: "Web Design",
    description:
      "Visually stunning, user-centered designs that capture your brand's essence.",
  },
  {
    icon: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
    title: "Web Development",
    description:
      "Performant, scalable web applications with modern technologies.",
  },
  {
    icon: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
    title: "SaaS Development",
    description:
      "End-to-end SaaS product development — from ideation to deployment.",
  },
  {
    icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
    title: "AI & Agentic Workflows",
    description:
      "Intelligent automation powered by AI agents and LLM integrations.",
  },
];

const products = [
  {
    name: "LipaPoint",
    tagline: "Point of Sale System",
    description:
      "A modern, cloud-based POS system for businesses of all sizes.",
    gradient: "from-violet-500/20 to-purple-500/20",
    accentColor: "text-violet-400",
  },
  {
    name: "TunzaAssets",
    tagline: "Asset Management Platform",
    description:
      "Track, manage, and optimize your assets throughout their lifecycle.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    accentColor: "text-blue-400",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Preview */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="section-number">01</span>
            <h2 className="section-title mt-2">What We Do</h2>
            <p className="section-subtitle mt-4">
              Code, performance, and design working together. Without
              compromise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 group hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors group"
            >
              View all services
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-32 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="section-number">02</span>
            <h2 className="section-title mt-2">Our Products</h2>
            <p className="section-subtitle mt-4">
              SaaS products we&apos;ve built and launched — solving real problems
              for real businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card overflow-hidden group hover:border-accent/30 transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-br ${product.gradient} p-8 min-h-[140px] flex items-end`}
                >
                  <span
                    className={`text-xs font-mono tracking-widest ${product.accentColor} uppercase`}
                  >
                    {product.tagline}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-light transition-colors group/link"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to Build
              <br />
              <span className="gradient-text">Something Great?</span>
            </h2>
            <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
              Whether you need a website, a web app, or a full SaaS platform —
              we&apos;re here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent hover:bg-accent-light text-white rounded-full text-sm font-medium transition-colors duration-200"
              >
                Start a Project
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border border-card-border hover:border-muted text-foreground rounded-full text-sm font-medium transition-colors duration-200"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
