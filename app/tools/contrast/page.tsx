'use client'

import { useState, useEffect, useCallback } from 'react'
import { Maximize, ArrowLeft, Info, AlertTriangle, Settings2, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

// The test phases
const testModes = ['black', 'white', 'ansi'] as const

export default function ContrastTest() {
  const [isActive, setIsActive] = useState(false)
  const [modeIndex, setModeIndex] = useState(0)
  const [showTooltip, setShowTooltip] = useState(true)

  const toggleTest = async () => {
    if (!isActive) {
      try {
        await document.documentElement.requestFullscreen()
        setIsActive(true)
        setModeIndex(0)
        setShowTooltip(true)
        setTimeout(() => setShowTooltip(false), 3000)
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

  const handleScreenClick = () => {
    if (isActive) {
      setModeIndex((prev) => (prev + 1) % testModes.length)
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 2000)
    }
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsActive(false)
    } else if (e.key === ' ' || e.key === 'ArrowRight') {
      if (isActive) handleScreenClick()
    }
  }, [isActive])

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

  // --- ACTIVE TEST RENDERS (FULLSCREEN) ---
  if (isActive) {
    const currentMode = testModes[modeIndex]

    return (
      <div 
        className="fixed inset-0 z-50 cursor-pointer flex flex-col items-center justify-center transition-colors duration-0"
        style={{ backgroundColor: currentMode === 'white' ? '#FFFFFF' : '#000000' }}
        onClick={handleScreenClick}
      >
        {/* Tooltip Overlay */}
        <div className={`absolute top-8 left-1/2 -translate-x-1/2 z-10 backdrop-blur-md px-6 py-3 rounded-full flex flex-col items-center gap-1 transition-opacity duration-500 ${currentMode === 'white' ? 'bg-black/70 text-white' : 'bg-white/70 text-black'} ${showTooltip ? 'opacity-100' : 'opacity-0'}`}>
          <span className="font-mono font-bold tracking-wider">
            {currentMode === 'black' ? 'BLACK CRUSH TEST' : currentMode === 'white' ? 'WHITE CLIPPING TEST' : 'ANSI CONTRAST'}
          </span>
          <span className="text-xs opacity-70">Click to cycle. ESC to exit.</span>
        </div>

        {/* 1. Black Level Test (Squares RGB 1 to 16) */}
        {currentMode === 'black' && (
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 p-8 w-full max-w-6xl h-3/4">
            {Array.from({ length: 32 }).map((_, i) => {
              // Starting from very dark gray (RGB 1,1,1) up to slightly lighter
              const rgbVal = i + 1
              return (
                <div 
                  key={i} 
                  className="w-full h-full flex items-center justify-center font-mono text-xs"
                  style={{ backgroundColor: `rgb(${rgbVal}, ${rgbVal}, ${rgbVal})`, color: `rgb(${rgbVal + 20}, ${rgbVal + 20}, ${rgbVal + 20})` }}
                >
                  {rgbVal}
                </div>
              )
            })}
          </div>
        )}

        {/* 2. White Level Test (Squares RGB 254 down to 239) */}
        {currentMode === 'white' && (
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 p-8 w-full max-w-6xl h-3/4">
            {Array.from({ length: 32 }).map((_, i) => {
              // Starting from very bright gray (RGB 254,254,254) down to slightly darker
              const rgbVal = 254 - i
              return (
                <div 
                  key={i} 
                  className="w-full h-full flex items-center justify-center font-mono text-xs"
                  style={{ backgroundColor: `rgb(${rgbVal}, ${rgbVal}, ${rgbVal})`, color: `rgb(${rgbVal - 20}, ${rgbVal - 20}, ${rgbVal - 20})` }}
                >
                  {rgbVal}
                </div>
              )
            })}
          </div>
        )}

        {/* 3. ANSI Checkerboard Test */}
        {currentMode === 'ansi' && (
          <div className="w-full h-full grid grid-cols-4 grid-rows-4">
            {Array.from({ length: 16 }).map((_, i) => {
              // Alternating black and white squares
              const isWhite = (Math.floor(i / 4) + (i % 4)) % 2 === 0
              return (
                <div 
                  key={i} 
                  style={{ backgroundColor: isWhite ? '#FFFFFF' : '#000000' }}
                  className="w-full h-full"
                ></div>
              )
            })}
          </div>
        )}
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
          COLOR DYNAMICS
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Contrast & Black Level Test</h1>
        <p className="text-zinc-400 text-lg">
          Ensure your monitor can distinguish between deep shadows and bright highlights without losing detail.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Instructions */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-500" /> What to look for
          </h2>
          <ul className="space-y-5 text-sm text-zinc-300">
            <li>
              <strong className="text-white block mb-1">Phase 1: Black Crush</strong>
              You will see a pure black background with numbered squares. A perfectly calibrated monitor should allow you to barely distinguish square "1" or "2" from the background. If you can only see square "8" and up, your blacks are "crushed".
            </li>
            <li>
              <strong className="text-white block mb-1">Phase 2: White Clipping</strong>
              You will see a pure white background. You should be able to distinguish the squares with the highest numbers. If the squares blend completely into the white, your highlights are "clipped".
            </li>
            <li>
              <strong className="text-white block mb-1">Phase 3: ANSI Checkerboard</strong>
              A high-contrast grid to test if bright white squares bleed light into the adjacent dark squares.
            </li>
          </ul>
        </div>

        {/* Adjustments */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Settings2 className="w-5 h-5 text-zinc-400" /> How to fix it
          </h2>
          <div className="space-y-4 text-sm text-zinc-400 flex-grow">
            <p>If you fail the Black Crush test, increase your monitor's physical <strong>Brightness</strong> or <strong>Black Equalizer</strong> setting until square "1" is faintly visible.</p>
            <p>If you fail the White Clipping test, lower your monitor's physical <strong>Contrast</strong> setting. High contrast often destroys bright details to make the image "pop" more.</p>
            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg flex gap-3 text-blue-200">
               <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
               <p className="text-xs">Finding the perfect balance between these two settings is the core of monitor calibration.</p>
            </div>
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