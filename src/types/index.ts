export interface Choice {
  choice: string
  url: string
  votes: number
}

export interface Question {
  choices: Choice[]
  published_at: string
  question: string
  url: string
}

export interface CreateQuestion {
  question: string
  choices: string[]
}

export interface UpdateChoice {
  url: string
}
