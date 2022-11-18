import React, { useState } from 'react'
import { StarItem } from './StarItem/StarItem'
import { arrayOfNumber } from '../../../helpers/commonFunc'

interface RatingAreaProps {
  starNumber: number
  // eslint-disable-next-line @typescript-eslint/ban-types
  getRatingNumber: Function
}

export const RatingArea = ({ starNumber, getRatingNumber }: RatingAreaProps) => {
  const [rating, setRating] = useState(1)

  const changeRating = (newRating: number) => {
    setRating(newRating)
    getRatingNumber(newRating)
  }

  return (
    <div className='starContainer'>
      {arrayOfNumber(starNumber).map((value) => (
        <StarItem key={value} clicked={value <= rating} onChange={() => changeRating(value)} />
      ))}
    </div>
  )
}
