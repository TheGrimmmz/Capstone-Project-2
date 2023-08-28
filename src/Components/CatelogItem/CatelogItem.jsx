import {CatelogBodyContainer, CatelogContainer, BackgroundImage} from './CatelogItem.js'

const CatelogItem = ({imageUrl, title}) => {
    return (
        <CatelogContainer to={`/shop/${title.toLowerCase()}`}>
          <BackgroundImage imageUrl={imageUrl}/>
          <CatelogBodyContainer>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </CatelogBodyContainer>
        </CatelogContainer>
    )
}

export default CatelogItem;
