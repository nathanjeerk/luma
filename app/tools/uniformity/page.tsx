'use client'

import { useState, useEffect, useCallback } from 'react'
import { Maximize, ArrowLeft, MousePointerClick, Info, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

// Gray levels specifically chosen to highlight different panel uniformity defects
const uniformityLevels = [
  { hex: '#000000', name: '0% Black', desc: 'Check edges for backlight bleed and corners for IPS glow.' },
  { hex: '#0D0D0D', name: '5% Dark Gray', desc: 'Highly sensitive for detecting clouding and blotchy patches.' },
  { hex: '#1A1A1A', name: '10% Gray', desc: 'Checks dark gradient handling and screen uniformity.' },
  { hex: '#333333', name: '20% Gray', desc: 'Checks for "Dirty Screen Effect" (DSE) in shadows.' },
  { hex: '#808080', name: '50% Mid Gray', desc: 'Standard uniformity check. Look for vertical or horizontal banding.' },
  { hex: '#FFFFFF', name: '100% White', desc: 'Check for pink/green color tints and corner vignetting (darkening).' },
]

export default function UniformityTest() {
  const [isActive, setIsActive] = useState(false)
  const [levelIndex, setLevelIndex] = useState(0)
  const [showTooltip, setShowTooltip] = useState(true)

  const toggleTest = async () => {
    if (!isActive) {
      try {
        await document.documentElement.requestFullscreen()
        setIsActive(true)
        setLevelIndex(0)
        setShowTooltip(true)
        
        // Hide tooltip quickly so the user can see the center of the screen
        setTimeout(() => setShowTooltip(false), 2500)
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

  const handleScreenClick = () => {
    if (isActive) {
      setLevelIndex((prev) => (prev + 1) % uniformityLevels.length)
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 2000)
    }
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsActive(false)
    } else if (e.key === 'ArrowRight' || e.key === ' ') {
      // Allow keyboard navigation too
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

  // --- ACTIVE TEST RENDER (FULLSCREEN) ---
  if (isActive) {
    const currentLevel = uniformityLevels[levelIndex]
    // Determine text color based on background so the tooltip is always readable
    const textColor = levelIndex > 3 ? 'text-black' : 'text-white'
    const bgColor = levelIndex > 3 ? 'bg-white/70' : 'bg-black/70'

    return (
      <div 
        className="fixed inset-0 z-50 cursor-pointer transition-colors duration-300"
        style={{ backgroundColor: currentLevel.hex }}
        onClick={handleScreenClick}
      >
        <div className={`absolute top-8 left-1/2 -translate-x-1/2 ${bgColor} backdrop-blur-md ${textColor} px-6 py-3 rounded-full flex flex-col items-center gap-1 transition-opacity duration-500 ${showTooltip ? 'opacity-100' : 'opacity-0'}`}>
          <span className="font-mono font-bold tracking-wider">{currentLevel.name}</span>
          <span className={`text-xs ${levelIndex > 3 ? 'text-zinc-700' : 'text-zinc-300'} flex items-center gap-1`}>
            <MousePointerClick className="w-3 h-3" /> Click or Spacebar to cycle. ESC to exit.
          </span>
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
          DIAGNOSTIC TOOL
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Screen Uniformity Test</h1>
        <p className="text-zinc-400 text-lg">
          Check your panel for backlight bleeding, clouding, dirty screen effect (DSE), and color temperature shifts.
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
              <strong className="text-white block mb-1">Backlight Bleeding</strong>
              On the 0% Black screen, look at the edges and corners. If you see white/yellow light leaking in, that is backlight bleed.
            </li>
            <li>
              <strong className="text-white block mb-1">Clouding & DSE</strong>
              On the 5% to 20% gray screens, look for blotchy patches or faint vertical/horizontal lines (Dirty Screen Effect). The gray should look perfectly solid.
            </li>
            <li>
              <strong className="text-white block mb-1">Color Shifting</strong>
              On the 100% White screen, check if one side of the monitor looks slightly pink/warm while the other looks green/cool.
            </li>
          </ul>
        </div>

        {/* Pro Tips */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" /> Best Practices
          </h2>
          <div className="space-y-4 text-sm text-zinc-400 flex-grow">
            <p>For the most accurate results, test in a **dark room**. Ambient light can hide backlight bleed and contrast issues.</p>
            <p>Ensure your monitor has been turned on for at least **30 minutes** before testing, as LCD/OLED panels need to reach their operating temperature for accurate uniformity.</p>
            <p>Sit at a standard viewing distance. Viewing the monitor from extreme angles will artificially create "IPS Glow" which is different from backlight bleed.</p>
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