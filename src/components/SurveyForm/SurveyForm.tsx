import React, { useState } from 'react'
import { RatingArea } from './RatingArea/RatingArea'
import { Questions } from '../../types/types'
import './SurveyForm.css'
import { useFocus } from '../../helpers/customHooks'

interface SurveyFormProps {
  questions: Questions
  // eslint-disable-next-line @typescript-eslint/ban-types
  getFormData?: Function
}

export const SurveyForm = ({ questions }: SurveyFormProps) => {
  const [rating, setRating] = useState<number | null>(1)
  const [film, setFilm] = useState<string>('')

  const focus = useFocus()

  const getRating = (data: number) => {
    setRating(data)
  }

  return (
    <div className='survey-form container'>
      {questions?.map(({ label, questionType, attributes }, i) => (
        <div key={i} className='form-element'>
          <label>{label}</label>
          {questionType === 'text' ? (
            <input
              ref={focus}
              type={questionType}
              onChange={(e) => setFilm(e.target.value)}
              value={film}
            />
          ) : (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <RatingArea starNumber={attributes.max | 5} getRatingNumber={getRating} />
          )}
        </div>
      ))}
      <button className='btn submitButton'>Submit</button>
    </div>
  )
}
