import styled from 'styled-components'
import {ReactComponent as Icon} from '../../Assets/shopping-bag.svg'

export const IconContainer = styled.div`
width: 40px;
height: 40px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

export const ShopIcon = styled(Icon)`
width: 24px;
height: 24px;
`

export const ItemCount = styled.span`
position: absolute;
font-size: 10px;
font-weight: bold;
bottom: 11px;
`
