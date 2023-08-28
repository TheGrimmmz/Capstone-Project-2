import { Outlet } from "react-router-dom"
import Categories from "../../Components/Categories/Categories.jsx"

const Home = () => {
      return (
        <div className='App'>
            <Categories/>
            <Outlet/>
        </div>
      )
}

export default Home
