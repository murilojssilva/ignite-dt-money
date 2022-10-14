import styled from 'styled-components'

interface ICardContainerProps {
  backgroundColor: string
}

export const CardContainer = styled.div<ICardContainerProps>`
  background: ${(props) => props.backgroundColor};
  border-radius: 6px;
  padding: 2rem;

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme['gray-300']};
`
