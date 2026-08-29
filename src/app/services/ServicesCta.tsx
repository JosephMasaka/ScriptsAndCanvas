"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and target audience. This informs every decision moving forward.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We create wireframes and high-fidelity designs, iterating with your feedback until the vision is crystal clear.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Clean, performant code brought to life with modern frameworks. We build with scalability and maintainability in mind.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We deploy your project, monitor performance, and provide ongoing support to keep things running smoothly.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Vercel",
  "AWS",
  "Figma",
  "Framer Motion",
  "Stripe",
];

export default function ServicesCta() {
  return (
    <>
      {/* Process */}
      <section className="py-32 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="section-number">Our Process</span>
            <h2 className="section-title mt-2">How We Work</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8"
              >
                <span className="text-3xl font-bold gradient-text">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="section-number">Technologies</span>
            <h2 className="section-title mt-2">Our Tech Stack</h2>
            <p className="section-subtitle mt-4">
              We use modern, battle-tested technologies to deliver reliable
              solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-3 glass-card text-sm font-medium hover:border-accent/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Have a project in mind?
            </h2>
            <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
              Let&apos;s talk about how we can help bring your idea to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent hover:bg-accent-light text-white rounded-full text-sm font-medium transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
