import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import Home from "./Routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Routes/Navbar/Navbar.jsx";
import Auth from "./Routes/Auth/Auth.jsx";
import Shop from "./Routes/Shop/Shop";
import Checkout from "./Routes/Checkout/Checkout.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import { onStateChanged } from "./Utils/Firebase/Firebase";
import { createUserFromAuth } from "./Utils/Firebase/Firebase";
import { setCurrentUser } from "./Store/User/UserAction";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onStateChanged((user)=>{
      if (user) {
        createUserFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    })
    return unsubscribe;
  },[dispatch])

  return (
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="shop/*" element={<Shop/>}/>
          <Route path="auth" element={<Auth/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
      </Routes>
  )
}

export default App;
