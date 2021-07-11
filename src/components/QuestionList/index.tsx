import { Link } from 'react-router-dom'

import { useGetQuestionsQuery } from '../../services/pollsApi'
import { creationDate } from '../../utils'
import { LoaderOverlay } from '../Loader'

import * as styles from './styles.css'

export const QuestionList = () => {
  const {
    data = [],
    error,
    isLoading,
  } = useGetQuestionsQuery(1, {
    refetchOnMountOrArgChange: true,
    skip: false,
  })

  if (error) {
    throw Error('ERROR')
  }

  return (
    <LoaderOverlay text="Loading..." isLoading={isLoading}>
      <div className={styles.questionList}>
        {data.map((item) => (
          <Link to={item.url} key={item.url} className={styles.questionBox}>
            <div className={styles.questionTitle}>{item.question}</div>
            <div className={styles.buttomRow}>
              <div className={styles.questionVotes}>
                Votes: {item.choices.reduce((acc, curr) => acc + curr.votes, 0)}
              </div>
              <div className={styles.questionPublishDate}>
                {creationDate(item.published_at).format('MMM D, YYYY h:mm A')}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </LoaderOverlay>
  )
}
