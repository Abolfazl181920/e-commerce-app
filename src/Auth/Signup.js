import { FormBodyFlex, FormBody, Inputs, InputsParent, FormTitle }  from './styles'
import FormLogo from '../Assests/logo2.png'

const Signup = () => {
    return (
        <FormBodyFlex>
            <FormBody>
                <FormTitle>Sign up</FormTitle>
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

export default Signup
