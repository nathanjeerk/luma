'use client'

import { useState, useEffect, useCallback } from 'react'
import { Maximize, ArrowLeft, MousePointerClick, Info } from 'lucide-react'
import Link from 'next/link'

// The sequence of colors used to identify different panel defects
const testColors = [
  { hex: '#000000', name: 'True Black', desc: 'Checks for stuck pixels, backlight bleeding, and IPS glow.' },
  { hex: '#FFFFFF', name: 'Pure White', desc: 'Checks for completely dead pixels and screen uniformity.' },
  { hex: '#FF0000', name: 'Solid Red', desc: 'Checks for stuck red sub-pixels.' },
  { hex: '#00FF00', name: 'Solid Green', desc: 'Checks for stuck green sub-pixels.' },
  { hex: '#0000FF', name: 'Solid Blue', desc: 'Checks for stuck blue sub-pixels.' },
]

export default function DeadPixelTest() {
  const [isActive, setIsActive] = useState(false)
  const [colorIndex, setColorIndex] = useState(0)
  const [showTooltip, setShowTooltip] = useState(true)

  // Handle entering and exiting the test state
  const toggleTest = async () => {
    if (!isActive) {
      try {
        await document.documentElement.requestFullscreen()
        setIsActive(true)
        setColorIndex(0)
        setShowTooltip(true)
        
        // Hide tooltip after 3 seconds to ensure pure color testing
        setTimeout(() => setShowTooltip(false), 3000)
      } catch (err) {
        console.error("Error attempting to enable fullscreen:", err)
        alert("Fullscreen mode is required for this test. Please ensure your browser allows it.")
      }
    } else {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
      }
      setIsActive(false)
    }
  }

  // Cycle to the next color on click
  const handleScreenClick = () => {
    if (isActive) {
      setColorIndex((prev) => (prev + 1) % testColors.length)
      // Flash the tooltip briefly on change so they know what they are looking at
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 1500)
    }
  }

  // Listen for the ESC key to gracefully exit the test state
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsActive(false)
    }
  }, [])

  // Sync state if the user exits fullscreen via browser native controls
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsActive(false)
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])


  // --- ACTIVE TEST RENDER (FULLSCREEN) ---
  if (isActive) {
    const currentColor = testColors[colorIndex]
    return (
      <div 
        className="fixed inset-0 z-50 cursor-pointer transition-colors duration-200"
        style={{ backgroundColor: currentColor.hex }}
        onClick={handleScreenClick}
      >
        <div className={`absolute top-8 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md text-white px-6 py-3 rounded-full flex flex-col items-center gap-1 transition-opacity duration-500 ${showTooltip ? 'opacity-100' : 'opacity-0'}`}>
          <span className="font-mono font-bold tracking-wider">{currentColor.name}</span>
          <span className="text-xs text-zinc-300 flex items-center gap-1">
            <MousePointerClick className="w-3 h-3" /> Click anywhere to cycle color. ESC to exit.
          </span>
        </div>
      </div>
    )
  }

  // --- PRE-TEST LOBBY RENDER ---
  return (
    <div className="flex flex-col min-h-[calc(100vh-100px)] max-w-4xl mx-auto px-4 md:px-8 py-20 w-full">
      <Link href="/tools" className="text-zinc-500 hover:text-white flex items-center gap-2 text-sm font-semibold mb-12 w-fit transition-colors">
        <ArrowLeft className="w-4 h-4" /> BACK TO TOOLS
      </Link>

      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Dead Pixel Test</h1>
        <p className="text-zinc-400 text-lg">
          Locate dead, stuck, or malfunctioning pixels on your display by cycling through primary hardware colors.
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 mb-10">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Info className="w-5 h-5 text-blue-500" /> How to test your monitor
        </h2>
        <ul className="space-y-4 text-zinc-300">
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center font-mono text-xs flex-shrink-0">1</div>
            <p>Ensure your monitor screen is completely clean. Dust can often look like dead pixels.</p>
          </li>
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center font-mono text-xs flex-shrink-0">2</div>
            <p>Click the launch button below. Your browser will enter full-screen mode to cover all edges of your display.</p>
          </li>
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center font-mono text-xs flex-shrink-0">3</div>
            <p>Left-click anywhere on the screen to cycle through Black, White, Red, Green, and Blue.</p>
          </li>
          <li className="flex gap-3">
            <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center font-mono text-xs flex-shrink-0">4</div>
            <p>Carefully scan the entire screen on each color. Look for tiny dots that do not match the background color.</p>
          </li>
        </ul>
      </div>

      {/* Launch Action */}
      <div className="flex justify-center mt-10">
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