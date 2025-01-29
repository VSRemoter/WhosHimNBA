"use client"
import React from "react"

export function SparklesPreview() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-primary to-accent flex flex-col items-center justify-center overflow-hidden p-12">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white mb-8">
        WhosHim NBA
      </h1>
      <p className="text-2xl md:text-3xl lg:text-4xl text-center text-white max-w-4xl">
        Modelling player performances using Advanced Statistics & betting odds
      </p>
    </div>
  )
}

