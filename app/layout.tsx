import './globals.css'
import Navigation from './components/Navigation' // Adjust path if you didn't create a components folder

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white min-h-screen font-sans selection:bg-blue-600">
        <Navigation />
        <main className="border-t border-zinc-900">{children}</main>
      </body>
    </html>
  )
}