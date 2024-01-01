'use client'
import React from 'react'
import { Volume2, VolumeX } from 'react-feather'

import VisuallyHidden from '../VisuallyHidden'
import MaxWidthWrapper from '../MaxWidthWrapper'
import useSoundContext from '../useSoundContext'
import styles from './Header.module.css'

function Header() {
  const id = React.useId()
  const { soundOn, setSoundOn } = useSoundContext()

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href='/'>Kool Website</a>

        <button
          onClick={() => {
            console.log(setSoundOn, soundOn)
            setSoundOn(!soundOn)
          }}
        >
          {soundOn ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {soundOn ? 'Disable sound effects' : 'Enable sound effects'}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
