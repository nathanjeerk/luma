import { Settings2, ArrowRight } from 'lucide-react'

export default function ToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      {/* Tools Hero */}
      <div className="mb-20">
        <span className="text-blue-500 font-semibold tracking-wider text-sm">LUMA TOOLS</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          Calibrate. Test.<br />Perfect Your View.
        </h1>
        <p className="text-zinc-400 max-w-md">
          Free tools to help you get the best performance and accuracy from your monitor.
        </p>
      </div>

      {/* Monitor Calibration Tool Section */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 flex flex-col lg:flex-row gap-12 mb-20 items-center">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold">MONITOR CALIBRATION TOOL</h2>
          <p className="text-zinc-400">Calibrate your monitor for accurate colors, better contrast, and a more comfortable viewing experience.</p>
          <ul className="space-y-3 text-sm text-zinc-300">
            <li className="flex gap-2 items-center"><Settings2 className="w-4 h-4 text-blue-500"/> Adjust brightness, contrast, gamma & more</li>
            <li className="flex gap-2 items-center"><Settings2 className="w-4 h-4 text-blue-500"/> Optimize color accuracy</li>
            <li className="flex gap-2 items-center"><Settings2 className="w-4 h-4 text-blue-500"/> Save and compare profiles</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold transition-colors">
            START CALIBRATION
          </button>
        </div>
        
        {/* Placeholder for the Color Wheel/Sliders Component */}
        <div className="lg:w-1/2 bg-zinc-900 border border-zinc-800 rounded-xl aspect-video w-full flex items-center justify-center">
           <span className="text-zinc-600 font-mono">[Interactive Calibration UI Component]</span>
        </div>
      </div>

      {/* Monitor Tests Grid */}
      <div>
        <h2 className="text-2xl font-semibold text-center mb-12">MONITOR TESTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TestCard title="Dead Pixel Test" desc="Check for dead or stuck pixels on your screen." />
          <TestCard title="Ghosting Test" desc="Test pixel response time and motion clarity." />
          <TestCard title="Uniformity Test" desc="Check brightness and color uniformity." />
          <TestCard title="Contrast Test" desc="Evaluate contrast ratio and black levels." />
        </div>
      </div>
    </div>
  )
}

function TestCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="group border border-zinc-800 rounded-xl p-5 bg-zinc-950 hover:border-zinc-700 transition-all cursor-pointer">
      {/* Test Preview Image Placeholder */}
      <div className="aspect-video bg-zinc-900 rounded mb-4 w-full"></div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-xs text-zinc-400 mb-4 h-8">{desc}</p>
      <div className="text-blue-500 text-xs font-semibold flex items-center gap-1 group-hover:text-blue-400">
        LAUNCH <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  )
}