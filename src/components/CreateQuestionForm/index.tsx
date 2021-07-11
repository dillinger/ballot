import * as React from 'react'
import { useCreateQuestionMutation } from '../../services/pollsApi'

import { LoaderOverlay } from '../Loader'

import * as styles from './styles.css'
import { button, buttonType } from '../../theme.css'

export const CreateQuestionForm = () => {
  const NUMBER_OF_ANSWERS = 3
  const INITIAL_ANSWERS_ARRAY = Array(NUMBER_OF_ANSWERS).fill('')
  const [choices, setChoice] = React.useState<string[]>(INITIAL_ANSWERS_ARRAY)
  const [question, setQuestion] = React.useState('')

  const [createQuestion, { isLoading: isCreating, error }] =
    useCreateQuestionMutation()

  function handleQuestionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuestion(event.target.value)
  }

  function handleChoiceChange(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    choices.splice(index, 1, event.target.value)
    setChoice([...choices])
  }

  function handleAddMoreChoices() {
    setChoice(choices.concat(['']))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const payload = {
      question,
      choices,
    }
    createQuestion(payload).then(() => {
      handleFormReset()
    })

    event.preventDefault()
  }

  function handleFormReset() {
    setChoice(INITIAL_ANSWERS_ARRAY)
    setQuestion('')
  }

  return (
    <LoaderOverlay isLoading={isCreating} text="Creating...">
      {error && (
        <div className={styles.error}>
          Something went wrong. Please try again!
        </div>
      )}
      <div className={styles.wrapper}>
        <form noValidate onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <label className={styles.lable}>Question:</label>
            <input
              className={styles.input}
              id="question"
              type="text"
              name="question"
              value={question}
              onChange={handleQuestionChange}
            />
          </div>

          <div className={styles.formRow}>
            <button
              className={`${button} ${buttonType['empty']}`}
              type="button"
              onClick={handleAddMoreChoices}
            >
              Add more answer
            </button>
          </div>

          {choices.map((choice, index) => {
            return (
              <div key={index} className={styles.formRow}>
                <label className={styles.lable}>Answer {index + 1}:</label>
                <input
                  className={styles.input}
                  type="text"
                  name="choice"
                  value={choice}
                  onChange={(e) => {
                    handleChoiceChange(e, index)
                  }}
                />
              </div>
            )
          })}

          <div className={styles.buttonRow}>
            <button
              className={`${button} ${buttonType['submit']}`}
              type="submit"
            >
              Create
            </button>
            <button
              className={`${button} ${buttonType['empty']}`}
              type="button"
              onClick={handleFormReset}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </LoaderOverlay>
  )
}
