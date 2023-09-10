import styled from 'styled-components'

export const DropDownContainer = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: lightgrey;
top: 90px;
right: 40px;
z-index: 5;

button {
    margin-top: auto;
}
`

export const Cart = styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: scroll;
`

export const EmptyMessage = styled.span`
font-size: 18px;
margin: 50px auto;
`

export const Total = styled.div`
display: flex;
justify-content: center;
font-size: 20px;
margin-top: 7px;
`
