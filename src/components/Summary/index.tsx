import { useTheme } from 'styled-components'
import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'
import { Card } from './Card'
import { SummaryContainer } from './styles'

export function Summary() {
  const theme = useTheme()

  const summary = useSummary()
  return (
    <SummaryContainer>
      <Card
        title="Entradas"
        value={priceFormatter.format(summary.income)}
        color={theme['green-500']}
        backgroundColor={theme['gray-600']}
      />
      <Card
        title="Saídas"
        value={priceFormatter.format(summary.outcome)}
        color={theme['red-300']}
        backgroundColor={theme['gray-600']}
      />
      <Card
        title="Total"
        value={priceFormatter.format(summary.total)}
        color={theme.white}
        backgroundColor={theme['green-500']}
      />
    </SummaryContainer>
  )
}
