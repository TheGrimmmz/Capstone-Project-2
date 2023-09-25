import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../Utils/tests/test.utils.js";
import Category from "./Category.jsx";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        category: 'mens',
    })
}))

describe("Category tests", () => {
    test("it should render spinner if isLoading is true", () => {
        renderWithProviders(<Category />, {
            preloadedState: {
                categories: {
                    isLoading: true,
                    categories: []
                }
            }
        });
        const spinnerElement = screen.getByTestId("spinner");
        expect(spinnerElement).toBeInTheDocument();
    })

    test("it should render products if isLoading is false and items are present", () => {
        renderWithProviders(<Category />, {
            preloadedState: {
                categories: {
                    isLoading: false,
                    categories: [
                        {
                        title: 'mens',
                        items: [
                            {id: 1, name: 'Product 1'}, {id: 2, name: 'Product 2'}
                            ]
                        }
                    ]
                }
            }
        });
        
        const spinnerElement = screen.queryByTestId("spinner");
        expect(spinnerElement).toBeNull();

        const product1Element = screen.getByText(/product 1/i);
        expect(product1Element).toBeInTheDocument();
    })
})
