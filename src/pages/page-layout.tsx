import * as React from 'react'

import { wrapper } from './page-layout.css'

type PageLayoutProps = {
  header?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
}

export function PageLayout({ header, children, footer }: PageLayoutProps) {
  return (
    <>
      {header && <header className={wrapper}>{header}</header>}
      <main>{children}</main>
      {footer && <footer>{footer}</footer>}
    </>
  )
}
