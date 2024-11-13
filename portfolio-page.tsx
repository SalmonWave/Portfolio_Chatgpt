'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Download, Github, Instagram, Linkedin, Mail, Send } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  const [currentProject, setCurrentProject] = useState(0)
  
  const projects = [
    {
      title: "Project 1",
      image: "/placeholder.svg?height=400&width=600",
      link: "#"
    },
    {
      title: "Project 2",
      image: "/placeholder.svg?height=400&width=600",
      link: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 border-b border-zinc-800">
        <Link href="/" className="text-cyan-400 text-xl font-mono">
          {'</>'} YourName
        </Link>
        <div className="flex items-center gap-6">
          <Link href="#home" className="hover:text-cyan-400">Home</Link>
          <Link href="#blogs" className="hover:text-cyan-400">Blogs</Link>
          <div className="flex items-center gap-4">
            <Link href="https://instagram.com" className="hover:text-cyan-400">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://discord.com" className="hover:text-cyan-400">
              <Mail className="w-5 h-5" />
            </Link>
            <Link href="https://github.com" className="hover:text-cyan-400">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold">
                Developer
              </h1>
              <div className="space-y-2">
                <p className="text-2xl">Hey</p>
                <p className="text-2xl">I'm <span className="text-cyan-400">YourName</span>,</p>
                <p className="text-2xl">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-zinc-400">
              I help businesses grow by crafting amazing web experiences. If you're
              looking for a developer that likes to get stuff done,
            </p>
            <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-zinc-800 p-4 text-center">
              <div className="text-4xl font-bold text-cyan-400">4</div>
              <div className="text-sm text-zinc-400">Programming Languages</div>
            </Card>
            <Card className="bg-zinc-800 p-4 text-center">
              <div className="text-4xl font-bold text-cyan-400">6</div>
              <div className="text-sm text-zinc-400">Development Tools</div>
            </Card>
            <Card className="bg-zinc-800 p-4 text-center">
              <div className="text-4xl font-bold text-cyan-400">8</div>
              <div className="text-sm text-zinc-400">Years of Experience</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-6 py-20 border-t border-zinc-800">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-cyan-400">{'</'}</span> Skills <span className="text-cyan-400">{'>'}</span>
        </h2>
        <div className="grid gap-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-zinc-800 p-6">
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-zinc-400">HTML, CSS, JS, REACT</p>
            </Card>
            <Card className="bg-zinc-800 p-6">
              <h3 className="text-xl font-bold mb-4">App Development</h3>
              <p className="text-zinc-400">iOS, Android</p>
            </Card>
          </div>
          <div className="flex justify-center gap-8">
            <div className="text-[#E44D26]">
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">HTML</div>
            </div>
            <div className="text-[#264DE4]">
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">CSS</div>
            </div>
            <div className="text-[#F7DF1E]">
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">JS</div>
            </div>
            <div className="text-[#61DAFB]">
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">React</div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="container mx-auto px-6 py-20 border-t border-zinc-800">
        <h2 className="text-4xl font-bold text-center mb-12">Works</h2>
        <div className="relative">
          <div className="flex items-center justify-center gap-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentProject((prev) => (prev > 0 ? prev - 1 : projects.length - 1))}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <div className="relative">
              <Image
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                width={600}
                height={400}
                className="rounded-lg"
              />
              <Link
                href={projects[currentProject].link}
                className="absolute bottom-4 right-4 bg-cyan-400 text-black px-4 py-2 rounded hover:bg-cyan-300"
              >
                View Website
              </Link>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentProject((prev) => (prev < projects.length - 1 ? prev + 1 : 0))}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20 border-t border-zinc-800">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm">Your name *</label>
              <Input
                id="name"
                className="bg-zinc-800 border-zinc-700"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm">Your email *</label>
              <Input
                id="email"
                type="email"
                className="bg-zinc-800 border-zinc-700"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm">Your message *</label>
              <Textarea
                id="message"
                className="bg-zinc-800 border-zinc-700"
                required
              />
            </div>
            <Button className="w-full bg-cyan-400 text-black hover:bg-cyan-300">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-sm text-zinc-400">
              © 2024 YourName. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm text-zinc-400 hover:text-cyan-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-zinc-400 hover:text-cyan-400">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}