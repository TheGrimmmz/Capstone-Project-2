import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../Utils/tests/test.utils";
import CartIcon from "./CartIcon.jsx";

describe("Cart Icon tests", () => {
    test('uses preloaded state to render', () => {
        const initialCartItems = [
            {id: 1, name: 'Item A', imageUrl: 'test', price: 10, quantity: 1},
            {id: 2, name: 'Item B', imageUrl: 'test', price: 10, quantity: 4},
        ];
        renderWithProviders(<CartIcon />, {
            preloadedState: {
                cart: {cartItems: initialCartItems}
            }
        });
        const cartIconElement = screen.getByText('5')
        expect(cartIconElement).toBeInTheDocument()
    })
})
