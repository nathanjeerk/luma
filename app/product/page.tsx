import { ShoppingCart, Star, Monitor, ShieldCheck, Zap, ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'

// Mock Database of Products
const products = [
  {
    id: 'luma-pro-27',
    name: 'LUMA Pro 27"',
    tagline: 'The Developer Sweet Spot',
    price: '$699',
    badge: 'BEST SELLER',
    specs: ['4K UHD Resolution', 'IPS Black Panel', '60Hz Refresh Rate', 'ΔE < 1.5 Calibration'],
    description: 'Perfectly balanced for text clarity and color accuracy. Anti-glare coating and deep blacks reduce eye strain during long coding sessions.',
  },
  {
    id: 'luma-max-32',
    name: 'LUMA Max 32"',
    tagline: 'The Designer Powerhouse',
    price: '$1,299',
    badge: 'NEW',
    specs: ['6K Retina Resolution', 'Mini-LED Backlight', '120Hz ProMotion', '99% DCI-P3'],
    description: 'Uncompromising screen real estate and color depth. See your UI designs exactly as they will appear on the latest flagship devices.',
  },
  {
    id: 'luma-flow-27',
    name: 'LUMA Flow 27"',
    tagline: 'For The Fast-Paced Terminal',
    price: '$899',
    badge: '',
    specs: ['1440p Resolution', 'OLED Panel', '144Hz Refresh Rate', '0.03ms Response'],
    description: 'Buttery smooth scrolling and absolute true blacks. An OLED experience designed specifically to eliminate motion blur in fast-moving text environments.',
  }
]

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-100px)]">
      <div className="max-w-7xl mx-auto px-8 py-16 w-full">
        
        {/* 1. Header Section */}
        <div className="mb-16 border-b border-zinc-800 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide">
            LUMA HARDWARE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Displays engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              absolute precision.
            </span>
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Stop fighting factory defaults. Every LUMA monitor is individually hardware-calibrated before shipping, guaranteeing perfect gamma, zero eye strain, and pixel-perfect color accuracy out of the box.
          </p>
        </div>

        {/* 2. Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* 3. The LUMA Hardware Guarantee */}
        <section className="bg-zinc-950 border border-zinc-800 rounded-2xl p-10 md:p-16 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[100px] pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold mb-12 text-center relative z-10">Why choose a LUMA Display?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            <div className="space-y-4">
              <ShieldCheck className="w-8 h-8 text-blue-500" />
              <h3 className="font-semibold text-lg">Zero Dead Pixel Guarantee</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We inspect every single panel. If you find even one dead or stuck pixel within the first 3 years, we replace the monitor overnight. No questions asked.
              </p>
            </div>
            <div className="space-y-4">
              <Monitor className="w-8 h-8 text-blue-500" />
              <h3 className="font-semibold text-lg">Built-in Hardware LUTs</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Calibration is stored on the monitor itself, not your OS. Switch between your Mac, PC, and Linux machines and the colors remain flawlessly consistent.
              </p>
            </div>
            <div className="space-y-4">
              <Zap className="w-8 h-8 text-blue-500" />
              <h3 className="font-semibold text-lg">Single Cable Setup</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                100W Power Delivery, 4K DisplayPort alt-mode, and a built-in USB hub. Connect one Thunderbolt cable to your laptop and your entire desk is ready.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

// --- Subcomponents ---

function ProductCard({ product }: { product: any }) {
  return (
    <div className="flex flex-col border border-zinc-800 rounded-2xl bg-zinc-950/50 hover:bg-zinc-900 overflow-hidden transition-all duration-300 group hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
      
      {/* Product Image Placeholder */}
      <div className="relative aspect-[4/3] bg-zinc-900 flex items-center justify-center p-8 border-b border-zinc-800">
        {product.badge && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold tracking-wider rounded">
            {product.badge}
          </div>
        )}
        <Monitor className="w-24 h-24 text-zinc-700 group-hover:text-zinc-500 transition-colors" />
        <span className="absolute bottom-4 right-4 text-zinc-600 font-mono text-xs">Product Image</span>
      </div>

      {/* Product Details */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-2">
          <h2 className="text-2xl font-bold text-white">{product.name}</h2>
          <p className="text-blue-400 text-sm font-medium">{product.tagline}</p>
        </div>
        
        <p className="text-zinc-400 text-sm my-6 leading-relaxed flex-grow">
          {product.description}
        </p>

        {/* Specs List */}
        <ul className="space-y-3 mb-8">
          {product.specs.map((spec: string, i: number) => (
            <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              {spec}
            </li>
          ))}
        </ul>

        {/* Price & Actions */}
        <div className="mt-auto pt-6 border-t border-zinc-800/50">
          <div className="flex items-end justify-between mb-4">
            <span className="text-zinc-500 text-sm">Starting at</span>
            <span className="text-2xl font-bold text-white">{product.price}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-lg text-sm font-semibold transition-colors">
              DETAILS
            </button>
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-semibold transition-colors shadow-lg">
              <ShoppingCart className="w-4 h-4" /> BUY
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}