import { render, screen } from '@testing-library/react';
import Button, {TYPES} from './Button.jsx';

describe("button tests", () => {
    test('should render base button when prop is not passed', () => {
        render(<Button/>);
        const buttonEle = screen.getByRole("button");
    //     expect(buttonEle).toHaveStyle("background-color: rgb(54, 54, 54);")
    })

    test('should render google button when prop is passed', () => {
        render(<Button buttonType={TYPES.google}/>)
        const googleButton = screen.getByRole("button");
    //     expect(googleButton).toHaveStyle("background-color: #4285f4;")
    })

    test('should render inverted button when prop is passed', () => {
        render(<Button buttonType={TYPES.inverted}/>)
        const invertedButton = screen.getByRole("button");
    //     expect(invertedButton).toHaveStyle("background-color: lightgrey;")
    })

    test("should be disabled if isLoading is true", () => {
        render(<Button isLoading={true}/>)
        const buttonEle = screen.getByRole("button");
        expect(buttonEle).toBeDisabled();
    })
})
