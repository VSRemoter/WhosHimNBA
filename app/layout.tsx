import type React from "react"
import { Inter } from "next/font/google"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "WhosHim NBA",
  description: "Modelling Player Performances Using Advanced Statistics & Betting Odds",
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-background text-text min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

