import {
  FormBody,
  Inputs,
  FormTitle,
  InputContainer,
  InputLabel,
  Input,
  ButtonContainer,
  ErrorText,
} from "./styles";
import Button from "./Button";
import useInput from "hooks/use-input";
import { useDispatch } from "react-redux";
import { signIn } from "store/userSlice";
import { useState } from "react";

const Signin = () => {
  const dispatch = useDispatch();

  const [isPending, setIsPending] = useState(false);

  //email validation
  const {
    value: email,
    hasError: emailHasError,
    isTouched: emailIsTouched,
    isFormValid: emailIsValid,
    onBlurHandler: emailOnBlurHandler,
    onChangeHandler: emailOnChangeHandler,
  } = useInput(
    (value) => /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value),
    true
  );

  const {
    value: password,
    onChangeHandler: passwordOnChangeHandler,
    hasError: passwordHasError,
    isFormValid: passwordIsValid,
    isTouched: passwordIsTouched,
    onBlurHandler: passwordOnBlurHandler,
  } = useInput((value) => value.trim() !== "", true);

  const signInHandler = (e) => {
    e.preventDefault();
    setIsPending(true);
    dispatch(
      signIn({ email, password }, () => {
        setIsPending(false);
      })
    );
  };

  return (
    <FormBody onSubmit={signInHandler} data-testid="signup">
      <FormTitle>Sign in</FormTitle>
      <Inputs>
        <InputContainer>
          <InputLabel htmlFor="email">email</InputLabel>
          <Input
            id="email"
            type="text"
            placeholder="please enter your email"
            onChange={emailOnChangeHandler}
            onBlur={emailOnBlurHandler}
            value={email}
          />
          {emailHasError && emailIsTouched ? (
            <ErrorText>
              {email.trim() === ""
                ? "please enter your email."
                : "please enter your correct email."}
            </ErrorText>
          ) : (
            ""
          )}
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="password">password</InputLabel>
          <Input
            id="password"
            type="password"
            placeholder="please enter your password"
            value={password}
            onChange={passwordOnChangeHandler}
            onBlur={passwordOnBlurHandler}
          />
          {passwordHasError && passwordIsTouched ? (
            <ErrorText>please enter your password</ErrorText>
          ) : (
            ""
          )}
        </InputContainer>
      </Inputs>
      <ButtonContainer>
        <Button isDisable={!emailIsValid || !passwordIsValid || isPending} />
      </ButtonContainer>
    </FormBody>
  );
};

export default Signin;
