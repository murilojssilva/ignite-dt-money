import styled from 'styled-components'

interface IPaginationItemProps {
  isSelected?: boolean
}

export const PaginationContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`

export const PaginationContent = styled.div`
  display: flex;
  gap: 1rem;
`

export const PaginationItem = styled.div<IPaginationItemProps>`
  padding: 1rem;
  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['gray-600']};
  }
  ${(props) =>
    props.isSelected && {
      background: `${props.theme['green-500']}`,
      ':hover': { background: `${props.theme['green-700']}` },
    }}
`
