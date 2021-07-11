import { Link } from 'react-router-dom'

import * as styles from './styles.css'

export const HomePage = () => {
  return <div className={styles.wrapper}>
    <Link className={styles.linkButton} to="/create">Create</Link>
    <Link className={styles.linkButton} to="questions">List of polls</Link>
    {/* <Link></Link> */}
  </div>
}
