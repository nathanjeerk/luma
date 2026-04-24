import { Target, Zap, Shield, Code, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-100px)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 w-full">
        
        {/* 1. Hero Section */}
        <section className="mb-32 pt-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide">
            OUR MISSION
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
            Built for those who live <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              in the terminal.
            </span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
            We spend thousands of hours staring at glowing rectangles. 
            LUMA was built to ensure those hours don't destroy our eyes, ruin our color accuracy, or require downloading sketchy bloatware just to fix factory defaults.
          </p>
        </section>

        {/* 2. The Story / Origin */}
        <section className="mb-32">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 md:p-16 relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">It started with a headache and a washed-out dark mode.</h2>
                <div className="space-y-6 text-zinc-400 leading-relaxed">
                  <p>
                    As developers and designers, our monitors are our most important tools. Yet, most of us take them out of the box, plug them in, and accept the glaring blue light and blown-out contrast the manufacturer decided was "standard."
                  </p>
                  <p>
                    We realized that professional hardware calibration tools cost hundreds of dollars, and software alternatives were either completely outdated or locked behind subscriptions.
                  </p>
                  <p>
                    So, we built LUMA. A modern, web-first calibration suite that lives entirely in your browser. No downloads, no subscriptions, just pure mathematical accuracy applied to your display.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square md:aspect-auto md:h-full bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center p-8">
                {/* Stylized code block representation */}
                <div className="w-full h-full bg-[#0a0a0c] rounded-xl border border-zinc-800/50 p-6 font-mono text-sm shadow-2xl flex flex-col gap-3 relative overflow-hidden">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  </div>
                  <div className="text-blue-400">const <span className="text-white">vision</span> = <span className="text-yellow-300">new</span> <span className="text-green-400">CalibrationEngine</span>();</div>
                  <div className="text-zinc-500">// Target Delta E &lt; 2.0</div>
                  <div className="text-white">vision.<span className="text-blue-300">optimize</span>(&#123;</div>
                  <div className="text-white pl-4">gamma: <span className="text-orange-400">2.2</span>,</div>
                  <div className="text-white pl-4">whitePoint: <span className="text-orange-400">6500</span>, <span className="text-zinc-500">// D65</span></div>
                  <div className="text-white pl-4">eyeStrainProtection: <span className="text-orange-400">true</span></div>
                  <div className="text-white">&#125;);</div>
                  <div className="mt-auto text-green-400">✓ Display optimized successfully</div>
                  
                  {/* Subtle scanline effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Values Grid */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">The LUMA Standard</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard 
              icon={<Target className="w-6 h-6" />}
              title="Pixel Precision"
              desc="We believe the colors you code should be the exact colors your users see. No guesswork."
            />
            <ValueCard 
              icon={<Zap className="w-6 h-6" />}
              title="Zero Bloatware"
              desc="Everything runs client-side in your browser. We don't want access to your local machine."
            />
            <ValueCard 
              icon={<Shield className="w-6 h-6" />}
              title="Health First"
              desc="Proper gamma curves and contrast ratios are vital for preventing long-term macular fatigue."
            />
            <ValueCard 
              icon={<Code className="w-6 h-6" />}
              title="Developer First"
              desc="Built on a modern Next.js stack, optimized for the exact workflows power users rely on."
            />
          </div>
        </section>

        {/* 4. Bottom CTA */}
        <section className="text-center bg-blue-600 rounded-2xl p-12 relative overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.2)]">
          {/* Decorative shapes */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 rounded-full blur-2xl"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative z-10">Experience your monitor the way it was intended.</h2>
          <Link href="/tools" className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-zinc-100 px-4 md:px-8 py-3 rounded-lg font-bold transition-colors relative z-10 shadow-lg">
            GO TO TOOLS <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </div>
    </div>
  )
}

// --- Subcomponents ---

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 border border-zinc-800 rounded-xl bg-zinc-950 hover:border-zinc-700 transition-colors flex flex-col items-center text-center">
      <div className="mb-5 p-4 bg-zinc-900 rounded-full text-blue-500 border border-zinc-800 shadow-inner">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-3 text-white">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  )
}