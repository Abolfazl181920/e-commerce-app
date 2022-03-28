import { FormBodyFlex, FormBody, Inputs, InputsParent, FormTitle }  from './styles'
import Button from './Button'

const Signup = () => {
    return (
        <FormBodyFlex>
            <FormBody>
                <FormTitle>Sign up</FormTitle>
                <InputsParent>
                    <Inputs
                        placeholder="&nbsp;&nbsp;&nbsp;Name"
                        margintop="9rem"
                    />
                    <Inputs
                        placeholder="&nbsp;&nbsp;&nbsp;Family"
                        margintop="1rem"
                    />
                    <Inputs
                        placeholder="&nbsp;&nbsp;&nbsp;Email"
                        margintop="1rem"
                    />
                </InputsParent>
                <Button />
            </FormBody>
        </FormBodyFlex>
    )
}

export default Signup
