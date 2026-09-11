import Navbar from "@/components/home/Navbar"
import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import Projects from "@/components/home/Projects"
import Stats from "@/components/home/Stats"
import Clients from "@/components/home/Clients"
import WhyUs from "@/components/home/WhyUs"
import CTA from "@/components/home/CTA"
import Footer from "@/components/home/Footer"

import {
  clients,
  navItems,
  projects,
  services,
  stats,
  whyUsItems,
} from "@/components/home/data"

export default function HomePage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#07111f] text-white"
    >
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[15%] top-[-10%] h-[550px] w-[550px] rounded-full bg-orange-500/[0.06] blur-[150px]" />

        <div className="absolute left-[5%] top-[35%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.035] blur-[150px]" />

        <div className="absolute bottom-[-10%] right-[35%] h-[400px] w-[400px] rounded-full bg-orange-500/[0.035] blur-[130px]" />
      </div>

      <Navbar navItems={navItems} />

      <Hero />

      <Services items={services} />

      <Projects items={projects} />

      <Stats items={stats} />

      <Clients items={clients} />

      <WhyUs items={whyUsItems} />

      <CTA />

      <Footer />
    </main>
  )
}