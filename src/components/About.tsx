"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Clean Code",
    description:
      "We write maintainable, well-structured code that stands the test of time. No shortcuts, no technical debt.",
  },
  {
    title: "User First",
    description:
      "Every decision starts with the end user. We design experiences that are intuitive, fast, and delightful.",
  },
  {
    title: "Ship & Iterate",
    description:
      "We believe in getting products to market quickly, then refining based on real feedback and data.",
  },
];

export default function About() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-muted leading-relaxed"
            >
              <p>
                Scripts&Canvas was founded with a clear mission: to help
                businesses succeed in the digital world through exceptional web
                design, development, and SaaS products.
              </p>
              <p>
                We combine technical expertise with creative vision to deliver
                solutions that not only look great but perform flawlessly. From
                custom websites to full-scale SaaS platforms, we handle the
                entire development lifecycle.
              </p>
              <p>
                Our products — LipaPoint and TunzaAssets — are testaments to our
                approach: solving real-world problems with elegant,
                user-friendly software.
              </p>
            </motion.div>
          </div>

          <div className="space-y-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 hover:border-accent/30 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
              title: "Reliable & Secure",
              desc: "Built with security best practices and deployed on modern cloud infrastructure.",
            },
            {
              icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
              title: "Fast & Performant",
              desc: "Optimized for speed with server-side rendering, edge caching, and efficient code.",
            },
            {
              icon: "M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m-2.091 17.618-.342-1.453m5.29-13.408-.344-1.453",
              title: "Scalable Solutions",
              desc: "Architecture designed to grow with your business, from MVP to enterprise.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
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
                    d={item.icon}
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
