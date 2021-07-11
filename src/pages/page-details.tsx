import { QuestionDetails } from '../components/question-details/question-details'
import { ErrorBoundary } from '../components/error-boundary'

export function PageDetails() {
  return (
    <>
      <ErrorBoundary>
        <QuestionDetails />
      </ErrorBoundary>
    </>
  )
}
