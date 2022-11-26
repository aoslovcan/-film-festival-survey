interface Question {
  label: string
  questionId: string
  questionType: string
  required: boolean
  attributes?: { min: number; max: number } | null
}

export type Questions = Question[]

export interface Answer {
  questionId: string
  answer: string | number
}

export type Answers = Answer[]

export type PayloadAnswers = {
  data: {
    type: string
    attributes: {
      answers: Answers
    }
  }
}

export type HandleSubmit = (data: Answers) => void
