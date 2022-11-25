import React, { FC } from 'react'
import { FaStar } from 'react-icons/fa'
import './StarItem.css'

interface StarItemProps {
  clicked?: boolean
  onChange?: React.MouseEventHandler
  color?: string
}

export const StarItem: FC<StarItemProps> = ({ clicked, onChange, color }) => {
  const setStarColor = () => {
    if (color) {
      return color
    }

    if (clicked) {
      return '#ffa500'
    }

    return '#808080'
  }

  return (
    <>
      <FaStar onClick={onChange} color={setStarColor()} />
    </>
  )
}
