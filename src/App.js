import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Home from "./Routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Routes/Navbar/Navbar.jsx";
import Auth from "./Routes/Auth/Auth.jsx";
import Shop from "./Routes/Shop/Shop";
import Checkout from "./Routes/Checkout/Checkout.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Success from './Components/Success/Success.jsx'
import Failed from './Components/Failed/Failed.jsx'
import { onStateChanged } from "./Utils/Firebase/Firebase";
import { createUserFromAuth } from "./Utils/Firebase/Firebase";
import { setCurrentUser } from "./Store/User/UserAction";
import { setIsCartOpen } from "./Store/Cart/CartAction";
import { selectIsCartOpen } from "./Store/Cart/CartSelector";

const App = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)


  useEffect(() => {
    const unsubscribe = onStateChanged((user)=>{
      if (user) {
        createUserFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    })
    return unsubscribe;
  },[dispatch])

  const toggleDropdown = () => {
    if(isCartOpen === true){
        dispatch(setIsCartOpen(false))
    }
  }

  useEffect(() => {
    window.addEventListener('click', toggleDropdown)
    return ()=>{window.removeEventListener('click', toggleDropdown)}
  })

  return (
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="shop/*" element={<Shop/>}/>
          <Route path="auth" element={<Auth/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="success" element={<Success/>}/>
          <Route path="failed" element={<Failed/>}/>
        </Route>
      </Routes>
  )
}

export default App;
