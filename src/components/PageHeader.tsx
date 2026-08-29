"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  number: string;
  title: string;
  subtitle: string;
}

export default function PageHeader({ number, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">{number}</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-2 mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
