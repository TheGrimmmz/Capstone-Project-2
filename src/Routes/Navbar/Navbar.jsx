import { useState } from "react"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { ReactComponent as Logo } from "../../Assets/king.svg"
import { selectIsCartOpen } from '../../Store/Cart/CartSelector'
import { signOutUser } from "../../Utils/Firebase/Firebase"
import CartIcon from "../../Components/CartIcon/CartIcon.jsx"
import DropDown from "../../Components/DropDown/DropDown.jsx"
import { selectCurrentUser } from '../../Store/User/UserSelector'
import { Nav, LogoContainer, NavLink, NavLinks} from './Navbar.js'

const Navbar = () => {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)
    const [isEditing, setIsEditing] = useState(false)

    const edit = () => {
      setIsEditing(true)
    }
    const stopEdit = () => {
      setIsEditing(false)
    }

    const hideProfileEditOnGoogleSignIn = () => {
      if(currentUser.providerData[0].providerId === 'password' && isEditing === false){
        return (
          <NavLink to='/profile' onClick={edit}>EDIT PROFILE</NavLink>
        )
      }
      return;
    }

    return (
      <>
        <Nav>
            <LogoContainer to='/'>
                <Logo className="logo" onClick={stopEdit}/>
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop' onClick={stopEdit}>SHOP</NavLink>
                {currentUser ? hideProfileEditOnGoogleSignIn() : null}
                {currentUser ? (<NavLink as='span' to='/auth' onClick={signOutUser}>SIGN OUT</NavLink>) :
                (<NavLink to='/auth'>SIGN-IN</NavLink>)
                }
                <CartIcon/>
            </NavLinks>
            {isCartOpen && <DropDown/>}
        </Nav>
        <Outlet/>
      </>
    )
}

export default Navbar
