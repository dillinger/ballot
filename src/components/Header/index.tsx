import { Link } from 'react-router-dom'

import * as styles from './styles.css'

type HeaderProps = {
  title?: string
}

export function Header({ title }: HeaderProps) {
  return (
    <div className={styles.wrapprer}>
      <h1>
        <Link className={styles.link} to="/">
          Ballot
        </Link>{' '}
        {title && <span className={styles.pageName}> {title}</span>}
      </h1>
    </div>
  )
}
