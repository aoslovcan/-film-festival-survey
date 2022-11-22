import { useEffect, useRef } from 'react'

export const useFocus = () => {
  const focusElement = useRef<HTMLInputElement>(null)

  useEffect(() => {
    focusElement.current?.focus()
  })

  return focusElement
}
