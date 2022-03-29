import { FormButton } from "./styles";

const Button = (props) => {
  const { isDisable } = props;
  return <FormButton disabled={isDisable}>Submit</FormButton>;
};

export default Button;
