import React, { useState } from 'react'
import { StarItem } from './StarItem/StarItem'
import { arrayOfNumber } from '../../../helpers/commonFunc'
import { RatingNumber } from '../../../types/types'

interface RatingAreaProps {
  starNumber: number
  getRatingNumber: RatingNumber
}

export const RatingArea = ({ starNumber, getRatingNumber }: RatingAreaProps) => {
  const [rating, setRating] = useState(0)

  const changeRating = (newRating: number) => {
    setRating(newRating)
    getRatingNumber(newRating)
  }

  return (
    <div className='starContainer' data-testid='rating-area'>
      {arrayOfNumber(starNumber).map((value) => (
        <StarItem key={value} clicked={value <= rating} onChange={() => changeRating(value)} />
      ))}
    </div>
  )
}
