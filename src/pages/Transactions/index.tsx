import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransctionsList } from '../../components/TransactionsList'
import { TransactionContainer } from './styles'

export function Transactions() {
  return (
    <TransactionContainer>
      <Header />
      <Summary />
      <TransctionsList />
    </TransactionContainer>
  )
}
