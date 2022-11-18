interface Question {
  label: string
  questionId: string
  questionType: string
  required: boolean
  attributes?: { min: number; max: number } | null
}

export type Questions = Question[]
