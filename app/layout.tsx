import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white min-h-screen font-sans selection:bg-blue-600">
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-zinc-800">
          <div className="text-2xl font-bold tracking-widest">LUMA</div>
          <div className="flex gap-8 text-sm font-medium text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <Link href="/product" className="hover:text-white transition-colors">PRODUCT</Link>
            <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
            <Link href="/tools" className="text-blue-500 hover:text-blue-400 transition-colors">TOOLS</Link>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-semibold transition-colors">
            UPGRADE YOUR SETUP
          </button>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}