import {
  FormBody,
  Input,
  Inputs,
  FormTitle,
  InputContainer,
  InputLabel,
  ButtonContainer,
  ErrorText,
} from "./styles";
import "react-toastify/dist/ReactToastify.css";
import Button from "./Button";
import useInput from "hooks/use-input";
import { useEffect } from "react";

const Signup = () => {
  //username validation
  const {
    value: username,
    hasError: usernameHasError,
    isTouched: usernameIsTouched,
    isFormValid: usernameIsValid,
    onBlurHandler: usernameOnBlurHandler,
    onChangeHandler: usernameOnChangeHandler,
  } = useInput((value) => /^[a-z0-9_-]{3,15}$/.test(value), true);

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

  //password validation
  const {
    value: password,
    hasError: passwordHasError,
    isTouched: passwordIsTouched,
    isFormValid: passwordIsValid,
    onBlurHandler: passwordOnBlurHandler,
    onChangeHandler: passwordOnChangeHandler,
  } = useInput((value) => value.trim().length >= 8, true);

  //repeat password validation
  const {
    value: repeatPassword,
    hasError: repeatPasswordHasError,
    isTouched: repeatPasswordIsTouched,
    isFormValid: repeatPasswordIsValid,
    onBlurHandler: repeatPasswordOnBlurHandler,
    onChangeHandler: repeatPasswordOnChangeHandler,
    setIsFormValid,
    setHasError,
  } = useInput((value) => value === password, true);

  //if user first entered repeat password and then entered password, the repeat password error will be removed
  useEffect(() => {
    if (password === repeatPassword) {
      setHasError(false);
      setIsFormValid(true);
    }
  }, [password, repeatPassword]);

  return (
    <FormBody action="#" data-testid="signup">
      <FormTitle>Sign up</FormTitle>
      <Inputs>
        <InputContainer>
          <InputLabel htmlFor="username">username</InputLabel>
          <Input
            id="username"
            type="text"
            placeholder="please enter your username"
            onChange={usernameOnChangeHandler}
            onBlur={usernameOnBlurHandler}
            value={username}
          />
          {usernameHasError && usernameIsTouched ? (
            <ErrorText>
              please enter a username that may contain _ and - and has a length
              of 3 to 15.
            </ErrorText>
          ) : (
            ""
          )}
        </InputContainer>
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
            <ErrorText>
              please enter a password with the length of 8 or higher.
            </ErrorText>
          ) : (
            ""
          )}
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="repeat-password">confirm password</InputLabel>
          <Input
            id="repeat-password"
            type="password"
            placeholder="please enter your password again"
            value={repeatPassword}
            onChange={repeatPasswordOnChangeHandler}
            onBlur={repeatPasswordOnBlurHandler}
          />
          {repeatPasswordHasError && repeatPasswordIsTouched ? (
            <ErrorText>please enter your entered password.</ErrorText>
          ) : (
            ""
          )}
        </InputContainer>
      </Inputs>
      <ButtonContainer>
        <Button
          isDisable={
            !usernameIsValid ||
            !emailIsValid ||
            !passwordIsValid ||
            !repeatPasswordIsValid
          }
        />
      </ButtonContainer>
    </FormBody>
  );
};

export default Signup;
