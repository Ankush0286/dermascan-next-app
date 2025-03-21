"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon, User } from "lucide-react"
import { useTheme } from "next-themes"
import SignInModal from "@/components/sign-in-modal"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const openSignIn = () => {
    setIsSignInOpen(true)
    closeMenu()
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "AI Analysis", path: "/analysis" },
    { name: "Consultation", path: "/consultation" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <span className="text-primary-foreground font-bold">DS</span>
              </div>
              <span className="font-bold text-xl hidden sm:inline-block">DermaScan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) =>
              item.path === "/" ? (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={closeMenu}
                  className={`text-sm font-medium transition-colors hover:text-primary ${pathname === item.path ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={closeMenu}
                  className={`text-sm font-medium transition-colors hover:text-primary ${pathname === item.path ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  {item.name}
                </Link>
              )
            )}

          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              asChild
              className="hidden md:flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              onClick={openSignIn}
            >
              <div className="flex items-center gap-2 cursor-pointer">
                <User className="h-4 w-4" />
                Sign In
              </div>
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
            <nav className="container flex flex-col gap-6 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={closeMenu}
                  className={`text-lg font-medium transition-colors hover:text-primary ${pathname === item.path ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mt-4" onClick={openSignIn}>
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </nav>
          </div>
        )}
      </header>

      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </>
  )
}

