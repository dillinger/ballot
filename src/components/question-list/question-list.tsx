import { Link } from 'react-router-dom'

import { useGetQuestionsQuery } from '../../services/polls-api'
import { creationDate } from '../../utils'

import * as styles from './question-list.css'

export const QuestionList = () => {
  const {
    data = [],
    error,
    isLoading,
  } = useGetQuestionsQuery(1, {
    refetchOnMountOrArgChange: true,
    skip: false,
  })

  if (isLoading) {
    return <>Loading...</>
  }

  if (error) {
    throw Error('ERROR')
  }

  return (
    <>
      <div className={styles.questionList}>
        {data.map((item) => (
          <Link to={item.url} key={item.url} className={styles.questionBox}>
            <div className={styles.questionTitle}>{item.question}</div>
            <div className={styles.questionPublishDate}>
              {creationDate(item.published_at).format('DD-MM-YYYY')}
            </div>
            <div className={styles.questionVotes}>
              {item.choices.reduce((acc, curr) => acc + curr.votes, 0)}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
