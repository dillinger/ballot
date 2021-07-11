import { Link } from 'react-router-dom'

import * as styles from './styles.css'

type HeaderProps = {
  pageTitle?: string
}

export function Header({ pageTitle }: HeaderProps) {
  return (
    <div className={styles.wrapprer}>
      <h1>
        <Link className={styles.createLink} to="/">Ballot</Link> {pageTitle && <span> | {pageTitle}</span>}
      </h1>
    </div>
  )
}
