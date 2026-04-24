'use client'

import { useState } from 'react'
import { Settings2, ArrowRight, RotateCcw, MonitorPlay, Focus, Maximize, Sun } from 'lucide-react'
import Link from 'next/link'

export default function ToolsPage() {
  // State for the interactive calibration sliders
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [gamma, setGamma] = useState(1.0)

  const resetSettings = () => {
    setBrightness(100)
    setContrast(100)
    setGamma(1.0)
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col min-h-[calc(100vh-100px)]">
      
      {/* 1. Tools Hero */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide">
          LUMA CALIBRATION SUITE
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Calibrate. Test.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Perfect Your View.
          </span>
        </h1>
        <p className="text-zinc-400 max-w-xl text-lg">
          Professional-grade, browser-based tools to help you get the best performance, color accuracy, and comfort from your monitor.
        </p>
      </div>

      {/* 2. Interactive Monitor Calibration Tool */}
      <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl overflow-hidden mb-24 shadow-2xl">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Panel: Controls */}
          <div className="lg:w-5/12 p-10 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-between bg-zinc-950">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Settings2 className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold">Live Calibration</h2>
              </div>
              <p className="text-zinc-400 text-sm mb-10">
                Adjust the sliders to optimize the test pattern on the right. Aim to see distinct separation in the dark and light gradient steps.
              </p>

              {/* Sliders */}
              <div className="space-y-8">
                <SliderControl 
                  label="Brightness" 
                  value={brightness} 
                  setValue={setBrightness} 
                  min={50} max={150} unit="%" 
                />
                <SliderControl 
                  label="Contrast" 
                  value={contrast} 
                  setValue={setContrast} 
                  min={50} max={150} unit="%" 
                />
                <SliderControl 
                  label="Gamma Simulation" 
                  value={gamma} 
                  setValue={setGamma} 
                  min={0.5} max={2.5} step={0.1} unit="" 
                />
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <button 
                onClick={resetSettings}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border border-zinc-700 hover:bg-zinc-800 transition-colors w-full"
              >
                <RotateCcw className="w-4 h-4" /> RESET
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)] w-full">
                SAVE PROFILE
              </button>
            </div>
          </div>
          
          {/* Right Panel: Live Preview UI */}
          <div className="lg:w-7/12 bg-[#0a0a0c] p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden">
             {/* Background Grid Pattern */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
             
             {/* The visual target that responds to state */}
             <div 
                className="relative z-10 w-full max-w-md aspect-square bg-zinc-900 rounded-xl border border-zinc-700 shadow-2xl overflow-hidden flex flex-col"
                style={{
                  filter: `brightness(${brightness}%) contrast(${contrast}%)`,
                  opacity: gamma > 1 ? 1 - (gamma - 1) * 0.2 : 1, // Crude visual simulation of gamma shift for prototype
                }}
              >
                {/* Test Pattern: Grayscale Gradient */}
                <div className="h-1/3 w-full flex">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="h-full flex-1" style={{ backgroundColor: `hsl(0, 0%, ${i * 11}%)` }}></div>
                  ))}
                </div>
                
                {/* Test Pattern: RGB Colors */}
                <div className="h-1/3 w-full flex">
                  <div className="h-full flex-1 bg-[#ff0000]"></div>
                  <div className="h-full flex-1 bg-[#00ff00]"></div>
                  <div className="h-full flex-1 bg-[#0000ff]"></div>
                </div>

                {/* Test Pattern: Skin Tones & Contrast Checks */}
                <div className="h-1/3 w-full flex relative">
                  <div className="w-1/2 h-full bg-[#f1c27d]"></div>
                  <div className="w-1/2 h-full bg-[#8d5524]"></div>
                  {/* Concentric circles for banding test */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-radial from-white to-black opacity-80 mix-blend-overlay"></div>
                  </div>
                </div>
             </div>
             
             <p className="relative z-10 mt-6 text-zinc-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
               <Sun className="w-3 h-3" /> Live Preview Environment
             </p>
          </div>
        </div>
      </div>

      {/* 3. Monitor Tests Grid */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Standard Monitor Tests</h2>
          <span className="text-zinc-500 text-sm hidden md:inline-block">Click to launch fullscreen diagnostics</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href='/tools/dead-pixel' className='block h-full w-ful'>
                  <TestCard 
                        icon={<MonitorPlay className="w-6 h-6" />}
                        title="Dead Pixel Test" 
                        desc="Cycles through solid RGB colors to easily spot dead or stuck pixels." 
                    />
            </Link>
            <Link href="/tools/ghosting" className="block h-full w-full">
                  <TestCard 
                        icon={<Focus className="w-6 h-6" />}
                        title="Ghosting Test" 
                        desc="Evaluates pixel response time and UFO motion blur clarity." 
                    />
            </Link>
            <Link href="/tools/uniformity" className="block h-full w-full">
                  <TestCard 
                        icon={<Maximize className="w-6 h-6" />}
                        title="Uniformity Test" 
                        desc="Checks for backlight bleeding and clouding on dark screens." 
                    />
            </Link>
            <Link href="/tools/contrast" className="block h-full w-full">
                  <TestCard 
                        icon={<Settings2 className="w-6 h-6" />}
                        title="Contrast Test" 
                        desc="Examines black and white levels clipping." 
                    />
            </Link>
        </div>
      </div>
    </div>
  )
}

// --- Subcomponents ---

// Reusable Slider Component
function SliderControl({ 
  label, 
  value, 
  setValue, 
  min, 
  max, 
  step = 1, 
  unit 
}: { 
  label: string, 
  value: number, 
  setValue: (val: number) => void, 
  min: number, 
  max: number, 
  step?: number, 
  unit: string 
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center text-sm font-semibold">
        <span className="text-white">{label}</span>
        <span className="text-blue-400 font-mono bg-blue-900/20 px-2 py-0.5 rounded">
          {value.toFixed(step < 1 ? 1 : 0)}{unit}
        </span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step}
        value={value} 
        onChange={(e) => setValue(parseFloat(e.target.value))}
        className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      />
    </div>
  )
}

// Interactive Test Cards
function TestCard({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
  return (
    <div className="group border border-zinc-800 rounded-xl p-6 bg-zinc-950/50 hover:bg-zinc-900 hover:border-blue-500/30 transition-all cursor-pointer relative overflow-hidden flex flex-col h-full">
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="text-zinc-500 group-hover:text-blue-400 transition-colors mb-4 relative z-10">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2 text-white relative z-10">{title}</h3>
      <p className="text-sm text-zinc-400 mb-6 flex-grow relative z-10">{desc}</p>
      
      <div className="text-blue-500 text-sm font-semibold flex items-center gap-2 group-hover:text-blue-400 relative z-10">
        LAUNCH TEST <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  )
}