import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Bebas_Neue, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Anil | Fitness Enthusiast",
  description: "Personal portfolio of Anil, a fitness enthusiast and gym trainer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bebas.variable} ${poppins.variable} font-poppins`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
