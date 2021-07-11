import { useParams } from 'react-router-dom'

import {
  useGetQuestionByIdQuery,
  usePostAnswerMutation,
} from '../../services/pollsApi'
import { calculatePercents } from '../../utils'

import { Loader, LoaderOverlay } from '../Loader'

import * as styles from './styles.css'

export const QuestionDetails = () => {
  // TODO: Define a type
  const { id } = useParams<any>()
  const { data, isLoading } = useGetQuestionByIdQuery(id)
  const [updateChoice, { isLoading: isVoting }] = usePostAnswerMutation()

  if (isLoading) {
    return <Loader />
  }

  return (
    <LoaderOverlay isLoading={isVoting} text="Voting...">
      <div className={styles.wrapper}>
        <h2>Question: {data?.question}</h2>
        <div className={styles.list}>
          {calculatePercents(data?.choices).map((choiceItem) => (
            <div className={styles.row} key={choiceItem.url}>
              <div className={styles.text}>
                <span>{choiceItem.choice}</span>
                <span>{choiceItem.votes}</span>
                <span>{choiceItem.percent}%</span>
                <button
                  className={styles.voteButton}
                  type="button"
                  onClick={() => updateChoice({ url: choiceItem.url })}
                >
                  Vote
                </button>
              </div>
              <i
                className={styles.votesMeter}
                style={{
                  width: `${choiceItem.percent}%`,
                }}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </LoaderOverlay>
  )
}
