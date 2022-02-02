import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  color: ${({ color }) => color || '#333'};
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
 
  &:hover {
    filter: brightness(0.95);
  }

  &:active {
    transform: scale(0.98);
    filter: brightness(0.90);
  }
`
