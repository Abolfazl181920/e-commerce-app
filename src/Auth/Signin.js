import { FormBodyFlex, FormBody, Inputs, InputsParent, FormTitle }  from './styles'
import FormLogo from '../Assests/logo2.png'

const Signin = () => {

    const FormImgStyles = {
        width: '4.8rem',
        height: '4.7rem',
        borderRadius: '.5rem',
        marginTop: '1.2rem',
        cursor: 'pointer'
    }

    return (
        <FormBodyFlex>
            <FormBody>
                <img src={FormLogo} style={FormImgStyles} />
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
