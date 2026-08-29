"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setFormState({ name: "", email: "", message: "", service: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border border-card-border rounded-xl text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border border-card-border rounded-xl text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-muted mb-2"
              >
                Service Interested In
              </label>
              <select
                id="service"
                value={formState.service}
                onChange={(e) =>
                  setFormState({ ...formState, service: e.target.value })
                }
                className="w-full px-4 py-3 bg-background border border-card-border rounded-xl text-foreground focus:outline-none focus:border-accent transition-colors"
              >
                <option value="">Select a service</option>
                <option value="web-design">Web Design</option>
                <option value="web-development">Web Development</option>
                <option value="saas-development">SaaS Development</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-background border border-card-border rounded-xl text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-light disabled:opacity-50 text-white rounded-full text-sm font-medium transition-colors duration-200"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "Message Sent!"
                  : "Send Message"}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted mb-4">
                Email
              </h3>
              <a
                href="mailto:hello@scriptsandcanvas.com"
                className="text-lg hover:text-accent-light transition-colors"
              >
                hello@scriptsandcanvas.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", href: "#" },
                  { name: "Twitter / X", href: "#" },
                  { name: "LinkedIn", href: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="px-4 py-2 border border-card-border rounded-full text-sm text-muted hover:text-foreground hover:border-accent/30 transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-sm text-muted">
                We typically respond within 24 hours. For urgent inquiries,
                reach out via email directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
