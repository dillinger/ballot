import { QuestionList } from '../components/question-list/question-list'

import { ErrorBoundary } from '../components/error-boundary'

export const PageList = () => {
  return (
    <>
      <ErrorBoundary>
        <QuestionList />
      </ErrorBoundary>
    </>
  )
}
