import {BaseButton, GoogleButton, Inverted, ButtonSpinner} from './Button.js'

export const TYPES = {
    base: 'base',
    google: 'google-signin',
    inverted: 'inverted'
}

const getButton = (buttonType = TYPES.base) => (
    {
        [TYPES.base]: BaseButton,
        [TYPES.google]: GoogleButton,
        [TYPES.inverted]: Inverted
    }
    [buttonType]);

const NewButton = ({children, buttonType, isLoading, ...otherProps}) => {
    const CustomButton = getButton(buttonType)
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner/> : children}
        </CustomButton>
    )
}

export default NewButton;
