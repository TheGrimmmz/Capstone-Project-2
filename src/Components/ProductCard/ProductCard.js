import Button from '../Button/Button.jsx'
import styled from 'styled-components'

export const ProductCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover {
        img {
            opacity: 0.8;
        }

        button {
            opacity: 0.85;
            display: flex;
        }
    }
`

export const Img = styled.img`
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
`

export const Footer = styled.div`
    width: 85%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
`

export const Name = styled.span`
    width: 90%;
    margin-bottom: 15px;
`

export const Price = styled.span`
    width: 10%;
`

export const AddButton = styled(Button)`
    width: 90%;
    opacity: 0.7;
    position: absolute;
    top: 60%;
    display: none;
`
