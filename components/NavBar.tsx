import Link from 'next/link'
import React from 'react'
import styles from './NavBar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <nav className={styles.menu}>
      {menuItems.map(({href, text}) => <ActiveLink key={href} href={href} text={text} />)}
    </nav>
  )
}
