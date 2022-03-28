import { render } from '@testing-library/react'
import Signup from './Signup'

describe("Signup component", () => {
    it("check to rendered Signup", () => {
        const { getByTestId } = render(<Signup />)
        const signup = getByTestId("signup")
        expect(signup).toBeTruthy()
    })

    // it("Checking to be honest that name input don't be empty", () => {
    //     const { getByTestId } = render(<Signup />)
    //     const nameInput = getByTestId("NameInput")
    //     expect(nameInput).toBeNull()
    // })
})