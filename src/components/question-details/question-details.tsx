import { useParams } from 'react-router-dom'

import {
  useGetQuestionByIdQuery,
  usePostAnswerMutation,
} from '../../services/polls-api'
import { votesInPercents } from '../../utils'

import { Loader } from '../loader/loader'

export const QuestionDetails = () => {
  // TODO: Define a type
  const { id } = useParams<any>()
  const { data, isLoading } = useGetQuestionByIdQuery(id)
  const [updateChoice] = usePostAnswerMutation()

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <div>{data?.question}</div>
      <div>
        {data?.choices.map((item) => (
          <div key={item.url}>
            {item.votes} |{' '}
            {votesInPercents(
              item.votes,
              data.choices.reduce((acc, curr) => acc + curr.votes, 0)
            )}
            <button onClick={() => updateChoice({ url: item.url })}>
              {item.choice}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
