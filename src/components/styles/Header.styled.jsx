import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
  color: ${(props) => props.color};
  text-shadow: ${({ textShadow }) => textShadow };
`

/*
// Nesting

import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: #ebfbff;
  padding: 40px 0;
  h1 {
    color: red;
  }
  &:hover {
    background-color: black;
  }
`
*/
