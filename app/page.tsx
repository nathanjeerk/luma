import { Eye, Monitor, Box } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-32">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            SEE BETTER.<br />WORK BETTER.
          </h1>
          <p className="text-zinc-400 text-lg max-w-md">
            Upgrade your workspace into a system built for focus, clarity, and performance.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded font-semibold transition-colors mt-4">
            UPGRADE YOUR SETUP
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          {/* Placeholder for the main monitor image */}
          <div className="aspect-video bg-gradient-to-tr from-zinc-900 to-zinc-800 rounded-lg border border-zinc-800 shadow-2xl"></div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-12">YOUR WORKSPACE<br />IS WORKING AGAINST YOU.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Eye className="w-6 h-6" />}
            title="Eye strain after hours"
            desc="Harsh screens and bad lighting tire your eyes and drain your energy."
          />
          <FeatureCard 
            icon={<Box className="w-6 h-6" />}
            title="Clutter kills focus"
            desc="Too many windows, tabs, and devices create noise and reduce productivity."
          />
          <FeatureCard 
            icon={<Monitor className="w-6 h-6" />}
            title="Small screens limit you"
            desc="Less space means more scrolling, switching, and lost time."
          />
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-950 hover:bg-zinc-900 transition-colors flex flex-col items-center text-center">
      <div className="mb-4 text-zinc-400">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-zinc-500">{desc}</p>
    </div>
  )
}