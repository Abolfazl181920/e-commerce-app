import { useState } from 'react'
import { FormBodyFlex, FormBody, Inputs, InputsParent, FormTitle }  from './styles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './Button'

const Signup = () => {

    const [ name, setName ] = useState("")
    const [ family, setFamily ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ isValid, setIsValid ] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()
        if (!name, !family, !email) {
           toast("Please Fill Out All Inputs!", {
               theme:"dark"
           })
        } else {
            setIsValid(true)
            toast("Your regestration is completed! You will redirect to Sign in page after 3 seconds ...", {
                theme:"dark"
            })

            // I will create a function to redirect user to /signin
        }
    }

    return (
        <FormBodyFlex>
            <ToastContainer/>
            <FormBody action="#" onSubmit={submitForm}  data-testid="signup">
                <FormTitle>Sign up</FormTitle>
                <InputsParent>
                    <Inputs
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="&nbsp;&nbsp;&nbsp;Name"
                        margintop="9rem"
                        data-testid="NameInput"
                    />
                    <Inputs
                        value={family}
                        onChange={(e) => setFamily(e.target.value)}
                        placeholder="&nbsp;&nbsp;&nbsp;Family"
                        margintop="1rem"
                        data-testid="FamilyInput"
                    />
                    <Inputs
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="&nbsp;&nbsp;&nbsp;Email"
                        margintop="1rem"
                        data-testid="EmailInput"
                    />
                </InputsParent>
                <Button />
            </FormBody>
        </FormBodyFlex>
    )
}

export default Signup
