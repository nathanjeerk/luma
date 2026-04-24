'use client'

import { useState, useEffect, useCallback } from 'react'
import { Maximize, ArrowLeft, Info, AlertTriangle, Rocket, Palette } from 'lucide-react'
import Link from 'next/link'

// Different backgrounds to test different pixel transition states
const backgrounds = [
  { name: 'Dark Gray', hex: '#1a1a1a', iconColor: 'text-white', laneColor: 'bg-zinc-800' },
  { name: 'Cyan', hex: '#00bcd4', iconColor: 'text-zinc-900', laneColor: 'bg-cyan-600' },
  { name: 'White', hex: '#ffffff', iconColor: 'text-black', laneColor: 'bg-zinc-200' },
]

export default function GhostingTest() {
  const [isActive, setIsActive] = useState(false)
  const [bgIndex, setBgIndex] = useState(0)
  const [showUI, setShowUI] = useState(true)

  const toggleTest = async () => {
    if (!isActive) {
      try {
        await document.documentElement.requestFullscreen()
        setIsActive(true)
        setShowUI(true)
        
        // Auto-hide UI after a few seconds so they can focus on the motion
        setTimeout(() => setShowUI(false), 3000)
      } catch (err) {
        console.error("Error attempting to enable fullscreen:", err)
        alert("Fullscreen mode is required for this test.")
      }
    } else {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
      }
      setIsActive(false)
    }
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsActive(false)
    } else if (e.key === ' ' || e.key === 'ArrowRight') {
      // Spacebar to cycle backgrounds during the test
      if (isActive) {
        setBgIndex((prev) => (prev + 1) % backgrounds.length)
        setShowUI(true)
        setTimeout(() => setShowUI(false), 2000)
      }
    }
  }, [isActive])

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsActive(false)
      }
    }

    // Hide cursor if UI is hidden for a pure testing environment
    if (isActive && !showUI) {
      document.body.style.cursor = 'none'
    } else {
      document.body.style.cursor = 'auto'
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousemove', () => setShowUI(true)) // Show UI on mouse move
    
    return () => {
      document.body.style.cursor = 'auto'
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousemove', () => setShowUI(true))
    }
  }, [handleKeyDown, isActive, showUI])


  // --- ACTIVE TEST RENDER (FULLSCREEN) ---
  if (isActive) {
    const currentBg = backgrounds[bgIndex]

    return (
      <div 
        className="fixed inset-0 z-50 flex flex-col justify-center overflow-hidden transition-colors duration-300"
        style={{ backgroundColor: currentBg.hex }}
        onClick={() => setBgIndex((prev) => (prev + 1) % backgrounds.length)}
      >
        {/* Injecting hardware-accelerated keyframes */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes panRight {
            0% { transform: translate3d(-10vw, 0, 0); }
            100% { transform: translate3d(110vw, 0, 0); }
          }
          .track-fast { animation: panRight 1.5s linear infinite; }
          .track-med { animation: panRight 3s linear infinite; }
          .track-slow { animation: panRight 6s linear infinite; }
        `}} />

        {/* Top Control Bar (Fades out) */}
        <div className={`absolute top-0 left-0 w-full p-6 flex justify-between items-center transition-opacity duration-500 ${showUI ? 'opacity-100' : 'opacity-0'}`}>
           <div className={`px-4 py-2 rounded-full backdrop-blur-md bg-black/20 ${currentBg.iconColor} font-mono text-sm font-bold flex items-center gap-2`}>
              <Palette className="w-4 h-4" /> {currentBg.name} Background (Click to change)
           </div>
           <div className={`px-4 py-2 rounded-full backdrop-blur-md bg-black/20 ${currentBg.iconColor} font-mono text-sm`}>
              ESC to Exit
           </div>
        </div>

        {/* The Motion Tracks */}
        <div className="space-y-8 w-full">
          {/* Fast Track */}
          <div className={`w-full h-24 ${currentBg.laneColor} flex items-center border-y border-black/10 relative`}>
             <div className="absolute left-4 top-1 text-[10px] font-bold opacity-50 uppercase tracking-widest z-10">Fast (960 px/s)</div>
             <div className={`track-fast absolute will-change-transform flex items-center justify-center`}>
                <Rocket className={`w-12 h-12 ${currentBg.iconColor}`} />
             </div>
          </div>

          {/* Medium Track */}
          <div className={`w-full h-24 ${currentBg.laneColor} flex items-center border-y border-black/10 relative`}>
             <div className="absolute left-4 top-1 text-[10px] font-bold opacity-50 uppercase tracking-widest z-10">Medium (480 px/s)</div>
             <div className={`track-med absolute will-change-transform flex items-center justify-center`}>
                <Rocket className={`w-12 h-12 ${currentBg.iconColor}`} />
             </div>
          </div>

          {/* Slow Track */}
          <div className={`w-full h-24 ${currentBg.laneColor} flex items-center border-y border-black/10 relative`}>
             <div className="absolute left-4 top-1 text-[10px] font-bold opacity-50 uppercase tracking-widest z-10">Slow (240 px/s)</div>
             <div className={`track-slow absolute will-change-transform flex items-center justify-center`}>
                <Rocket className={`w-12 h-12 ${currentBg.iconColor}`} />
             </div>
          </div>
        </div>
      </div>
    )
  }

  // --- PRE-TEST LOBBY RENDER ---
  return (
    <div className="flex flex-col min-h-[calc(100vh-100px)] max-w-4xl mx-auto px-8 py-20 w-full">
      <Link href="/tools" className="text-zinc-500 hover:text-white flex items-center gap-2 text-sm font-semibold mb-12 w-fit transition-colors">
        <ArrowLeft className="w-4 h-4" /> BACK TO TOOLS
      </Link>

      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide">
          MOTION CLARITY
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Ghosting & Motion Blur Test</h1>
        <p className="text-zinc-400 text-lg">
          Evaluate your monitor's pixel response time and check for inverse ghosting (overshoot) or black smearing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Instructions */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-500" /> How to read the test
          </h2>
          <ul className="space-y-5 text-sm text-zinc-300">
            <li>
              <strong className="text-white block mb-1">Follow with your eyes</strong>
              Do not stare at the center of the screen. Track the moving object with your eyes as it crosses the display.
            </li>
            <li>
              <strong className="text-white block mb-1">Look for the "Tail" (Ghosting)</strong>
              If you see a blurry trail following *behind* the object, your monitor has a slow pixel response time.
            </li>
            <li>
              <strong className="text-white block mb-1">Look for Bright Halos (Overshoot)</strong>
              If you see a bright or inverted-color trail *ahead* of or behind the object, your monitor's overdrive setting is turned up too high.
            </li>
          </ul>
        </div>

        {/* Pro Tips */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" /> Hardware Overdrive
          </h2>
          <div className="space-y-4 text-sm text-zinc-400 flex-grow">
            <p>Most gaming monitors have a setting called <strong>Overdrive</strong> (or Trace Free, Response Time). This test helps you find the sweet spot.</p>
            <p>1. Open your physical monitor OSD menu.</p>
            <p>2. Run this test and change your Overdrive setting (usually Off / Normal / Extreme).</p>
            <p>3. Choose the setting that provides the clearest image with the least amount of glowing halos.</p>
          </div>
        </div>
      </div>

      {/* Launch Action */}
      <div className="flex justify-center mt-6">
        <button 
          onClick={toggleTest}
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-3 hover:scale-105"
        >
          <Maximize className="w-5 h-5" /> LAUNCH FULLSCREEN TEST
        </button>
      </div>
    </div>
  )
}