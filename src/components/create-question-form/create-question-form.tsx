import * as React from 'react'

import { useCreateQuestionMutation } from '../../services/polls-api'

export const CreateQuestionForm = () => {
  const [choices, setChoice] = React.useState<string[]>([''])
  const [question, setQuestion] = React.useState('')

  const [createQuestioin] = useCreateQuestionMutation()

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
    createQuestioin(payload)

    event.preventDefault()
  }

  function handleFormReset() {
    setChoice([''])
    setQuestion('')
  }

  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <label>question:</label>
          <input
            id="question"
            type="text"
            name="question"
            value={question}
            onChange={handleQuestionChange}
          />
        </div>
        {choices.map((choice, index) => {
          return (
            <div key={index}>
              <label>choices:</label>
              <input
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

        <button type="button" onClick={handleAddMoreChoices}>
          Add more
        </button>

        <button type="submit">Create</button>
        <button type="button" onClick={handleFormReset}>
          Clear
        </button>
      </form>
    </div>
  )
}
