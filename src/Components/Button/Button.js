import styled from 'styled-components'

import { SpinnerContainer } from '../Spinner/Spinner'

export  const BaseButton = styled.button`
    /* min-width: 165px; */
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 10px 0 10px;
    font-size: 15px;
    background-color: rgb(54, 54, 54);
    color: white;
    text-transform: uppercase;
    font-family: 'Red Hat Display';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: lightgrey;
        color: rgb(54, 54, 54);
        border: 1px solid black;
    }
`

export const GoogleButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;

    :hover {
       background-color: #357ae8;
       border: none;
}
`

export const Inverted = styled(BaseButton)`
    background-color: lightgrey;
    color: rgb(54, 54, 54);
    border: 1px solid black;

    &:hover {
        background-color: rgb(54, 54, 54);
        color: lightgrey;
        border: none;
}
`
export const ButtonSpinner = styled(SpinnerContainer)`
width: 30px;
height: 30px;
`
