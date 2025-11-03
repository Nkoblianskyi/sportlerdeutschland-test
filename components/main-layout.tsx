"use client"

import type React from "react"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full overflow-x-hidden bg-black md:bg-[url('/images/stadium-background.jpg')] md:bg-cover md:bg-center md:bg-fixed md:bg-no-repeat">
      <div className="md:bg-black/70">
        <div className="container mx-auto px-1 max-w-[1580px] relative">
          <div className="grid grid-cols-1 gap-1">
            {/* Center Column - Hero + List */}
            <div className="w-full min-w-0 px-1">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
