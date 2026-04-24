'use client'

import { useState, useRef } from 'react'
import { Eye, Monitor, Box, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-20 w-full">
        
        {/* 1. Hero Section - Now with Photo Placeholders */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-32 pt-10">
          <div className="md:w-1/2 space-y-6 z-10 pr-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              LUMA CALIBRATION ENGINE V2.0
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              SEE BETTER.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                WORK BETTER.
              </span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-md">
              Upgrade your workspace into a system built for focus, clarity, and performance. Stop settling for factory defaults.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/tools" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-2">
                START CALIBRATING <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          {/* New Photo Section - Styled Placeholder Stack */}
          <div className="md:w-1/2 mt-16 md:mt-0 relative w-full aspect-[4/3] flex items-center justify-center">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* Stylized stack simulating "your photos" */}
            <div className="relative w-4/5 h-4/5 z-10">
                {/* Back card */}
                <div className="absolute inset-0 bg-zinc-900 border border-zinc-700 rounded-2xl rotate-[-4deg] shadow-xl flex items-center justify-center">
                    <span className="text-zinc-600 font-mono text-sm">[WORKSPACE PHOTO]</span>
                </div>
                {/* Middle card */}
                <div className="absolute inset-0 bg-zinc-950 border border-zinc-800 rounded-2xl rotate-[3deg] shadow-xl flex items-center justify-center">
                     <span className="text-zinc-600 font-mono text-sm">[PRODUCT DETAIL]</span>
                </div>
                {/* Front card (the main display area) */}
                <div className="absolute inset-2 bg-zinc-800 rounded-lg shadow-inner flex flex-col items-center justify-center p-6 text-center border border-zinc-700/50">
                    <Monitor className="w-16 h-16 text-zinc-600 mb-5"/>
                    <p className="text-zinc-400 font-semibold mb-2">Insert Your Photos Here</p>
                    <p className="text-zinc-500 text-xs">(Showcase your setup, monitor, or products)</p>
                </div>
            </div>
          </div>
        </section>

        {/* 2. Features & Visual Comparison Section - Now contains Slider */}
        <section className="mb-32 py-10">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase">Visual Transformation</span>
            <h2 className="text-4xl font-bold mt-4 mb-6">YOUR WORKSPACE IS WORKING AGAINST YOU.</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Uncalibrated monitors cause eye fatigue, ruin color work, and reduce your overall productivity. Move the slider to see the difference LUMA makes.
            </p>
          </div>

          {/* Slider Positioned Here - Large Format */}
          <div className="relative mb-24 max-w-5xl mx-auto">
              {/* Added glow below the slider block */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>
              <BeforeAfterSlider />
          </div>

          {/* Specific Detail Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Eye className="w-6 h-6 text-blue-500" />}
              title="Fix Eye Strain & Fatigue"
              desc="Optimized brightness levels and gamma curves relieve your eyes during long working sessions."
            />
            <FeatureCard 
              icon={<Box className="w-6 h-6 text-blue-500" />}
              title="Recover Washed Out Contrast"
              desc="Ensure deep blacks look black and highlights don't clip, revealing lost detail in your work."
            />
            <FeatureCard 
              icon={<Monitor className="w-6 h-6 text-blue-500" />}
              title="Achieve Color Accuracy"
              desc="Get reliable colors across all your displays so you can design and code with confidence."
            />
          </div>
        </section>

        {/* 3. Social Proof / Metrics */}
        <section className="mb-32 py-16 border-y border-zinc-800/50 bg-zinc-950/30 rounded-2xl px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard number="50K+" label="Monitors Calibrated" />
            <StatCard number="100%" label="Web-Based Tool" />
            <StatCard number="ΔE < 2" label="Target Color Accuracy" />
            <StatCard number="4.9/5" label="User Rating" />
          </div>
        </section>

        {/* 4. Bottom CTA */}
        <section className="text-center bg-zinc-900 border border-zinc-800 rounded-2xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <h2 className="text-4xl font-bold mb-6 relative z-10">Ready to fix your display?</h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto relative z-10">
            Join thousands of developers, designers, and power users who have optimized their workspace with LUMA.
          </p>
          <ul className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-10 text-sm text-zinc-300 relative z-10">
            <li className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> No downloads required</li>
            <li className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Works on any OS</li>
            <li className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500"/> Completely free</li>
          </ul>
          <Link href="/tools" className="inline-block bg-white text-black hover:bg-zinc-200 px-8 py-3 rounded-lg font-bold transition-colors relative z-10 shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
            LAUNCH CALIBRATION TOOL
          </Link>
        </section>

      </div>
      
      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-800 py-8 px-8 text-center text-zinc-500 text-xs">
        <p>© {new Date().getFullYear()} LUMA Workspace. Project built with Next.js, Supabase, and Vercel.</p>
      </footer>
    </div>
  )
}

// --- Subcomponents ---

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 border border-zinc-800 rounded-xl bg-zinc-950/50 hover:bg-zinc-900/80 hover:border-blue-500/30 transition-all group duration-300">
      <div className="mb-6 p-3 bg-zinc-900 rounded-lg inline-block border border-zinc-800 group-hover:border-blue-500/50 group-hover:bg-zinc-800 transition-colors">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-3 text-white">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  )
}

function StatCard({ number, label }: { number: string, label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{number}</div>
      <div className="text-xs font-semibold text-zinc-500 tracking-wider uppercase">{label}</div>
    </div>
  )
}

// Interactive Before & After Image Slider
function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleDrag = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    
    // Support both mouse and touch events
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

  // Common styles for simulation blocks
  const innerBlockStyles = "w-full h-full border rounded flex flex-col items-center justify-center p-8";

  return (
    <div 
      ref={sliderRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
      onTouchMove={handleDrag}
      onClick={handleDrag}
    >
      {/* Background: "Before" Simulation (Washed out, low contrast) */}
      <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center p-8">
         <div className={`${innerBlockStyles} border-zinc-700/50 bg-[#1a1c23] opacity-90 backdrop-sepia-[.3]`}>
            <Monitor className="w-16 h-16 text-zinc-600 mb-4" />
            <p className="text-zinc-500 font-mono text-sm">Factory Default (Uncalibrated)</p>
            <p className="text-zinc-600 text-xs mt-1">(Drag Slider)</p>
         </div>
      </div>

      {/* Foreground: "After" Simulation (Crisp, accurate colors) */}
      <div 
        className="absolute inset-0 bg-zinc-950 flex items-center justify-center p-8 border-r-2 border-blue-500 overflow-hidden z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className={`${innerBlockStyles} border-blue-900/50 bg-black shadow-[inset_0_0_50px_rgba(37,99,235,0.05)]`}>
            <Monitor className="w-16 h-16 text-blue-500 mb-4 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
            <p className="text-blue-400 font-mono text-sm font-semibold tracking-wide">LUMA Calibrated Profile</p>
            <p className="text-blue-600 text-xs mt-1">(Crisp Detail)</p>
         </div>
      </div>

      {/* Slider Handle (Line + Circle) */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-blue-500 cursor-ew-resize z-20 flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.8)]"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-blue-500 active:scale-110 transition-transform">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-blue-600 rounded-full"></div>
            <div className="w-0.5 h-3 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}