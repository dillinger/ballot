import { QuestionList } from '../components/question-list/question-list'

import { ErrorBoundary } from '../components/error-boundary'

export const List = () => {
  return (
    <>
      <ErrorBoundary>
        <QuestionList />
      </ErrorBoundary>
    </>
  )
}
