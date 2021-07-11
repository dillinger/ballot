import { Link } from 'react-router-dom'

import { linkButton } from '../../theme.css'
import * as styles from './styles.css'

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={linkButton} to="/create">
        Create
      </Link>
      <Link className={linkButton} to="questions">
        List of polls
      </Link>
      {/* <Link></Link> */}
    </div>
  )
}
