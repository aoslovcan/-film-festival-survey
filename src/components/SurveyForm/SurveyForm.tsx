import React, { useState } from 'react'
import { RatingArea } from './RatingArea/RatingArea'
import { Answer, Answers, Questions } from '../../types/types'
import './SurveyForm.css'
import { useFocus } from '../../helpers/customHooks'

interface SurveyFormProps {
  questions: Questions
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleSubmit: Function
}

export const SurveyForm = ({ questions, handleSubmit }: SurveyFormProps) => {
  const [rating, setRating] = useState<number>(1)
  const [answer, setAnswer] = useState<Answer>({ answer: '', questionId: '' })

  const focus = useFocus()

  const getRating = (data: number) => {
    setRating(data)
  }

  const handleClick = () => {
    const answers: Answers = [answer, { answer: rating, questionId: 'rating' }]
    handleSubmit(answers)
  }

  return (
    <div className='survey-form container'>
      {questions?.map(({ label, questionType, attributes }, i) => (
        <div key={i} className='form-element'>
          <label>{label}</label>
          {questionType === 'rating' ? (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <RatingArea starNumber={attributes.max} getRatingNumber={getRating} />
          ) : (
            <input
              id={questionType}
              ref={focus}
              type={questionType}
              onChange={(e) => setAnswer({ answer: e.target.value, questionId: e.target.id })}
              value={answer.answer}
            />
          )}
        </div>
      ))}
      <button onClick={handleClick} className='btn submitButton'>
        Submit
      </button>
    </div>
  )
}
