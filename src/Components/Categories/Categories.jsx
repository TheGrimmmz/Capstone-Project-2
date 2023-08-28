import CatelogItem from "../CatelogItem/CatelogItem.jsx"
import {CategoriesContainer} from './Categories.js'

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://m.media-amazon.com/images/I/71F6X0Vb+nL._AC_UY350_.jpg",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://img.freepik.com/premium-photo/urban-young-man-hipster-oversize-leather-jacket-vintage-jeans-with-hairstyle-walks-street-near-parking-lot-american-guy-trendy-clothes-outdoors-casual-fashion-wear-youth-menswear_338491-8923.jpg?w=2000",
  },
  {
    id: 3,
    title: "Shoes",
    imageUrl: "https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2018/11/streets.jpg",
  },
  {
    id: 4,
    title: "Kids",
    imageUrl: "https://i.pinimg.com/originals/90/f2/f6/90f2f661e36530cdc354e38ef71dc946.jpg",
  },
  {
    id: 5,
    title: "Womens",
    imageUrl: "https://glaminati.com/wp-content/uploads/2022/03/tp-popular-casual-outfits-your-new-style.jpg",
  },
  {
    id: 6,
    title: "Mens",
    imageUrl: "https://www.stylevore.com/wp-content/uploads/2022/08/bloggerharry-21165970781141738.jpg",
  }
]

const Categories = () => {
    return (
      <CategoriesContainer>
        {categories.map(({title, id, imageUrl}) => (
          <CatelogItem key={id} title={title} imageUrl={imageUrl}/>
        ))}
      </CategoriesContainer>
    )
}

export default Categories;
