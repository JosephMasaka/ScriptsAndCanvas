"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutCta() {
  return (
    <section className="py-32 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s Build
            <br />
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
            Whether you&apos;re a startup or an established business, we&apos;d
            love to hear about your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent hover:bg-accent-light text-white rounded-full text-sm font-medium transition-colors duration-200"
            >
              Start a Conversation
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 border border-card-border hover:border-muted text-foreground rounded-full text-sm font-medium transition-colors duration-200"
            >
              See Our Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
