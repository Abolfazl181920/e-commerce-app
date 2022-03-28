import { FormBodyFlex, FormBody, Inputs, InputsParent, FormTitle }  from './styles'

const Signin = () => {
    return (
        <FormBodyFlex>
            <FormBody>
                <FormTitle>Sign in</FormTitle>
                <InputsParent>
                    <Inputs
                        placeholder="&nbsp;&nbsp;&nbsp;Name"
                        margintop="11rem"
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
            </FormBody>
        </FormBodyFlex>
    )
}

export default Signin
