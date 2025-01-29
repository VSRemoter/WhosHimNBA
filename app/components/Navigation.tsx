"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const tabs = [
  { id: "home", label: "Home", href: "/" },
  { id: "masbos", label: "MASBOS", href: "/masbos" },
  { id: "rankings", label: "Rankings", href: "/rankings" },
  { id: "top-10s", label: "Top 10s", href: "/top-10s" },
  { id: "glossary", label: "Glossary", href: "/glossary" },
  { id: "about", label: "About Me", href: "/about" },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-primary p-8">
      <ul className="flex justify-center space-x-6">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <Link
              href={tab.href}
              className={`px-8 py-4 rounded-full transition-colors duration-300 text-2xl font-semibold ${
                pathname === tab.href ? "bg-secondary text-white" : "text-white hover:bg-accent"
              }`}
            >
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

