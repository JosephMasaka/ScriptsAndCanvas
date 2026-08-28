"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const products = [
  {
    name: "LipaPoint",
    tagline: "Point of Sale System",
    description:
      "A modern, cloud-based POS system designed for businesses of all sizes. Manage sales, inventory, and customer data — all from one intuitive dashboard. Built for speed, reliability, and ease of use.",
    url: "https://lipapoint.tunzaassets.co.ke",
    features: ["Sales Management", "Inventory Tracking", "Customer Analytics", "Receipt Generation"],
    gradient: "from-violet-500/20 to-purple-500/20",
    accentColor: "text-violet-400",
  },
  {
    name: "TunzaAssets",
    tagline: "Asset Management Platform",
    description:
      "A comprehensive asset management platform that helps organizations track, manage, and optimize their assets throughout their lifecycle. From procurement to disposal, stay in control.",
    url: "https://tunzaassets.co.ke",
    features: ["Asset Tracking", "Lifecycle Management", "Reporting & Analytics", "Multi-location Support"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    accentColor: "text-blue-400",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          title="Our Products"
          subtitle="SaaS products we've built and launched — solving real problems for real businesses."
        />

        <div className="space-y-12">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className={`text-sm font-mono tracking-widest ${product.accentColor} uppercase mb-2`}>
                    {product.tagline}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {product.name}
                  </h3>
                  <p className="text-muted leading-relaxed mb-8">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <svg
                          className={`w-4 h-4 ${product.accentColor} flex-shrink-0`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-muted">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-light transition-colors group/link"
                  >
                    Visit {product.name}
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

                <div
                  className={`relative bg-gradient-to-br ${product.gradient} p-8 md:p-12 flex items-center justify-center min-h-[300px]`}
                >
                  <div className="relative w-full max-w-md">
                    <div className="glass-card p-6 transform group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                        <div className="w-3 h-3 rounded-full bg-green-500/60" />
                        <div className="flex-1 mx-4 h-6 rounded-md bg-background/50 flex items-center px-3">
                          <span className="text-xs text-muted/60 truncate">
                            {product.url.replace("https://", "")}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-background/30 rounded w-3/4" />
                        <div className="h-3 bg-background/20 rounded w-full" />
                        <div className="h-3 bg-background/20 rounded w-5/6" />
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          <div className="h-16 bg-background/20 rounded-lg" />
                          <div className="h-16 bg-background/20 rounded-lg" />
                          <div className="h-16 bg-background/20 rounded-lg" />
                        </div>
                        <div className="h-24 bg-background/10 rounded-lg mt-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted text-sm">
            More products in development — stay tuned.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
