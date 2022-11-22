import React, { FC } from 'react'
import { FaStar } from 'react-icons/fa'
import './StarItem.css'

interface StarItemProps {
  clicked: boolean
  onChange: React.MouseEventHandler
}

export const StarItem: FC<StarItemProps> = ({ clicked, onChange }) => {
  return (
    <>
      <FaStar onClick={onChange} color={clicked ? '#ffa500' : '#808080'} />
    </>
  )
}
