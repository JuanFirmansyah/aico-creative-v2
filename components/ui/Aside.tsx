// components/ui/Aside.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"

interface Project {
  id: string
  name: string
}

const projects: Project[] = [
  { id: "project-1", name: "Project Alpha" },
  { id: "project-2", name: "Project Beta" },
  { id: "project-3", name: "Project Gamma" },
  { id: "project-4", name: "Project Delta" },
  { id: "project-5", name: "Project Epsilon" },
  { id: "project-6", name: "Project Zeta" },
  { id: "project-7", name: "Project Eta" },
  { id: "project-8", name: "Project Theta" },
  { id: "project-9", name: "Project Iota" },
  { id: "project-10", name: "Project Kappa" },
  { id: "project-11", name: "Project Lambda" },
  { id: "project-12", name: "Project Mu" },
  { id: "project-13", name: "Project Nu" },
]

const navItems = [
  { name: "Projects", href: "/" },
  { name: "About", href: "/about" },
  { name: "Who We Worked With", href: "/clients" },
  { name: "Contact", href: "/contact" },
]

export default function Aside() {
  const pathname = usePathname()
  const [imgError, setImgError] = useState(false)

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <aside className="hidden md:flex w-72 flex-col justify-between p-10 border-r border-zinc-900 fixed h-screen bg-black">
      <div>
        {/* Logo dengan Next.js Image */}
        <div className="mb-12 flex justify-center">
          <Link href="/" className="block hover:opacity-80 transition-opacity">
            {!imgError ? (
              <Image
                src="/logo-aico.png"
                alt="AICO Creative Logo"
                width={120}
                height={48}
                className="object-contain"
                priority
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="text-xl font-semibold text-white">
                AICO Creative
              </span>
            )}
          </Link>
        </div>
        
        <nav className="flex flex-col space-y-3 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors ${
                isActive(item.href)
                  ? "text-white font-medium"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="mt-10">
          <p className="text-xs text-zinc-500 mb-4">PROJECTS</p>
          <ul className="space-y-2 text-sm">
            {projects.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/#${p.id}`}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-xs text-zinc-600">© 2026 AICO</div>
    </aside>
  )
}