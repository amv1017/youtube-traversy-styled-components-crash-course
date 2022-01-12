import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  color: ${(props) => props.color};
  padding: 40px 0;
  text-shadow: ${({ textShadow }) => textShadow };
`

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`

export const Logo = styled.img`
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
