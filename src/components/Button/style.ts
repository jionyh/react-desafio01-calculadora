import styled from 'styled-components'

type ButtonContainerProps = {
  zeroButton?: boolean;
  equalButton?: boolean;
  clearButton?:boolean
  functionButton?:boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 20px;
  border: 1px solid #565656;
  background-color: ${({functionButton})=> functionButton ? '#343434':'#111111' };
  color: #f6f6f6;
  font-size: 24px;
  font-weight: 700;
  flex:1;
  
  cursor: pointer;  

  &:hover{
    opacity: 0.9
  }

  ${({ zeroButton, equalButton, clearButton }) =>
    zeroButton
      ? 'grid-column: span 2;'
      : equalButton
      ? 'grid-row: span 2; grid-column: 4; background-color: #435484'
      : clearButton
      ? 'grid-column: span 2'
      : ''}
`