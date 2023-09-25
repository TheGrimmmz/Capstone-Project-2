import { screen } from "@testing-library/react";
import Navbar from "./Navbar.jsx";
import { renderWithProviders } from "../../Utils/tests/test.utils.js";

describe("Navbar tests", () => {
    test("it should render SignIn link and not SignOut link if no user is logged in", () => {
        renderWithProviders(<Navbar />, {
            preloadedState: {
                user: {currentUser: null}
            }
        })
        const signInLink = screen.getByText(/sign-in/i)
        expect(signInLink).toBeInTheDocument()

        const signOutLink = screen.queryByText(/sign-out/i)
        expect(signOutLink).toBeNull()
    })

    test('it should render SignOut link and not SignIn link if user is logged in', () => {
        renderWithProviders(<Navbar />, {
            preloadedState: {
                user: {currentUser: {}}
            }
        })
        const signOutLink = screen.getByText(/sign-out/i)
        expect(signOutLink).toBeInTheDocument()

        const signInLink = screen.queryByText(/sign-in/i)
        expect(signInLink).toBeNull()
    })

    test('it should not render Dropdown if isCartOpen is false', () => {
        renderWithProviders(<Navbar />, {
            preloadedState: {
                cart: {
                    isCartOpen: false,
                    cartItems: []
                }
            }
        });
        const dropDownText = screen.queryByText(/Cart is Empty/i);
        expect(dropDownText).toBeNull();
    })

    test("it should render Dropdown if isCartOpen is true", () => {
        renderWithProviders(<Navbar />, {
            preloadedState: {
                cart: {
                    isCartOpen: true,
                    cartItems: []
                }
            }
        });
        const dropDownText = screen.getByText(/Cart is Empty/i);
        expect(dropDownText).toBeInTheDocument();
    })
})
