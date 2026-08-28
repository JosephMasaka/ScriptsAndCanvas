import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Web Design", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "SaaS Development", href: "#services" },
  ],
  Products: [
    { label: "LipaPoint POS", href: "https://lipapoint.tunzaassets.co.ke", external: true },
    { label: "TunzaAssets", href: "https://tunzaassets.co.ke", external: true },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <span className="text-lg font-bold tracking-tight">
                Scripts<span className="text-accent-light">&</span>Canvas
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Crafting digital experiences through clean code and thoughtful
              design. Web design, development, and SaaS solutions.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                      {"external" in link && link.external && (
                        <span className="ml-1 text-xs">&#8599;</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Scripts&Canvas. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
