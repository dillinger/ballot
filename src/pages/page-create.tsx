import { CreateQuestionForm } from '../components/create-question-form/create-question-form'
import { ErrorBoundary } from '../components/error-boundary'

import { wrapper } from './create.css'

export const PageCreate = () => {
  return (
    <div className={wrapper}>
      <ErrorBoundary>
        <CreateQuestionForm />
      </ErrorBoundary>
    </div>
  )
}
