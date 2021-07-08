import * as React from 'react'

type PageLayoutProps = {
  header?: React.ReactNode
  main: React.ReactNode
  footer?: React.ReactNode
}

export function PageLayout({ header, main, footer }: PageLayoutProps) {
  return (
    <>
      {header && <header>{header}</header>}
      <main>{main}</main>
      {footer && <footer>{footer}</footer>}
    </>
  )
}
