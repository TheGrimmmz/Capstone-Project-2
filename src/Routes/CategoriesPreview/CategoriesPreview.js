import { useSelector } from 'react-redux';
import { selectCatMap, selectIsLoading } from '../../Store/Categories/CategorySelector';
import Spinner from '../../Components/Spinner/Spinner.jsx';
import CatPreview from '../../Components/CatPreview/CatPreview.jsx';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCatMap)
    const isLoading = useSelector(selectIsLoading)

    return (
      <>
        {isLoading ?
          <Spinner/>:
          (Object.keys(categoriesMap).map((title) => {
              const products = categoriesMap[title];
              return (
                <CatPreview key={title} title={title} products={products}/>
                )
              }
            )
          )
        }
      </>
    )
}

export default CategoriesPreview;
