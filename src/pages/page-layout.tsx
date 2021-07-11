import * as React from 'react'

type PageLayoutProps = {
  header?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
}

export function PageLayout({ header, children, footer }: PageLayoutProps) {
  return (
    <>
      {header && <header>{header}</header>}
      <main>{children}</main>
      {footer && <footer>{footer}</footer>}
    </>
  )
}
