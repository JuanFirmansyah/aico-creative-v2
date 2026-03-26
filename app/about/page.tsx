// app/about/page.tsx
"use client"

import { useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"
import FloatingMenu from "../../components/FloatingMenu"
import { Folder, User, Film, Mail, Instagram, Linkedin, Dribbble, Eye, Camera, Sparkles, Heart, Users, Award } from "lucide-react"

const navMenu = [
  { name: "Projects", link: "/", icon: Folder },
  { name: "About", link: "/about", icon: User },
  { name: "Who We Worked With", link: "/clients", icon: Film },
  { name: "Contact", link: "/contact", icon: Mail },
]

const socialMenu = [
  { name: "Instagram", link: "https://instagram.com/aicocreative", icon: Instagram },
  { name: "LinkedIn", link: "https://linkedin.com/company/aicocreative", icon: Linkedin },
  { name: "Dribbble", link: "https://dribbble.com/aicocreative", icon: Dribbble },
]

// Team members with Indonesian names
const teamMembers = [
  {
    name: "Alex Chandra",
    role: "Creative Director / Cinematographer",
    photo: "/team/team-1.jpg",
    icon: Film
  },
  {
    name: "Maya Putri",
    role: "Lead Photographer",
    photo: "/team/team-2.jpg",
    icon: Camera
  },
  {
    name: "James Wijaya",
    role: "Video Editor / Colorist",
    photo: "/team/team-3.jpg",
    icon: Sparkles
  },
  {
    name: "Sari Dewi",
    role: "Production Manager",
    photo: "/team/team-4.jpg",
    icon: Users
  },
]

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 })
    
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div ref={containerRef} className="bg-black min-h-screen">
      <FloatingMenu navMenu={navMenu} socialMenu={socialMenu} />
      
      <div className="p-8 md:p-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Who We Are?
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
              We tell stories through visuals, turning every event into a timeless experience.
            </p>
          </div>

          {/* Main Description */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-zinc-300">
                <span className="text-white font-semibold">aicocreative</span> is a production house based in Indonesia, 
                specializing in event videography and photography.
              </p>
              <p className="text-lg leading-relaxed text-zinc-300">
                We tell stories through visuals, turning every event into a timeless experience.
              </p>
              <p className="text-lg leading-relaxed text-zinc-300">
                A team of passionate filmmakers and photographers dedicated to bringing 
                each moment to life with cinematic precision.
              </p>
            </div>
            
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-zinc-400" />
                <h3 className="text-2xl font-semibold text-white">Our Philosophy</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Every frame tells a story. We believe in capturing not just moments, 
                but emotions that last forever. Through the lens, we find the extraordinary 
                in the ordinary, creating visual narratives that resonate deeply.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              The Creative Team
            </h2>
            <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
              Passionate storytellers behind every frame
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => {
                const IconComponent = member.icon
                return (
                  <div 
                    key={index}
                    className="group bg-zinc-900/30 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:scale-105"
                  >
                    <div className="aspect-square bg-zinc-800 relative flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-white mb-1">{member.name}</h3>
                      <p className="text-sm text-zinc-500">{member.role}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-800 group hover:border-zinc-600 transition-all">
              <Film className="w-10 h-10 text-zinc-400 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-semibold mb-2 text-white">Cinematic Vision</h3>
              <p className="text-zinc-400 text-sm">
                Every shot composed with artistic intent and technical excellence.
              </p>
            </div>
            
            <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-800 group hover:border-zinc-600 transition-all">
              <Heart className="w-10 h-10 text-zinc-400 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-semibold mb-2 text-white">Authentic Moments</h3>
              <p className="text-zinc-400 text-sm">
                Capturing genuine emotions that tell your unique story.
              </p>
            </div>
            
            <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-800 group hover:border-zinc-600 transition-all">
              <Award className="w-10 h-10 text-zinc-400 mb-4 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-semibold mb-2 text-white">Timeless Quality</h3>
              <p className="text-zinc-400 text-sm">
                Creating visuals that remain beautiful for years to come.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors group"
            >
              <span>Work With Us</span>
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}