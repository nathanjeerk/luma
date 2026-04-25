'use client'

import { useState, useRef } from 'react'
import { Eye, Monitor, Grid, Target, Shield, Zap, TargetIcon, Video, LineChart, Code } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. Full-Background Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center border-b border-zinc-900 pt-20 md:pt-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/69c4a0d5911bd56c287484b14bb709db.jpg')" }} 
        ></div>
        <div className="absolute inset-0 bg-black/50"></div> 
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent md:w-3/4"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              SEE BETTER.<br />
              WORK BETTER.
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl max-w-md font-medium leading-relaxed">
              Upgrade your workspace into a system built for focus, clarity, and performance.
            </p>
            
            <div className="pt-4">
              <Link href="/product" className="inline-block bg-[#0055FF] hover:bg-blue-600 text-white px-8 py-3.5 rounded text-sm font-semibold transition-colors tracking-wide">
                UPGRADE YOUR SETUP
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full overflow-hidden">
        
        {/* 2. Workspace Against You */}
        <section className="py-24 border-b border-zinc-900">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">YOUR WORKSPACE<br/>IS WORKING AGAINST YOU.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <Eye className="w-8 h-8 text-zinc-500 mb-6" strokeWidth={1.5} />
              <h3 className="font-semibold text-sm mb-3">Eye strain after hours</h3>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-[250px]">
                Harsh screens and bad lighting tire your eyes and drain your energy.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Grid className="w-8 h-8 text-zinc-500 mb-6" strokeWidth={1.5} />
              <h3 className="font-semibold text-sm mb-3">Clutter kills focus</h3>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-[250px]">
                Too many windows, tabs, and devices create noise and reduce productivity.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Monitor className="w-8 h-8 text-zinc-500 mb-6" strokeWidth={1.5} />
              <h3 className="font-semibold text-sm mb-3">Small screens limit you</h3>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-[250px]">
                Less space means more scrolling, switching, and lost time.
              </p>
            </div>
          </div>
          
          <p className="text-center text-zinc-400 mt-16 font-medium">
            It's not you. It's your setup.
          </p>
        </section>

        {/* 3. Slider Section */}
        <section className="py-24 border-b border-zinc-900 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-2">SAME WORK.<br/>DIFFERENT EXPERIENCE.</h2>
          <p className="text-zinc-400 mb-16">More space. Less strain. Total focus.</p>

          <div className="relative max-w-5xl mx-auto mb-10">
              <BeforeAfterSlider />
          </div>
        </section>

        {/* 4. NEW Built For Your Best Work Section */}
        <section className="py-24 border-b border-zinc-900 text-center">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-2 uppercase">Built For Your Best Work</h2>
            <p className="text-zinc-400">Whatever your stack, there's a LUMA setup to fix your flow.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4 md:px-0">
            
            {/* Persona 1: DESIGNERS */}
            <div className="flex flex-col items-center">
                <p className="font-semibold text-xs tracking-widest text-white mb-2 uppercase">Designers</p>
                <Link href="/product" className="relative w-full aspect-[4/5] bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden flex flex-col items-center justify-center p-4 group hover:border-blue-500/50 transition-colors">
                    <Eye className="w-8 h-8 text-zinc-700/50 mb-3" />
                    <img src='/dummy-monitor-vertical.webp' alt='vertical monitor' className="w-32 h-auto text-zinc-700/50 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                    <p className="mt-4 text-[10px] text-zinc-600 font-mono text-center">VISUAL WORK</p>
                </Link>
            </div>

            {/* Persona 2: DEVELOPERS */}
            <div className="flex flex-col items-center">
                <p className="font-semibold text-xs tracking-widest text-white mb-2 uppercase">Developers</p>
                <Link href="/product" className="relative w-full aspect-[4/5] bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden flex flex-col items-center justify-center p-4 group hover:border-blue-500/50 transition-colors">
                    <Code className="w-8 h-8 text-zinc-700/50 mb-3" />
                    <img src='/dummy-monitor-vertical.webp' alt='vertical monitor' className="w-32 h-auto text-zinc-700/50 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                    <p className="mt-4 text-[10px] text-zinc-600 font-mono text-center">DEEP CODE</p>
                </Link>
            </div>

            {/* Persona 3: TRADERS */}
            <div className="flex flex-col items-center">
                <p className="font-semibold text-xs tracking-widest text-white mb-2 uppercase">Traders</p>
                <Link href="/product" className="relative w-full aspect-[4/5] bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden flex flex-col items-center justify-center p-4 group hover:border-blue-500/50 transition-colors">
                    <LineChart className="w-8 h-8 text-zinc-700/50 mb-3" />
                    <img src='/dummy-monitor-vertical.webp' alt='vertical monitor' className="w-32 h-auto text-zinc-700/50 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                    <p className="mt-4 text-[10px] text-zinc-600 font-mono text-center">DATA WORK</p>
                </Link>
            </div>

            {/* Persona 4: REMOTE WORKERS */}
            <div className="flex flex-col items-center">
                <p className="font-semibold text-xs tracking-widest text-white mb-2 uppercase">Remote Workers</p>
                <Link href="/product" className="relative w-full aspect-[4/5] bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden flex flex-col items-center justify-center p-4 group hover:border-blue-500/50 transition-colors">
                    <Video className="w-8 h-8 text-zinc-700/50 mb-3" />
                    <img src='/dummy-monitor-vertical.webp' alt='vertical monitor' className="w-32 h-auto text-zinc-700/50 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
                    <p className="mt-4 text-[10px] text-zinc-600 font-mono text-center">COLLAB WORK</p>
                </Link>
            </div>

          </div>
        </section>

        {/* 5. Immersive Image Callout */}
        <section className="py-24 border-b border-zinc-900">
          <div className="w-full aspect-[21/9] md:aspect-[2.5/1] bg-zinc-900 rounded flex items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/40 to-transparent"></div>
            
            <div className="relative z-10 ml-auto w-full md:w-1/2 p-8 md:pr-16 text-right md:text-left flex flex-col md:items-start items-end">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                THIS ISN'T<br/>JUST A MONITOR.
              </h2>
              <p className="text-zinc-400 text-lg">
                It's a better<br/>way to work.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Testimonials */}
        <section className="py-24 border-b border-zinc-900">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">BUILT FOR CREATORS, PROFESSIONALS<br/>AND DEEP WORK.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto px-4">
            <TestimonialCard 
              quote="It completely changed how I edit and create."
              name="Alex R."
              title="Video Editor"
            />
            <TestimonialCard 
              quote="More space, more focus, way more done."
              name="Daniel K."
              title="Product Designer"
            />
            <TestimonialCard 
              quote="Best upgrade I've ever made."
              name="Jason T."
              title="Software Engineer"
            />
          </div>
        </section>

        {/* 7. Bottom CTA */}
        <section className="py-32 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">UPGRADE YOUR WORKSPACE</h2>
          <p className="text-zinc-400 mb-8">See Better. Work Better.</p>
          <Link href="/product" className="inline-block bg-[#0055FF] hover:bg-blue-600 text-white px-8 py-3 rounded text-sm font-semibold transition-colors tracking-wide">
            GET LUMA
          </Link>
        </section>

      </div>
    </div>
  )
}

