import { QuestionList } from '../../components/QuestionList'

import { ErrorBoundary } from '../../components/ErrorBoundary'

export const PageList = () => {
  return (
    <>
      <ErrorBoundary>
        <QuestionList />
      </ErrorBoundary>
    </>
  )
}
