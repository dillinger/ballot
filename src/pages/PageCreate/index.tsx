import { CreateQuestionForm } from '../../components/CreateQuestionForm'
import { ErrorBoundary } from '../../components/ErrorBoundary'

export const PageCreate = () => {
  return (
    <div>
      <ErrorBoundary>
        <CreateQuestionForm />
      </ErrorBoundary>
    </div>
  )
}
