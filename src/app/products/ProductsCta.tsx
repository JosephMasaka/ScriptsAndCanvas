"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductsCta() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Need a Custom
            <br />
            <span className="gradient-text">SaaS Product?</span>
          </h2>
          <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
            We build SaaS products from the ground up. If you have an idea for a
            platform, let&apos;s make it happen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent hover:bg-accent-light text-white rounded-full text-sm font-medium transition-colors duration-200"
            >
              Discuss Your Idea
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-card-border hover:border-muted text-foreground rounded-full text-sm font-medium transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
