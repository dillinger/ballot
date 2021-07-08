import { CreateQuestionForm } from '../components/create-question-form/create-question-form'

import { wrapper } from './create.css'

export const Create = () => {
  return (
    <div className={wrapper}>
      <CreateQuestionForm />
    </div>
  )
}
