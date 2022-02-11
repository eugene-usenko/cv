import React from 'react'
import styles from './Header.module.css'

interface HeaderProps {
  text: string
}

export const Header = ({ text }: HeaderProps) => {
  return (
    <div className='text-center text-3xl rounded-lg font-extrabold mb-3'>
      {text}
    </div>
  )
}
