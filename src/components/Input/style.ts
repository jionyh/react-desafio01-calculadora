import styled from 'styled-components'

export const InputContainer = styled.div`
width: 100%;
height: 75px;
background-color: #555555;
display:flex;
align-items: center;
justify-content: flex-end;
font-size: 24px;
font-family: 'Roboto';
padding: 10px 0;

input{
  width: 100%;
  height: 75px;
  background-color: #555555;
  border: none;
  padding: 0 10px;
  text-align:right;
  color: #FFFFFF;
  border: 0;
  outline: none;
  box-shadow: none;
  :focus{
    outline: none;
  }

  font-size: 30px;
font-family: 'Roboto';
text-overflow: clip;
}

`