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
      if(currentUser.displayName === null && isEditing === false){
        return (
          <NavLink to='/profile' onClick={edit}><b>EDIT PROFILE</b></NavLink>
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
                <NavLink to='/shop' onClick={stopEdit}><b>SHOP</b></NavLink>
                {currentUser ? hideProfileEditOnGoogleSignIn() : null}
                {currentUser ? (<NavLink as='span' to='/auth' onClick={signOutUser}><b>SIGN-OUT</b></NavLink>) :
                (<NavLink to='/auth'><b>SIGN-IN</b></NavLink>)
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
