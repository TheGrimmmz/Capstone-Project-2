import { SpinnerOverlay, SpinnerContainer } from "./Spinner";

const Spinner = () => {
    return (
        <SpinnerOverlay data-testid='spinner'>
            <SpinnerContainer/>
        </SpinnerOverlay>
    )
}

export default Spinner
