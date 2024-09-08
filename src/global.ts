import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*, body{
  margin: 0;
  padding: 0;
  -webkit-appearance: none; /* Para desativar o estilo padrão no Safari */
  -moz-appearance: none; /* Para desativar o estilo padrão no Firefox */
  appearance: none; /* Para desativar o estilo padrão em outros navegadores */
}`