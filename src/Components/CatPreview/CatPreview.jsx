import ProductCard from '../ProductCard/ProductCard.jsx'
import {CatPreviewContainer, Title, Preview} from './CatPreview.js'

const CatPreview = ({title, products}) => {
    return (
        <CatPreviewContainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
                <hr/>
            </h2>
            <Preview>
                {products
                .filter((_, idx) => idx < 6)
                .map((product) =>
                <ProductCard key={product.id} product={product}/>
                )}
            </Preview>
        </CatPreviewContainer>
    )
}

export default CatPreview;