// --- Subcomponents ---

function TestimonialCard({ quote, name, title }: { quote: string, name: string, title: string }) {
  return (
    <div className="flex flex-col gap-4 text-left">
      <p className="text-sm font-medium leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-3 mt-2">
        <div className="w-10 h-10 rounded-full bg-zinc-800 shrink-0"></div>
        <div>
          <p className="text-xs font-semibold text-zinc-300">— {name}</p>
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{title}</p>
        </div>
      </div>
    </div>
  )
}

function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleDrag = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    
    let clientX
    if ('touches' in e) {
      clientX = e.touches[0].clientX
    } else {
      clientX = (e as React.MouseEvent).clientX
    }

    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div 
        ref={sliderRef}
        className="relative w-full aspect-[16/9] bg-zinc-900 rounded overflow-hidden cursor-ew-resize select-none touch-none"
        onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
        onTouchMove={handleDrag}
        onClick={handleDrag}
      >
        {/* Background: "Before" */}
        <div className="absolute inset-0 flex items-center justify-center p-8 bg-[#111] backdrop-sepia-[.4] opacity-80">
          <div className="w-full h-full border border-zinc-800 rounded bg-zinc-900/50 flex items-center justify-center">
             <span className="text-zinc-600 text-sm tracking-widest font-mono">[BEFORE IMAGE]</span>
          </div>
        </div>

        {/* Foreground: "After" */}
        <div 
          className="absolute inset-0 flex items-center justify-center p-8 bg-black border-r border-zinc-500 overflow-hidden z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="w-full h-full border border-blue-900/30 rounded bg-black flex items-center justify-center shadow-[inset_0_0_50px_rgba(0,85,255,0.05)]">
             <span className="text-blue-500 text-sm tracking-widest font-mono drop-shadow-[0_0_10px_rgba(0,85,255,0.5)]">[AFTER IMAGE]</span>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-[1px] bg-white z-20 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center border border-zinc-600">
            <div className="flex gap-1 items-center">
              <div className="w-1 h-1 rounded-full bg-zinc-400"></div>
              <div className="w-1 h-1 rounded-full bg-zinc-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Labels below slider matching the mockup */}
      <div className="flex justify-between w-full px-12 mt-6 text-xs font-bold tracking-widest text-zinc-500">
        <span>BEFORE</span>
        <span>AFTER</span>
      </div>
    </div>
  )
}