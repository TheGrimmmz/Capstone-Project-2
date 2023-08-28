import {FormInputLabel, Input, Group} from './FormInput.js'

const FormInput = ({label, inputOptions}) => {
    return (
        <Group>
            <Input {...inputOptions}/>
            {label && (
                <FormInputLabel shrink={inputOptions.value.length}>{label}</FormInputLabel>
            )}
        </Group>
    )
}

export default FormInput
