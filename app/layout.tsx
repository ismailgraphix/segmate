import type React from "react"
import "./globals.css"
import { poppins, inter } from "../font"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background font-inter text-text antialiased">
       
          {children}
       
      </body>
    </html>
  )
}

