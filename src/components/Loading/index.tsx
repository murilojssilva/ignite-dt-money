import { CircleNotch } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { LoadingContainer } from './styles'

export function Loading() {
  const theme = useTheme()
  return (
    <LoadingContainer>
      <CircleNotch color={theme['green-300']} size={32}>
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="4s"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="5s"
          from="0 0 0"
          to="360 0 0"
          repeatCount="indefinite"
        ></animateTransform>
      </CircleNotch>
    </LoadingContainer>
  )
}
