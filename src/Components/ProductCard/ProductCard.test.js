import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../Utils/tests/test.utils";
import ProductCard from "./ProductCard.jsx";

describe("Product Card tests", () => {
    test("it should add product item when button is clicked", () => {
        const mockProduct = {id: 1, imageUrl: "test", name: "Product A", price: 10}
        const {store} = renderWithProviders(<ProductCard product={mockProduct}/>, {
            preloadedState: {
                cart: {cartItems: []}
            }});
        const addToCartButton = screen.getByText(/Add to Cart/i);
        fireEvent.click(addToCartButton);
        expect(store.getState().cart.cartItems.length).toBe(1);
    })
})
