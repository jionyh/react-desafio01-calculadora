import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #CACACA;
display:flex;
align-items: center;
justify-content: center
`

export const Content = styled.div`
background-color: #CACACA;
max-width: 350px;
width: 50%;
`

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4,auto);
`

export const Column = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center
`