import { CardContainer, CardHeader } from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

interface ICardProps {
  title: string
  value: string
  color: string
  backgroundColor: string
}

export function Card({ title, value, color, backgroundColor }: ICardProps) {
  return (
    <CardContainer backgroundColor={backgroundColor}>
      <CardHeader>
        <span>{title}</span>
        {title === 'Entradas' ? (
          <ArrowCircleUp size={32} color={color} />
        ) : title === 'Saídas' ? (
          <ArrowCircleDown size={32} color={color} />
        ) : (
          <CurrencyDollar size={32} color={color} />
        )}
      </CardHeader>
      <strong>{value}</strong>
    </CardContainer>
  )
}
