import styled from 'styled-components'

// Signup.js and Signin.js styles
export const FormBodyFlex = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    min-height: 100vh;
`

export const FormBody = styled.form`
    display: flex;
    justify-content: center;
    height: 63vh;
    width: 50vh;
    border-radius: 1rem;
    background-color: #111111;
    color: rgb(240, 231, 231);
    font-weight: 700;
`

export const FormTitle = styled.span`
    color: #fff;
    margin-top: 5rem;
    position: absolute;
    font-size: 1.2rem;
`

export const InputsParent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
`

export const Inputs = styled.input`
    height: 2rem;
    width: 16rem;
    background-color: rgb(32, 31, 31);
    margin-top: ${props => props.margintop};
    border: none;
    cursor: pointer;
    color: #fff;
    border-radius: .7rem;
`


// Button.js styles
export const FormButton = styled.button`
    height: 2.5rem;
    width: 8rem;
    font-weight: 700;
    background-color: rgb(32, 31, 31);
    color: #fff;
    margin-top: 20rem;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
`