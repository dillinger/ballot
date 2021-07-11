import { QuestionDetails } from '../../components/QuestionDetails'
import { ErrorBoundary } from '../../components/ErrorBoundary'

export function PageDetails() {
  return (
    <>
      <ErrorBoundary>
        <QuestionDetails />
      </ErrorBoundary>
    </>
  )
}
