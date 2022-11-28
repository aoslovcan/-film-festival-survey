import React from 'react'
import { useLocation } from 'react-router'
import './SuccessPage.css'
import { Answer } from '../../types/types'
import { arrayOfNumber } from '../../helpers/commonFunc'
import { StarItem } from '../../components/SurveyForm/RatingArea/StarItem/StarItem'

export const SuccessPage = () => {
  const location = useLocation()

  const createStars = (n: number) => {
    return arrayOfNumber(n).map((i) => <StarItem key={i} color='orange' />)
  }

  return (
    <div className='container'>
      <div className='spaceBetween' />
      <div className='successfullyContent'>
        <p className='successfullyMessage'>Thank you for your feedback!!!</p>
        <div className='answers'>
          {location.state.attributes.answers.map((answer: Answer, i: number) => (
            <span key={i}>
              {typeof answer.answer === 'number' ? createStars(answer.answer) : answer.answer}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
