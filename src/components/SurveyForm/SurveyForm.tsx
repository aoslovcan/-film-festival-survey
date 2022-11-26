import React, { useState } from 'react'
import { RatingArea } from './RatingArea/RatingArea'
import { Answer, Answers, HandleSubmit, Questions } from '../../types/types'
import './SurveyForm.css'
import { useFocus } from '../../helpers/customHooks'
import { constants } from '../../constants/constants'

interface SurveyFormProps {
  questions: Questions
  handleSubmit: HandleSubmit
}

export const SurveyForm = ({ questions, handleSubmit }: SurveyFormProps) => {
  const [rating, setRating] = useState<number>(0)
  const [answer, setAnswer] = useState<Answer>({ answer: '', questionId: '' })

  const focus = useFocus()

  const getRating = (data: number) => {
    setRating(data)
  }

  const handleClick = () => {
    const answers: Answers = [answer, { answer: rating, questionId: 'rating' }]
    handleSubmit(answers)
  }

  const checkValidation = (validate: boolean) => {
    if (!validate) {
      return constants.ERROR_MESSAGE
    }
    return null
  }

  const returnErrorMessage = (field: string) => {
    switch (field) {
      case 'rating':
        return checkValidation(rating !== 0)
      case 'answer':
        return checkValidation(!!answer.answer)
    }
  }

  const ratingErrorMessage = returnErrorMessage('rating')
  const answerErrorMessage = returnErrorMessage('answer')
  const disableButton = rating <= 0 || !answer?.answer

  return (
    <div className='survey-form container'>
      {questions?.map(({ label, questionType, attributes }, i) => (
        <div key={i} className='form-element'>
          <label>{label}</label>
          {questionType === 'rating' ? (
            <>
              <RatingArea starNumber={attributes!.max} getRatingNumber={getRating} />
              <span className='errorMessage'>{ratingErrorMessage}</span>
            </>
          ) : (
            <>
              <input
                id={questionType}
                ref={focus}
                type={questionType}
                onChange={(e) => setAnswer({ answer: e.target.value, questionId: e.target.id })}
                value={answer.answer}
              />
              <span className='errorMessage'>{answerErrorMessage}</span>
            </>
          )}
        </div>
      ))}
      <button onClick={handleClick} disabled={disableButton} className='btn submitButton'>
        Submit
      </button>
    </div>
  )
}
