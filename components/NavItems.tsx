"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'  
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItem = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" } // also fix missing "/" and consistent casing
]

const NavItems = () => {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-4">
      {NavItem.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(
            pathname === href
              ? "text-primary font-semibold"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default NavItems
