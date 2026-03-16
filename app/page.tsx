// app\page.tsx
"use client"

import { useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FloatingMenu from "../components/FloatingMenu"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Folder, User, Film, Mail, Instagram, Linkedin, Dribbble } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface Project {
  id: string
  name: string
  video: string
  detail: string
}

const projects: Project[] = [
  { id: "project-1", name: "Project Alpha", video: "https://drive.google.com/file/d/1ETXRyZ0FJVDN34zH7pk_2GusdWSPgfl4/preview", detail: "/projects/project-1" },
  { id: "project-2", name: "Project Beta", video: "https://drive.google.com/file/d/1OraVDaFV_x0rO6SPaSWVIN5g11VTj153/preview", detail: "/projects/project-2" },
  { id: "project-3", name: "Project Gamma", video: "https://drive.google.com/file/d/1JfFcXH6kS31WkwIejqyKbm4XusXEStxD/preview", detail: "/projects/project-3" },
  { id: "project-4", name: "Project Delta", video: "https://drive.google.com/file/d/1_EUALiKtAwDnb0kxDo1OcicQYWYbfTR2/preview", detail: "/projects/project-4" },
  { id: "project-5", name: "Project Epsilon", video: "https://drive.google.com/file/d/1TJnTNj34RMkM_NRFXsGaXR2yslsG1Us8/preview", detail: "/projects/project-5" },
  { id: "project-6", name: "Project Zeta", video: "https://drive.google.com/file/d/1kjZKHqG5ZXPBsfpT8q2nvn1V4gwQiAzW/preview", detail: "/projects/project-6" },
  { id: "project-7", name: "Project Eta", video: "https://drive.google.com/file/d/1HeM9MhDwuRBoAVZJURAFd8LKXe89KGxl/preview", detail: "/projects/project-7" },
  { id: "project-8", name: "Project Theta", video: "https://drive.google.com/file/d/1sBB1KWLHRiwE6TN2OMkunZX2Q1hK6wlm/preview", detail: "/projects/project-8" },
  { id: "project-9", name: "Project Iota", video: "https://drive.google.com/file/d/14twIVDKbN02ohaDLMEcp2ZmwzS_5HgLB/preview", detail: "/projects/project-9" },
  { id: "project-10", name: "Project Kappa", video: "https://drive.google.com/file/d/1DMF0TrOjeu-DRJ_jqnbRZdzfHqSIjCFZ/preview", detail: "/projects/project-10" },
  { id: "project-11", name: "Project Lambda", video: "https://drive.google.com/file/d/176Ovto6eeKj7wiqtymKe45wQJqCQmbUx/preview", detail: "/projects/project-11" },
  { id: "project-12", name: "Project Mu", video: "https://drive.google.com/file/d/1yy34EFaCjNqDekyaST4jmxZZwyPpBP3S/preview", detail: "/projects/project-12" },
  { id: "project-13", name: "Project Nu", video: "https://drive.google.com/file/d/1XOSexwyioVoU9gH3-emYE6-UNnvymBkg/preview", detail: "/projects/project-13" }
]

const navMenu = [
  { name: "Projects", link: "#project-1", icon: Folder },
  { name: "About", link: "#about", icon: User },
  { name: "Reel", link: "#reel", icon: Film },
  { name: "Contact", link: "#contact", icon: Mail },
]

const socialMenu = [
  { name: "Instagram", link: "https://instagram.com", icon: Instagram },
  { name: "LinkedIn", link: "https://linkedin.com", icon: Linkedin },
  { name: "Dribbble", link: "https://dribbble.com", icon: Dribbble },
]

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={containerRef} className="bg-black text-white min-h-screen flex">
      <aside className="hidden md:flex w-72 flex-col justify-between p-10 border-r border-zinc-900 fixed h-screen">
        <div>
          <h1 className="text-xl font-semibold mb-12">AICO Creative</h1>
          <nav className="flex flex-col space-y-3 text-sm text-zinc-300">
            <a href="#projects" className="hover:text-white transition-colors">projects</a>
            <a href="#about" className="hover:text-white transition-colors">about</a>
            <a href="#reel" className="hover:text-white transition-colors">reel</a>
            <a href="#contact" className="hover:text-white transition-colors">contact</a>
          </nav>
          <div className="mt-10">
            <p className="text-xs text-zinc-500 mb-4">PROJECTS</p>
            <ul className="space-y-2 text-sm text-zinc-400">
              {projects.map((p) => (
                <li key={p.id}>
                  <a href={`#${p.id}`} className="hover:text-white transition-colors">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-xs text-zinc-600">© 2026 AICO</div>
      </aside>

      <FloatingMenu navMenu={navMenu} socialMenu={socialMenu} />

      <div className="flex-1 md:ml-64 p-8 md:p-16">
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((p) => (
            <div key={p.id} id={p.id} className="reveal aspect-video rounded-xl overflow-hidden bg-zinc-900">
              <iframe src={p.video} className="w-full h-full" allow="autoplay" title={p.name} />
              <div className="p-4 text-sm text-zinc-300">
                <a href={p.detail} className="hover:text-white transition-colors">
                  {p.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}