import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from '../../Components/ProductCard/ProductCard.jsx'
import Spinner from '../../Components/Spinner/Spinner.jsx';
import { selectCatMap, selectIsLoading } from '../../Store/Categories/CategorySelector';
import {CategoryContainer, CategoryTitle} from './Category.js'

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCatMap)
    const isLoading = useSelector(selectIsLoading)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=> {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
    <>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        <hr/>
        <br/>
        {isLoading ? <Spinner/> :
            <CategoryContainer>
                {products && products.map((product) => <ProductCard key={product.id} product={product}/>)}
            </CategoryContainer>
        }
    </>
  )
}

export default Category;
