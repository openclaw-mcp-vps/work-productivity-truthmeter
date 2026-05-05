import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WorkTruth — Anonymous Productivity Reality Tracker',
  description: 'Anonymous platform where developers track actual vs reported work hours to reveal industry patterns.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0ccae2a5-72a7-47cf-9f61-ff39dd0bde2b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
