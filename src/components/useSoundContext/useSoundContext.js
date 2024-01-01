'use client'
import React, { createContext, useState, useContext } from 'react'

export const SoundContext = createContext()

export function SoundProvider({ children }) {
  const [soundOn, setSoundOn] = useState(true)

  const value = {
    soundOn,
    setSoundOn,
  }

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
}

export default function useSoundContext() {
  const data = useContext(SoundContext)

  if (!data) {
    throw new Error('butt cheeks')
  }

  return data
}
